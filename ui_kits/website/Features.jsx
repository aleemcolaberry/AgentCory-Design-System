// "Why Admissions Teams Choose Cory" — feature grid
const Icon = ({ name }) => <window.LucideIcon name={name} size={24} />;
function Features() {
  const { FeatureCard } = window.DesignSystem_ebeb85;
  const items = [
    { icon: 'zap', title: 'Lightning-Fast Outreach', body: 'Strike while the iron is hot. Cory engages every new inquiry within 60 seconds, ensuring no lead goes cold.', tags: ['30s avg response', 'Natural AI conversation', 'Voicemail detection'] },
    { icon: 'messages-square', title: 'Multi-Channel Mastery', body: 'Meet prospects where they are across voice, SMS, email, and chat. Each touchpoint is perfectly timed.', tags: ['Voice + SMS + Email', 'Perfect timing', 'WhatsApp support'] },
    { icon: 'clock', title: 'Always Available', body: 'Never miss an inquiry, regardless of time or day. Cory captures weekend and evening leads competitors lose.', tags: ['24/7 coverage', 'Time zone smart', 'Holiday support'] },
    { icon: 'brain', title: 'Intelligent FAQ Brain', body: 'Cory knows your programs inside and out, trained on your curriculum, requirements, costs, and policies.', tags: ['Custom training', 'Auto updates', 'Human escalation'] },
    { icon: 'target', title: 'Smart Qualification', body: 'Books meetings and hands off to counselors with full context. Reduces manual outreach by 80–90%.', tags: ['Lead scoring', 'Auto booking', 'Context handoff'] },
    { icon: 'plug', title: 'Seamless Integration', body: 'Plugs into your CRM/SIS, every touch logged, dashboards included. Native Slate, Salesforce, and Banner.', tags: ['CRM sync', 'Auto logging', 'Real-time data'] },
  ];
  return (
    <section style={{ background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '76px var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="cory-overline">Why teams choose Cory</span>
          <h2 style={{ fontSize: 38, letterSpacing: '-0.03em', margin: '10px 0 0' }}>Built for enrollment teams</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--grid-gap)' }}>
          {items.map((it, i) => (
            <FeatureCard key={i} icon={<Icon name={it.icon} />} title={it.title} tags={it.tags}>{it.body}</FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Features });
