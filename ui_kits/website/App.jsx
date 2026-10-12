// Compose the full AgentCory marketing homepage
function App() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [demoOpen, setDemoOpen] = React.useState(false);
  const { SiteHeader, Hero, Workflows, Features, Proof, ClosingCta, SiteFooter, ChatWidget, DemoModal } = window;

  return (
    <div>
      <SiteHeader onTry={() => setChatOpen(true)} onDemo={() => setDemoOpen(true)} />
      <Hero onTry={() => setChatOpen(true)} onDemo={() => setDemoOpen(true)} onOpenChat={() => setChatOpen(true)} />
      <Workflows />
      <Features />
      <Proof />
      <ClosingCta onDemo={() => setDemoOpen(true)} />
      <SiteFooter />
      <ChatWidget open={chatOpen} onToggle={() => setChatOpen((o) => !o)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
Object.assign(window, { App });
