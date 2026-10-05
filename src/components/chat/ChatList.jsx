import { useMemo, useState } from 'react';
import useChat from '../../hooks/useChat.js';
import SearchBar from '../common/SearchBar.jsx';
import EmptyState from '../common/EmptyState.jsx';
import ChatItem from './ChatItem.jsx';
import NewChat from './NewChat.jsx';

export default function ChatList({ selectedId, onSelect }) {
  const { chats } = useChat();
  const [query, setQuery] = useState('');
  const [showNewChat, setShowNewChat] = useState(false);
  const filteredChats = useMemo(() => chats.filter((chat) => (
    `${chat.name} ${chat.username}`.toLowerCase().includes(query.toLowerCase())
  )), [chats, query]);

  return (
    <section className="chat-list-panel">
      <div className="panel-heading"><div><span className="eyebrow">YOUR INBOX</span><h1>Messages <span className="chat-count">{chats.length}</span></h1></div><button className="compose-button" onClick={() => setShowNewChat(true)} aria-label="Start a new chat" title="New chat">＋</button></div>
      <SearchBar value={query} onChange={setQuery} />
      <div className="inbox-tabs"><span className="selected">All messages</span><span>Unread <b>{chats.reduce((total, chat) => total + (chat.unread || 0), 0)}</b></span></div>
      <div className="chat-items">{filteredChats.length
        ? filteredChats.map((chat) => <ChatItem key={chat.id} chat={chat} selected={selectedId === chat.id} onClick={() => onSelect(chat.id)} />)
        : <EmptyState icon="⌕" title="No conversations found" description="Try another name or start a new chat." />}</div>
      {showNewChat && <NewChat onClose={() => setShowNewChat(false)} onStart={onSelect} />}
    </section>
  );
}
