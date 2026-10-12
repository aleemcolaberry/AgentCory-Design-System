// Testimonials + Colaberry banner + closing CTA + footer
function Proof() {
  const { Testimonial, Button } = window.DesignSystem_ebeb85;
  const data = [
    { metric: '847%', metricLabel: 'ROI in Year 1', quote: 'Cory transformed our admissions process. We went from 40% contact rates to 94% overnight, and conversion improved 30%.', name: 'Dr. Sarah Johnson', role: 'Director of Admissions, Metro State University' },
    { metric: '2,100', metricLabel: 'Hours Saved / Year', quote: 'Our team focuses on relationships instead of manual outreach. Cory handles qualification perfectly and hands off with full context.', name: 'Michael Chen', role: 'VP Enrollment Management, Tech Institute' },
    { metric: '$2.4M', metricLabel: 'Added Revenue', quote: 'The 24/7 availability alone increased our inquiries by 20%. Weekend leads now convert at the same rate as business hours.', name: 'Lisa Rodriguez', role: 'Enrollment Director, Community College Network' },
  ];
  return (
    <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '76px var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="cory-overline">Trusted by leading institutions</span>
          <h2 style={{ fontSize: 38, letterSpacing: '-0.03em', margin: '10px 0 0' }}>Results admissions teams feel</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--grid-gap)' }}>
          {data.map((d, i) => <Testimonial key={i} {...d} />)}
        </div>
      </div>
    </section>
  );
}

function ClosingCta({ onDemo }) {
  const { Button } = window.DesignSystem_ebeb85;
  return (
    <section style={{ background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px var(--gutter) 80px' }}>
        <div style={{
          position: 'relative', overflow: 'hidden', background: 'var(--gradient-ink)',
          borderRadius: 'var(--radius-2xl)', padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px)', color: '#fff',
          display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{
            position: 'absolute', bottom: -120, insetInlineEnd: 40, width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(41,190,221,0.35), transparent 65%)', pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <img src="../../assets/cory-tile.svg" alt="" style={{ width: 56, height: 56, borderRadius: 'var(--radius-tile)', marginBottom: 18 }} />
            <h2 style={{ color: '#fff', fontSize: 34, letterSpacing: '-0.03em', margin: '0 0 10px' }}>Let's work together</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', margin: 0, maxWidth: 480 }}>
              I'm ready to help your team engage more prospects, save time, and boost enrollments. Let me show you how in 30 minutes.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <Button variant="primary" size="lg" onClick={onDemo}>Book My Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const cols = [
    { h: 'Product', items: ['Features', 'How It Works', 'Demo', 'Case Studies'] },
    { h: 'Resources', items: ['Blog', 'Guides', 'Webinars', 'Help Center'] },
    { h: 'Company', items: ['About', 'Careers', 'Privacy Policy', 'Terms of Service'] },
  ];
  return (
    <footer style={{ background: 'var(--surface-ink)', color: 'var(--on-ink-body)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px var(--gutter) 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 40 }}>
        <div>
          <img src="../../assets/logo-agentcory-darkmode.svg" alt="AgentCory" style={{ height: 26, marginBottom: 16 }} />
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: '0 0 16px', maxWidth: 260 }}>
            AI-powered admissions assistant that boosts conversions with lightning-fast, multi-channel outreach.
          </p>
          {/* Social channels as text links: the owned icon set carries no brand marks, and an empty circle names nothing */}
          <div style={{ display: 'flex', gap: '4px 16px', flexWrap: 'wrap' }}>
            {['LinkedIn', 'X', 'YouTube', 'Instagram'].map((n) => (
              <a key={n} href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--on-ink-strong)', fontSize: 13, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3, padding: '5px 0', minWidth: 24, minHeight: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{n}</a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h3 style={{ color: '#fff', fontSize: 14, fontWeight: 700, margin: '0 0 14px' }}>{c.h}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {c.items.map((it) => <a key={it} href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--on-ink-body)', fontSize: 14, textDecoration: 'none', padding: '5px 0', display: 'inline-block' }}>{it}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--on-ink-border)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '18px var(--gutter)', paddingInlineEnd: 'max(var(--gutter), 100px)', display: 'flex', justifyContent: 'space-between', fontSize: 13, flexWrap: 'wrap', gap: 8 }}>
          <span>© 2026 Agent Cory · Powered by Colaberry</span>
          <span>cory@agentcory.ai · 1-888-465-1991 · Plano, TX</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Proof, ClosingCta, SiteFooter });
