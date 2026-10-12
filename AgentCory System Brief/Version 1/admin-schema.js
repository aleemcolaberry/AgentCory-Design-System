/* Admin schema and text <-> structure converters. Loaded by Admin.dc.html. */
(function () {
  var lines = function (a) { return (a || []).join('\n'); };
  var unlines = function (s) { return String(s || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean); };
  var pipe = function (a, keys) { return (a || []).map(function (o) { return keys.map(function (k) { return o[k] || ''; }).join(' | '); }).join('\n'); };
  var unpipe = function (s, keys) { return unlines(s).map(function (l) { var p = l.split('|').map(function (x) { return x.trim(); }), o = {}; keys.forEach(function (k, i) { o[k] = p[i] || ''; }); return o; }); };
  var pairs = function (a) { return (a || []).map(function (x) { return x.join(' | '); }).join('\n'); };
  var unpairs = function (s) { return unlines(s).map(function (l) { var i = l.indexOf('|'); return i < 0 ? [l, ''] : [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }); };

  /* Body text: "## Heading", paragraphs, "- list", "1. Tier: text", "- [Card] text", ``` code ``` */
  function toMd(blocks) {
    return (blocks || []).map(function (b) {
      var out = ['## ' + (b.h || '')];
      (b.p || []).forEach(function (p) { out.push('', p); });
      (b.tiers || []).forEach(function (t, i) { out.push((i ? '' : '\n') + (i + 1) + '. ' + t[0] + ': ' + t[1]); });
      (b.grid || []).forEach(function (g, i) { out.push((i ? '' : '\n') + '- [' + g[0] + '] ' + g[1]); });
      if (b.code) out.push('', '```', b.code, '```');
      (b.list || []).forEach(function (x, i) { out.push((i ? '' : '\n') + '- ' + x); });
      return out.join('\n');
    }).join('\n\n');
  }
  function fromMd(s) {
    var blocks = [], cur = null, code = null, para = [];
    var flush = function () { if (cur && para.length) { cur.p.push(para.join(' ')); } para = []; };
    String(s || '').split('\n').forEach(function (raw) {
      var l = raw.replace(/\s+$/, '');
      if (code !== null) { if (/^```/.test(l)) { cur.code = code.join('\n'); code = null; } else code.push(raw); return; }
      if (/^##\s+/.test(l)) { flush(); cur = { h: l.replace(/^##\s+/, ''), p: [], list: [], tiers: [], grid: [] }; blocks.push(cur); return; }
      if (!cur) { cur = { h: '', p: [], list: [], tiers: [], grid: [] }; blocks.push(cur); }
      if (/^```/.test(l)) { flush(); code = []; return; }
      var m;
      if ((m = l.match(/^\d+\.\s+(.+?):\s+(.+)$/))) { flush(); cur.tiers.push([m[1], m[2]]); return; }
      if ((m = l.match(/^-\s+\[(.+?)\]\s+(.+)$/))) { flush(); cur.grid.push([m[1], m[2]]); return; }
      if ((m = l.match(/^-\s+(.+)$/))) { flush(); cur.list.push(m[1]); return; }
      if (!l.trim()) { flush(); return; }
      para.push(l.trim());
    });
    flush();
    return blocks.map(function (b) { var o = { h: b.h, p: b.p }; if (b.list.length) o.list = b.list; if (b.tiers.length) o.tiers = b.tiers; if (b.grid.length) o.grid = b.grid; if (b.code) o.code = b.code; return o; });
  }

  var F = function (key, label, type, extra) { var o = { key: key, label: label, type: type || 'text' }; for (var k in extra || {}) o[k] = extra[k]; return o; };
  var listing = { id: 'listing', title: 'Listing and search', fields: [F('order', 'Position in the list', 'number', { help: 'Lower numbers come first.' }), F('home', 'Show on the home page', 'check'), F('hidden', 'Hide from the public site', 'check')] };

  var S = {
    projects: { label: 'Projects', one: 'project', path: 'Project.dc.html?slug=', cols: ['Project', 'Status', 'State', 'Last edited'], col2: function (x) { return x.status; },
      blank: function () { return { title: '', summary: '', status: 'In progress', topics: [], sections: [], gallery: [], updates: [], order: 99 }; },
      sections: [
        { id: 'basics', title: 'Basics', fields: [F('slug', 'Page address', 'text', { help: 'The last part of the address: /work/your-text. Leave blank to make it from the title.', newOnly: true, full: true }), F('title', 'Title', 'text', { required: true }), F('status', 'Status', 'select', { options: ['In progress', 'Shipped', 'Concept'] }), F('summary', 'Summary', 'textarea', { full: true, help: 'Shown on cards and in search results. 220 characters at most.', max: 220, required: true }), F('role', 'Role'), F('team', 'Team'), F('tools', 'Tools', 'text', { help: 'Separate with " · ".', full: true }), F('topics', 'Topics', 'csv', { help: 'Separate with commas. These become the filters on the Work page.', full: true }), F('year', 'Year')] },
        { id: 'links', title: 'Links', fields: [F('live', 'Live site', 'url'), F('repo', 'Repository', 'url'), F('caseSlug', 'Related case study', 'text', { help: 'The case study\u2019s page address, for example colaberry-design-system.' })] },
        { id: 'cover', title: 'Cover image', fields: [F('cover', 'Cover image: file', 'image'), F('coverAlt', 'Cover image: description for people who cannot see it')] },
        { id: 'gallery', title: 'Gallery', fields: [F('gallery', 'Gallery', 'pipes', { keys: ['src', 'cap'], help: 'One image per line: file | caption.', full: true })] },
        { id: 'updates', title: 'Updates', fields: [F('updates', 'Dated updates', 'pipes', { keys: ['date', 'h', 'p'], help: 'One per line: 2026-09-21 | Heading | What changed.', full: true })] },
        listing,
        { id: 'body', title: 'Body', fields: [F('sections', 'Text', 'md', { full: true, help: 'Start a heading with ##, a list item with -. Paragraphs are separated by a blank line.' })] }] },
    cases: { label: 'Case studies', one: 'case study', path: 'Case Study.dc.html?slug=', cols: ['Case study', 'Category', 'State', 'Last edited'], col2: function (x) { return x.category; },
      blank: function () { return { title: '', number: '', category: '', lead: '', facts: {}, inShort: [], problem: '', constraints: [], process: [], images: [], decisions: [], metrics: [], quote: '', reflection: [], order: 99 }; },
      sections: [
        { id: 'basics', title: 'Basics', fields: [F('slug', 'Page address', 'text', { newOnly: true, full: true, help: 'The last part of the address. Leave blank to make it from the title.' }), F('title', 'Title', 'text', { required: true }), F('number', 'Number', 'text', { help: 'The two digits shown beside the title, for example 01.' }), F('category', 'Category'), F('read', 'Reading time'), F('lead', 'Lead', 'textarea', { full: true, help: 'One sentence on what changed, not what was made.', required: true }), F('cover', 'Cover image: file', 'image'), F('coverAlt', 'Cover image: description')] },
        { id: 'facts', title: 'Facts', fields: [F('facts.role', 'Role'), F('facts.company', 'Company'), F('facts.timeline', 'Timeline'), F('facts.team', 'Team'), F('facts.platform', 'Platform'), F('facts.tools', 'Tools')] },
        { id: 'short', title: 'In short', fields: [F('inShort', 'Summary points', 'lines', { full: true, help: 'Three to five short lines, one per line.' })] },
        { id: 'problem', title: 'Problem and context', fields: [F('problem', 'Problem', 'textarea', { full: true }), F('constraints', 'Constraints', 'lines', { full: true, help: 'One per line.' })] },
        { id: 'process', title: 'Process', fields: [F('process', 'Steps', 'pipes', { keys: ['h', 'p'], full: true, help: 'One step per line: Heading | What happened.' }), F('images', 'Images', 'pipes', { keys: ['src', 'cap'], full: true, help: 'One per line: file | caption.' })] },
        { id: 'decisions', title: 'Decisions and trade-offs', fields: [F('decisions', 'Decisions', 'pipes', { keys: ['h', 'p'], full: true, help: 'One per line: Decision | Trade-off.' })] },
        { id: 'outcomes', title: 'Outcomes', fields: [F('metrics', 'Outcomes', 'pipes', { keys: ['v', 'l'], full: true, help: 'One per line: Value | What it measures. Only figures you can show a source for.' }), F('quote', 'Pull quote', 'text', { full: true })] },
        { id: 'reflection', title: 'Reflection', fields: [F('reflection', 'What you learned', 'lines', { full: true, help: 'One per line.' }), F('project', 'Related project', 'text', { help: 'The project\u2019s page address.' })] },
        listing] },
    posts: { label: 'Blog posts', one: 'post', path: 'Post.dc.html?slug=', cols: ['Post', 'Topics', 'State', 'Last edited'], col2: function (x) { return (x.topics || []).join(', '); },
      blank: function () { return { title: '', excerpt: '', lead: '', date: new Date().toISOString().slice(0, 10), read: '', topics: [], body: fromMd('## The problem\n\n[WRITE: What was going wrong, for whom, and why it mattered.]\n\n## What I did\n\n[WRITE: The approach, in the order it happened.]\n\n## What happened\n\n[WRITE: What changed. Only figures you can show a source for.]'), order: 99 }; },
      sections: [
        { id: 'basics', title: 'Basics', fields: [F('slug', 'Page address', 'text', { newOnly: true, full: true, help: 'The last part of the address: /blog/your-text.' }), F('title', 'Title', 'text', { required: true, full: true }), F('excerpt', 'Excerpt', 'textarea', { full: true, help: 'One or two sentences, shown on cards and in search results.', required: true }), F('lead', 'Lead paragraph', 'textarea', { full: true }), F('topics', 'Topics', 'csv', { help: 'Separate with commas. These become the topic pages of the blog.' }), F('date', 'Published', 'date'), F('read', 'Reading time'), F('updated', 'Show as "Updated"', 'check')] },
        { id: 'download', title: 'Download', fields: [F('download.label', 'Button words'), F('download.href', 'File address', 'text', { help: 'For example ../assets/downloads/component-spec-template.md' })] },
        listing,
        { id: 'body', title: 'Body', fields: [F('body', 'Text', 'md', { full: true, help: 'Markdown: ## heading, - list, 1. Tier: text, - [Card] text, and ``` for code.' })] }] },
    videos: { label: 'Videos', one: 'video', path: 'Videos.dc.html#', cols: ['Video', 'Kind', 'State', 'Last edited'], col2: function (x) { return x.kind; },
      blank: function () { return { title: '', youtubeId: '', kind: 'Long form', date: new Date().toISOString().slice(0, 10), description: '', topics: [], order: 99 }; },
      sections: [
        { id: 'video', title: 'Video', fields: [F('title', 'Title', 'text', { required: true }), F('youtubeId', 'YouTube id', 'text', { help: 'The 11 characters after watch?v= in the video\u2019s address.', pattern: '^[\\w-]{11}$' }), F('date', 'Published', 'date'), F('length', 'Length', 'text', { help: 'As you want it shown, for example 4 min 30 s.' }), F('kind', 'Kind', 'select', { options: ['Long form', 'Short'] }), F('topics', 'Topics', 'csv'), F('description', 'Description', 'textarea', { full: true })] },
        { id: 'poster', title: 'Poster image', fields: [F('poster', 'Poster image: file', 'image', { help: 'Shown until a visitor presses play. Leave blank to use a plain panel with the title.' })] },
        listing] },
    linkedin: { label: 'LinkedIn posts', one: 'LinkedIn post', path: 'Read.dc.html#linkedin', cols: ['LinkedIn post', 'Series', 'State', 'Last edited'], col2: function (x) { return x.series || ''; },
      blank: function () { return { title: '', href: '', date: new Date().toISOString().slice(0, 10), series: '', embed: true, topics: [], order: 99 }; },
      sections: [{ id: 'post', title: 'Post', fields: [F('title', 'Title', 'text', { required: true, help: 'A short line that says what the post is about.', full: true }), F('href', 'Link to the post', 'url', { help: 'On LinkedIn, open the post\u2019s menu and choose "Copy link to post".', required: true }), F('date', 'Posted on', 'date'), F('series', 'Series'), F('topics', 'Topics', 'csv'), F('embed', 'Let visitors load this post on the page', 'check')] }, listing] },
    articles: { label: 'LinkedIn articles', one: 'LinkedIn article', path: 'Read.dc.html#articles', cols: ['LinkedIn article', 'Reading time', 'State', 'Last edited'], col2: function (x) { return x.read || ''; },
      blank: function () { return { title: '', href: '', date: new Date().toISOString().slice(0, 10), read: '', topics: [], order: 99 }; },
      sections: [{ id: 'article', title: 'Article', fields: [F('title', 'Title', 'text', { required: true, full: true }), F('href', 'Link to the article', 'url', { required: true }), F('date', 'Published', 'date'), F('read', 'Reading time', 'text', { help: 'For example 6 min read.' }), F('topics', 'Topics', 'csv')] }, listing] }
  };

  /* Field value <-> text for the editor */
  function getPath(o, k) { return k.split('.').reduce(function (a, p) { return a == null ? undefined : a[p]; }, o); }
  function setPath(o, k, v) { var p = k.split('.'), t = o; for (var i = 0; i < p.length - 1; i++) { t[p[i]] = t[p[i]] || {}; t = t[p[i]]; } t[p[p.length - 1]] = v; }
  function toText(f, v) {
    if (f.type === 'csv') return (v || []).join(', ');
    if (f.type === 'lines') return lines(v);
    if (f.type === 'pipes') return pipe(v, f.keys);
    if (f.type === 'md') return toMd(v);
    if (f.type === 'check') return !!v;
    return v == null ? '' : String(v);
  }
  function fromText(f, s) {
    if (f.type === 'csv') return String(s || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    if (f.type === 'lines') return unlines(s);
    if (f.type === 'pipes') return unpipe(s, f.keys);
    if (f.type === 'md') return fromMd(s);
    if (f.type === 'number') return Number(s) || 0;
    if (f.type === 'check') return !!s;
    return s;
  }
  var slugify = function (s) { return String(s || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60); };

  window.AXA = { S: S, getPath: getPath, setPath: setPath, toText: toText, fromText: fromText, slugify: slugify, pairs: pairs, unpairs: unpairs, pipe: pipe, unpipe: unpipe, lines: lines, unlines: unlines };
})();
