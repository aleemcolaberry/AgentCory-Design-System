Single chat message for the Cory widget.

```jsx
<ChatBubble from="cory" time="now">Hi, I'm Cory 👋 How can I help with admissions today?</ChatBubble>
<ChatBubble from="user" status="sending">What programs do you offer?</ChatBubble>
<ChatBubble from="user" status="failed" onRetry={resend}>Can you call me at 4?</ChatBubble>
<ChatBubble from="system">Cory handed you to Maria, an admissions counselor</ChatBubble>
```

`from="cory"` shows the mascot avatar + light bubble; `from="user"` is a gradient bubble at inline-end (right in LTR, left in RTL); `from="system"` is a centred quiet pill for handoffs, delays ("Still working on it…") and date breaks. `status` on user messages: `sending` dims and reads "Sending…", `sent` adds a check, `failed` draws a red edge with "Not sent" and a Retry link (pass `onRetry`). Pair with `TypingIndicator` while Cory composes. `time` adds a timestamp; `showAvatar={false}` collapses the gutter for consecutive bubbles.
