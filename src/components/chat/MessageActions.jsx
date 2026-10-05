export default function MessageActions({ onReply, onCopy }) {
  return <div className="message-actions"><button onClick={onReply}>Reply</button><button onClick={onCopy}>Copy</button></div>;
}
