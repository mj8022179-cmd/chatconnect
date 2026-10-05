import Avatar from '../common/Avatar.jsx';
import formatTime from '../../utils/formatTime.js';

export default function ChatItem({ chat, selected, onClick }) {
  const lastMessage = chat.messages[chat.messages.length - 1];
  return (
    <button className={`chat-item ${selected ? 'selected' : ''}`} onClick={onClick}>
      <Avatar name={chat.name} color={chat.color} size="lg" online={chat.online} />
      <span className="chat-item-copy"><span className="chat-item-top"><strong>{chat.name}</strong><time>{formatTime(lastMessage?.time)}</time></span><span className="chat-item-bottom"><span>{lastMessage ? `${lastMessage.fromMe ? 'You: ' : ''}${lastMessage.text}` : 'Start a conversation'}</span>{chat.unread > 0 && <b className="unread-count">{chat.unread}</b>}</span></span>
    </button>
  );
}
