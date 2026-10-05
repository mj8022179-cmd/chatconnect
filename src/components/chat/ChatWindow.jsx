import useChat from '../../hooks/useChat.js';
import { useAuth } from '../../context/AuthContext.jsx';
import EmptyState from '../common/EmptyState.jsx';
import ChatHeader from './ChatHeader.jsx';
import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';

export default function ChatWindow({ chatId, onBack }) {
  const { chats, sendMessage } = useChat();
  const { user } = useAuth();
  const chat = chats.find((item) => item.id === chatId);

  if (!chat) return <section className="conversation-panel conversation-empty"><EmptyState icon="✉" title="A little more connected" description="Choose a conversation to pick up where you left off." /></section>;
  return (
    <section className="conversation-panel">
      <ChatHeader chat={chat} onBack={onBack} />
      <MessageList chat={chat} />
      <MessageInput onSend={(text) => sendMessage(chat.id, text)} user={user} />
    </section>
  );
}
