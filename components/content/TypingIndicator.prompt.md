Show between the user's message and Cory's reply so the pause reads as "thinking", never as "broken".

```jsx
{msgs.map((m) => <ChatBubble key={m.id} from={m.from} status={m.status} onRetry={() => resend(m)}>{m.text}</ChatBubble>)}
{typing && <TypingIndicator />}
```

Show it as soon as the user sends, hide it when the reply lands. If a reply takes over 8 seconds, replace it with a `ChatBubble from="system"` ("Still working on it…"); after a failure use `status="failed"` on the user's bubble with Retry. Reduced motion freezes the dots at full opacity; the hidden label still announces.
