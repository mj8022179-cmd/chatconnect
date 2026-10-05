import Avatar from '../common/Avatar.jsx';

export default function ChatHeader({ chat, onBack }) {
  return (
    <header className="conversation-header">
      <button className="back-button" onClick={onBack} aria-label="Back to conversations">‹</button>
      <Avatar name={chat.name} color={chat.color} online={chat.online} />
      <div className="conversation-person"><strong>{chat.name}</strong><span>{chat.online ? 'Online now' : chat.username}</span></div>
      <div className="conversation-actions"><button className="icon-button" title="Search in conversation" aria-label="Search in conversation">⌕</button><button className="icon-button" title="More options" aria-label="More options">···</button></div>
    </header>
  );
}
