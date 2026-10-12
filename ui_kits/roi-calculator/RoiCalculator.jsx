// AgentCory ROI Calculator — faithful recreation of the live site's interactive tool.
function Field({ label, value, onChange, prefix, suffix, step = 1, min = 0, error }) {
  const id = `roi-${label.replace(/\W+/g, '-').toLowerCase()}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${error ? 'var(--fill-danger)' : 'var(--border-interactive)'}`, borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', overflow: 'hidden' }}>
        {prefix && <span style={{ paddingInlineStart: 14, color: 'var(--text-muted)', fontSize: 15 }}>{prefix}</span>}
        <input id={id} type="number" inputMode="decimal" value={value} step={step} min={min} aria-invalid={!!error || undefined} aria-describedby={error ? `${id}-err` : undefined}
          onChange={(e) => { const n = parseFloat(e.target.value); onChange(Number.isFinite(n) ? Math.max(min, n) : 0); }}
          style={{ flex: 1, border: 0, outline: 'none', padding: '11px 14px', fontSize: 15, fontFamily: 'var(--font-sans)', color: 'var(--text-strong)', background: 'transparent', width: '100%', minWidth: 0 }} />
        {suffix && <span style={{ paddingInlineEnd: 14, color: 'var(--text-muted)', fontSize: 15 }}>{suffix}</span>}
      </div>
      {error && <span id={`${id}-err`} role="alert" style={{ fontSize: 'var(--text-overline)', fontWeight: 500, color: 'var(--text-danger)' }}>{error}</span>}
    </div>
  );
}

function Slider({ label, value, onChange, min, max, suffix }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--text-link)', direction: 'ltr', unicodeBidi: 'isolate' }}>{value}{suffix}</span>
      </div>
      <input type="range" min={min} max={max} value={value} aria-label={label} onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{
          WebkitAppearance: 'none', appearance: 'none', height: 24, borderRadius: 999, margin: 0,
          background: `linear-gradient(90deg, var(--blue-700) 0%, var(--cyan-700) ${pct}%, var(--border-interactive) ${pct}%) center / 100% 6px no-repeat`,
          cursor: 'pointer',
        }} />
    </label>
  );
}

