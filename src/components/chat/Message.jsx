import formatTime from '../../utils/formatTime.js';

export default function Message({ message }) {
  return <div className={`message-row ${message.fromMe ? 'message-mine' : ''}`}><div className="message-bubble"><p>{message.text}</p><time>{formatTime(message.time)} {message.fromMe && <span className="read-check">✓✓</span>}</time></div></div>;
}
