import sys, json, io, re
from PIL import Image


def lum(c):
    def f(v):
        v /= 255.0
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])


def cr(a, b):
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def parse(c):
    v = [float(x) for x in re.findall(r'[\d.]+', c)[:4]]
    return (v[0], v[1], v[2], v[3] if len(v) > 3 else 1.0)


tot = 0
bad = []
for pre in sys.argv[1:]:
    d = json.load(io.open(pre + '.json', encoding='utf-8'))
    im = Image.open(pre + '.png').convert('RGB')
    W, H = im.size
    px = im.load()
    for it in d['items']:
        if it['dis']:
            continue
        x0, y0 = int(max(0, it['x'])), int(max(0, it['y']))
        x1, y1 = int(min(W - 1, it['x'] + it['w'])), int(min(H - 1, it['y'] + it['h']))
        if x1 - x0 < 3 or y1 - y0 < 3:
            continue
        big = it['fs'] >= 24 or (it['fs'] >= 18.66 and it['fw'] >= 700)
        need = 3.0 if big else 4.5
        if it['color'].startswith('GRAD:'):
            cols = [parse(m) for m in re.findall(r'rgba?\([^)]*\)', it['color'])]
        else:
            cols = [parse(it['color'])]
        if not cols:
            continue
        samples = []
        sx = max(1, (x1 - x0) // 12)
        sy = max(1, (y1 - y0) // 4)
        for yy in range(y0, y1, sy):
            for xx in range(x0, x1, sx):
                samples.append(px[xx, yy])
        worst = 99
        for c in cols:
            a = c[3] * it['op']
            rs = []
            for b in samples:
                fg = tuple(c[i] * a + b[i] * (1 - a) for i in range(3))
                rs.append(cr(fg, b))
            rs.sort()
            worst = min(worst, rs[max(0, int(len(rs) * 0.1))])  # 10th percentile: ignore stray edge pixels
        tot += 1
        if worst < need - 0.05:
            bad.append((worst, need, d['page'], d['w'], d['theme'], it['fs'], it['fw'], it['t'], it['color'][:44]))
bad.sort()
seen = set()
for b in bad:
    key = (b[2], b[4], b[7][:20])
    if key in seen:
        continue
    seen.add(key)
    print('%.2f (need %.1f) %s@%s %s %dpx/%d "%s" %s' % (b[0], b[1], b[2].split('/')[-1], b[3], b[4] or 'pinned', b[5], b[6], b[7], b[8]))
print('checked', tot, 'text boxes; failing', len(seen))
