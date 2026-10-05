import { useState } from 'react';

export default function MessageInput({ onSend }) {
  const [text, setText] = useState('');
  const submit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };
  return (
    <form className="message-composer" onSubmit={submit}>
      <button type="button" className="composer-tool" aria-label="Add an attachment" title="Attachments are not available in this demo">＋</button>
      <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Write a message..." aria-label="Write a message" />
      <button type="button" className="composer-tool emoji-tool" onClick={() => setText((value) => `${value}😊`)} aria-label="Add a smile">☺</button>
      <button type="submit" className="send-button" disabled={!text.trim()} aria-label="Send message">↑</button>
    </form>
  );
}
