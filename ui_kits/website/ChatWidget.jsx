// Floating Cory chat widget + a demo-request dialog (built on the system's Dialog)
function ChatWidget({ open, onToggle }) {
  const { ChatBubble, TypingIndicator, IconButton, Alert } = window.DesignSystem_ebeb85;
  const [msgs, setMsgs] = React.useState([
    { id: 1, from: 'cory', text: "Hi, I'm Cory 👋 Ask me anything about admissions: programs, deadlines, tuition." },
  ]);
  const [val, setVal] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const [online, setOnline] = React.useState(typeof navigator === 'undefined' ? true : navigator.onLine);
  const bodyRef = React.useRef(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const up = () => setOnline(true), down = () => setOnline(false);
    window.addEventListener('online', up); window.addEventListener('offline', down);
    return () => { window.removeEventListener('online', up); window.removeEventListener('offline', down); };
  }, []);
  React.useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); }, [open]);

  const canned = "Great question! I can answer that instantly and even book you a call with an advisor. Want me to set one up?";
  function reply() {
    setTyping(true);
    setTimeout(() => { setTyping(false); setMsgs((m) => [...m, { id: Date.now(), from: 'cory', text: canned }]); }, 1400);
  }
  function send(retryId) {
    const text = retryId ? msgs.find((m) => m.id === retryId).text : val.trim();
    if (!text) return;
    const id = retryId || Date.now();
    setMsgs((m) => retryId ? m.map((x) => x.id === id ? { ...x, status: 'sending' } : x) : [...m, { id, from: 'user', text, status: 'sending' }]);
    if (!retryId) setVal('');
    setTimeout(() => {
      if (!online) { setMsgs((m) => m.map((x) => x.id === id ? { ...x, status: 'failed' } : x)); return; }
      setMsgs((m) => m.map((x) => x.id === id ? { ...x, status: 'sent' } : x));
      reply();
    }, 500);
  }
  React.useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [msgs, typing]);

  return (
    <React.Fragment>
      {open && (
        <section aria-label="Chat with Cory" style={{
          position: 'fixed', bottom: 96, insetInlineEnd: 24, width: 380, maxWidth: 'calc(100vw - 32px)', height: 520, maxHeight: 'calc(100dvh - 120px)',
          background: 'var(--surface-page)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 'var(--z-overlay)',
        }}>
          <div style={{ background: 'var(--gradient-ink)', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <window.DesignSystem_ebeb85.Avatar kind="cory-light" size={38} status={online ? 'online' : 'offline'} statusLabel={online ? 'Cory is online' : 'Offline'} />
            <div style={{ lineHeight: 1.25, flex: 1, minWidth: 0 }}>
              <div style={{ color: 'var(--on-ink-strong)', fontWeight: 700, fontSize: 15 }}>Cory</div>
              <div style={{ color: online ? 'var(--on-ink-success)' : 'var(--on-ink-muted)', fontSize: 12, fontWeight: 600 }}>{online ? 'Typically replies in under 5s' : 'Reconnecting…'}</div>
            </div>
            <IconButton label="Close chat" variant="onInk" size="sm" onClick={onToggle}>×</IconButton>
          </div>
          <div ref={bodyRef} role="log" aria-live="polite" aria-relevant="additions" style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {!online && <Alert tone="warning" compact title="You're offline">I'll send your messages as soon as you're back.</Alert>}
            {msgs.map((m) => <ChatBubble key={m.id} from={m.from} status={m.status} onRetry={() => send(m.id)}>{m.text}</ChatBubble>)}
            {typing && <TypingIndicator />}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(); }} style={{ padding: 12, borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-card)', display: 'flex', gap: 8 }}>
            <label htmlFor="cory-chat-input" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>Your message</label>
            <input id="cory-chat-input" ref={inputRef} value={val} onChange={(e) => setVal(e.target.value)} autoComplete="off"
              placeholder="Type your question…" style={{
                flex: 1, minWidth: 0, border: '1px solid var(--border-interactive)', borderRadius: 'var(--radius-pill)', background: 'var(--surface-card)',
                padding: '10px 16px', fontSize: 14, fontFamily: 'var(--font-sans)', color: 'var(--text-strong)',
              }} />
            <IconButton type="submit" label="Send message" variant="primary" size="sm" disabled={!val.trim()}><window.LucideIcon name="send" size={16} /></IconButton>
          </form>
        </section>
      )}
      <button onClick={onToggle} aria-label={open ? 'Close chat' : 'Chat with Cory'} aria-expanded={open} style={{
        position: 'fixed', bottom: 24, insetInlineEnd: 24, width: 60, height: 60, borderRadius: '50%', border: 0,
        background: 'var(--gradient-brand-deep)', boxShadow: 'var(--shadow-brand)', cursor: 'pointer', zIndex: 'calc(var(--z-overlay) + 1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <window.LucideIcon name={open ? 'x' : 'message-circle'} size={26} style={{ color: 'var(--text-on-brand)' }} />
      </button>
    </React.Fragment>
  );
}

function DemoModal({ open, onClose }) {
  const { Button, Input, Dialog, Alert } = window.DesignSystem_ebeb85;
  const [form, setForm] = React.useState({ name: '', phone: '', when: 'Right now' });
  const [errors, setErrors] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined })); };
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Enter your name so I know who to ask for';
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a 10-digit number, e.g. 555 000 0000';
    return e;
  };
  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) { const first = document.getElementById(e.name ? 'f-full-name' : 'f-phone-number'); first && first.focus(); return; }
    setBusy(true); setFailed(false);
    setTimeout(() => { setBusy(false); setSent(true); }, 1100);
  };
  const close = () => { if (busy) return; onClose(); setTimeout(() => { setSent(false); setErrors({}); setFailed(false); setForm({ name: '', phone: '', when: 'Right now' }); }, 300); };
  return (
    <Dialog open={open} onClose={close} dismissible={!busy} size="sm"
      title={sent ? "You're all set!" : 'Let me call you'}
      description={sent ? 'I will call you shortly. Watch for a call from 1-888-465-1991.' : "Experience my voice capabilities live. I'd love to chat."}
      actions={sent
        ? <Button variant="secondary" onClick={close}>Close</Button>
        : <><Button variant="secondary" onClick={close} disabled={busy}>Not now</Button><Button form="demo-form" type="submit" loading={busy} loadingLabel="Requesting your call">Request Demo Call</Button></>}>
      {sent ? (
        <Alert tone="success" title="Call requested" compact>⚡ Under 60 seconds response time</Alert>
      ) : (
        <form id="demo-form" onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {failed && <Alert tone="danger" title="I couldn't send that" compact>Check your connection and try again.</Alert>}
          <Input label="Full Name" required placeholder="Jane Doe" value={form.name} onChange={set('name')} error={errors.name} autoComplete="name" />
          <Input label="Phone Number" required type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />
          <Input label="When should Cory call?" value={form.when} onChange={set('when')} hint="Right now, or a time that suits you" />
        </form>
      )}
    </Dialog>
  );
}
Object.assign(window, { ChatWidget, DemoModal });
