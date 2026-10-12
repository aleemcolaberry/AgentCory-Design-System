// AgentCory marketing site — top navigation
function SiteHeader({ onTry, onDemo }) {
  const { Button, DirectionToggle } = window.DesignSystem_ebeb85;
  const links = ['Home', 'How It Works', 'ROI', 'Demo', 'Features'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--surface-header)', backdropFilter: 'blur(var(--blur-header))',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', height: 'var(--header-height)',
        padding: '0 var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', minWidth: 0,
      }}>
        <img src="../../assets/logo-agentcory.svg" alt="AgentCory" style={{ height: 26, width: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'left center', flex: '0 1 auto', minWidth: 0 }} />
        <nav className="cory-hide-mobile" style={{ display: 'flex', gap: 'var(--space-7)', alignItems: 'center' }}>
          {links.map((l, i) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{
              fontSize: 'var(--text-ui-sm)', fontWeight: 500, color: i === 0 ? 'var(--text-strong)' : 'var(--text-body)',
              textDecoration: 'none', padding: '10px 0', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', minHeight: 24,
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flex: 'none' }}>
          <DirectionToggle size="sm" />
          <Button variant="primary" size="sm" onClick={onTry}>Try Cory Now</Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { SiteHeader });
