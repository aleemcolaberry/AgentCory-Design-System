// Marketing hero — headline, stats, and a product visual (the Cory chat preview)
function Hero({ onTry, onDemo, onOpenChat }) {
  const { Button, StatCard, Badge, ChatBubble } = window.DesignSystem_ebeb85;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-page)' }}>
      {/* soft brand glow */}
      <div style={{
        position: 'absolute', top: -160, insetInlineEnd: -120, width: 520, height: 520, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,190,221,0.18), rgba(37,138,253,0.05) 60%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(32px, 5vw, 56px)', alignItems: 'center', position: 'relative',
      }}>
        <div>
          <span className="cory-eyebrow-pill" style={{ marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-500)' }} />
            AI Admissions Assistant
          </span>
          <h1 style={{ fontSize: 56, lineHeight: 1.04, letterSpacing: '-0.03em', margin: '0 0 18px' }}>
            Boost admissions with <span className="cory-gradient-text">AI precision</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--text-body)', margin: '0 0 28px', maxWidth: 480 }}>
            Engage every inquiry in under 60 seconds. Turn prospects into enrolled students.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onTry}>Try Cory Now</Button>
            <Button variant="secondary" size="lg" onClick={onDemo}>Book a Demo</Button>
          </div>
          <div style={{ display: 'flex', gap: '24px 44px', flexWrap: 'wrap' }}>
            <StatCard value="<60s" label="Response Time" gradient />
            <StatCard value="94%" label="Contact Rate" />
            <StatCard value="10x" label="ROI Potential" />
          </div>
        </div>

        {/* Product visual: floating chat preview */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'var(--surface-card)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-xl)', padding: 18, maxWidth: 400, marginInlineStart: 'auto',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 6px 14px', borderBottom: '1px solid var(--border-subtle)', marginBottom: 14 }}>
              <img src="../../assets/cory-tile-dark.svg" alt="" style={{ width: 36, height: 36, borderRadius: 'var(--radius-tile)' }} />
              <div style={{ lineHeight: 1.25 }}>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-strong)' }}>Cory</div>
                <div style={{ fontSize: 12, color: 'var(--text-success)', fontWeight: 600 }}>● Online now</div>
              </div>
              <Badge tone="brand" size="sm" style={{ marginInlineStart: 'auto' }}>&lt; 5s</Badge>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <ChatBubble from="cory" time="9:41 AM">Hi, I'm Cory 👋 Ready to find your program?</ChatBubble>
              <ChatBubble from="user">Do you offer evening MBA classes?</ChatBubble>
              <ChatBubble from="cory" showAvatar={true}>Yes, Tue/Thu evenings. Want me to book a call with an advisor?</ChatBubble>
            </div>
            <button onClick={onOpenChat} style={{
              marginTop: 16, width: '100%', padding: '11px', borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-default)', background: 'var(--surface-sunken)',
              color: 'var(--text-muted)', fontSize: 14, fontFamily: 'var(--font-sans)', cursor: 'pointer', textAlign: 'start',
            }}>Ask Cory a question…</button>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
