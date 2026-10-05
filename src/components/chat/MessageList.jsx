import { useEffect, useRef } from 'react';
import useChat from '../../hooks/useChat.js';
import Message from './Message.jsx';

export default function MessageList({ chat }) {
  const bottomRef = useRef(null);
  const { markRead } = useChat();

  useEffect(() => {
    markRead(chat.id);
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat.id, chat.messages.length]);

  return (
    <div className="message-list">
      <div className="date-divider"><span>TODAY</span></div>
      {chat.messages.map((message) => <Message key={message.id} message={message} />)}
      <div ref={bottomRef} />
    </div>
  );
}
