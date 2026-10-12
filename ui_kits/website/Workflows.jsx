// "How Cory Works" — five automated workflows with metric chips
const Icon = ({ name }) => <window.LucideIcon name={name} size={22} />;
function Workflows() {
  const { Badge } = window.DesignSystem_ebeb85;
  const steps = [
    { icon: 'phone-incoming', title: 'Instant Inbound Response', body: 'Answer every call, text, email in under 5 seconds.', a: '100% Response', b: '<5s Answer' },
    { icon: 'timer', title: '60-Second Lead Contact', body: 'Call, voicemail, SMS, email, automatically sequenced.', a: '94% Contact', b: '<60s First Touch' },
    { icon: 'calendar-check', title: 'Appointment Show & Recovery', body: 'Reminders, confirmations, instant no-show rebooking.', a: '85% Show Rate', b: '67% Recovered' },
    { icon: 'sparkles', title: 'Smart Nurture Campaigns', body: '15 personalized emails with resources and stories.', a: '23% Engagement', b: '15 Touch Points' },
    { icon: 'refresh-cw', title: 'Long-Term Re-engagement', body: '60-day cycles with updates and scholarship alerts.', a: '18% Reactivated', b: '60 Day Cycle' },
  ];
  return (
    <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '76px var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="cory-overline">How Cory Works</span>
          <h2 style={{ fontSize: 38, letterSpacing: '-0.03em', margin: '10px 0 8px' }}>Five workflows, zero manual effort</h2>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', margin: 0 }}>Cory runs the entire top of your enrollment funnel, automatically.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '52px minmax(0, 1fr)', gap: 20, alignItems: 'start',
              background: 'var(--surface-page)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: '20px 24px',
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--gradient-ink)',
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><Icon name={s.icon} /></div>
                <span style={{
                  position: 'absolute', top: -8, insetInlineStart: -8, width: 22, height: 22, borderRadius: '50%',
                  background: 'var(--surface-card)', border: '1px solid var(--border-default)', fontSize: 11,
                  fontWeight: 700, color: 'var(--text-link)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{i + 1}</span>
              </div>
              <div>
                <h3 style={{ fontSize: 18, margin: '0 0 3px' }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: 0 }}>{s.body}</p>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', gridColumn: '2' }}>
                <Badge tone="success" dot>{s.a}</Badge>
                <Badge tone="brand">{s.b}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Workflows });