function RoiCalculator() {
  const { Badge, Button, Alert, EmptyState, Icon: DsIcon } = window.DesignSystem_ebeb85;
  const Icon = ({ name }) => <DsIcon name={name} size={20} />;

  const [inquiries, setInquiries] = React.useState(2000);
  const [contactRate, setContactRate] = React.useState(45);
  const [appRate, setAppRate] = React.useState(22);
  const [tuition, setTuition] = React.useState(25000);
  const [staffCost, setStaffCost] = React.useState(30);
  const [touches, setTouches] = React.useState(6);

  const [coryContact, setCoryContact] = React.useState(92);
  const [responseImpact, setResponseImpact] = React.useState(25);
  const [automation, setAutomation] = React.useState(85);

  const YIELD = 0.30; // application → enrollment yield
  const annualInq = inquiries * 12;
  const baseApps = annualInq * (contactRate / 100) * (appRate / 100);
  const coryApps = annualInq * (coryContact / 100) * (appRate / 100) * (1 + responseImpact / 100);
  const addApps = Math.max(0, Math.round(coryApps - baseApps));
  const addEnroll = Math.round(addApps * YIELD);
  const revenue = addEnroll * tuition;
  const hours = Math.round((annualInq * touches * (automation / 100) * 1) / 60); // ~1 min/touch
  const investment = 48000; // illustrative annual platform cost
  const roi = Math.round(((revenue + hours * staffCost) / investment) * 100);

  const fmtMoney = (n) => n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${Math.round(n).toLocaleString()}`;
  const fmtNum = (n) => n.toLocaleString();
  const errors = {
    inquiries: inquiries <= 0 ? 'Enter at least 1 inquiry a month' : undefined,
    contactRate: contactRate > 100 ? 'A rate cannot exceed 100%' : undefined,
    appRate: appRate > 100 ? 'A rate cannot exceed 100%' : undefined,
  };
  const incomplete = inquiries <= 0 || tuition <= 0;
  const hasErrors = Object.values(errors).some(Boolean);

  const results = [
    { icon: 'file-plus', value: `+${fmtNum(addApps)}`, label: 'Additional Applications' },
    { icon: 'graduation-cap', value: `+${fmtNum(addEnroll)}`, label: 'Additional Enrollments' },
    { icon: 'trending-up', value: fmtMoney(revenue), label: 'Tuition Revenue Lift' },
    { icon: 'clock', value: fmtNum(hours), label: 'Staff Hours Saved' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-page)' }}>
      {/* slim product header */}
      <header style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '16px var(--gutter)', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <img src="../../assets/logo-agentcory.svg" alt="AgentCory" style={{ height: 24 }} />
          <span style={{ width: 1, height: 22, background: 'var(--border-default)' }} />
          <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-strong)' }}>ROI Calculator</span>
          <Badge tone="success" dot style={{ marginInlineStart: 'auto' }}>Live estimate</Badge>
        </div>
      </header>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '40px var(--gutter) 64px' }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 'var(--text-fluid-h2)', letterSpacing: '-0.03em', margin: '0 0 6px' }}>Calculate your ROI</h1>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', margin: 0 }}>See how much Cory can save your team and add to enrollment revenue.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--grid-gap)', alignItems: 'stretch' }}>
          {/* Current metrics */}
          <section style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
            <h2 style={{ fontSize: 16, margin: '0 0 18px' }}>Your Current Metrics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Field label="Monthly Inquiries" value={inquiries} onChange={setInquiries} step={50} error={errors.inquiries} />
              <Field label="Current Contact Rate" value={contactRate} onChange={setContactRate} suffix="%" error={errors.contactRate} />
              <Field label="Inquiry → Application" value={appRate} onChange={setAppRate} suffix="%" error={errors.appRate} />
              <Field label="Average Tuition (Net)" value={tuition} onChange={setTuition} prefix="$" step={500} />
              <Field label="Staff Hourly Cost" value={staffCost} onChange={setStaffCost} prefix="$" />
              <Field label="Avg Outreach Touches / Lead" value={touches} onChange={setTouches} />
            </div>
          </section>

          {/* Cory impact */}
          <section style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
            <h2 style={{ fontSize: 16, margin: '0 0 6px' }}>Cory's Impact <span style={{ fontWeight: 500, color: 'var(--text-subtle)', fontSize: 13 }}>(Adjustable)</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 18 }}>
              <Slider label="Cory Contact Rate" value={coryContact} onChange={setCoryContact} min={60} max={100} suffix="%" />
              <Slider label="Response Time Impact" value={responseImpact} onChange={setResponseImpact} min={0} max={50} suffix="%" />
              <Slider label="Automation Coverage" value={automation} onChange={setAutomation} min={50} max={100} suffix="%" />
            </div>
            <Alert tone="info" compact style={{ marginTop: 26 }}>
              Estimates use a {Math.round(YIELD * 100)}% application-to-enrollment yield and an illustrative annual platform cost. Adjust the sliders to model your scenario.
            </Alert>
          </section>

          {/* Results */}
          <aside aria-live="polite" aria-atomic="true" style={{ position: 'sticky', top: 20, background: 'var(--gradient-ink)', borderRadius: 'var(--radius-2xl)', padding: 28, color: 'var(--on-ink-strong)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--on-ink-link)', marginBottom: 6 }}>Projected Annual Impact</div>
            {incomplete || hasErrors ? (
              <EmptyState onInk variant="plain" size="sm" title={hasErrors ? 'Fix the highlighted fields' : 'Tell me your monthly inquiries'} style={{ padding: '24px 8px' }}>
                {hasErrors ? 'I’ll recalculate as soon as the numbers make sense.' : 'Add inquiries and net tuition and I’ll project applications, enrollments and revenue.'}
              </EmptyState>
            ) : (
            <React.Fragment>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 10px', marginBottom: 24 }}>
              <span className="cory-metric cory-gradient-text" style={{ fontSize: 'clamp(40px, 5vw, 60px)', minWidth: 0, overflowWrap: 'anywhere' }}>{roi}%</span>
              <span style={{ fontSize: 14, color: 'var(--on-ink-body)' }}>Estimated<br />Annual ROI</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {results.map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: '1px solid var(--on-ink-border)' }}>
                  <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--on-ink-fill)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-ink-link)', flexShrink: 0 }}><Icon name={r.icon} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="cory-metric" style={{ fontSize: 24, color: 'var(--on-ink-strong)', letterSpacing: '-0.02em' }}>{r.value}</div>
                    <div style={{ fontSize: 'var(--text-caption)', color: 'var(--on-ink-body)' }}>{r.label}</div>
                  </div>
                </div>
              ))}
            </div>
            </React.Fragment>
            )}
            <Button variant="primary" size="lg" fullWidth style={{ marginTop: 22 }}>Book a Demo</Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { RoiCalculator });
