import { createContext, useMemo } from 'react';
import dummyData from '../data/dummyData.json';
import useLocalStorage from '../hooks/useLocalStorage.js';
import generateId from '../utils/generateId.js';

export const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [chats, setChats] = useLocalStorage('chatconnect-chats', dummyData.chats);

  const sendMessage = (chatId, text) => {
    const cleanText = text.trim();
    if (!cleanText) return;
    const message = { id: generateId(), text: cleanText, time: new Date().toISOString(), fromMe: true };
    setChats((current) => current.map((chat) => (
      chat.id === chatId
        ? { ...chat, unread: 0, messages: [...chat.messages, message] }
        : chat
    )));
  };

  const markRead = (chatId) => setChats((current) => current.map((chat) => (
    chat.id === chatId ? { ...chat, unread: 0 } : chat
  )));
  const createChat = (name) => {
    const cleanName = name.trim();
    if (!cleanName) return null;
    const chat = {
      id: generateId(),
      name: cleanName,
      username: 'new conversation',
      color: '#8e83f4',
      online: false,
      unread: 0,
      messages: [],
    };
    setChats((current) => [chat, ...current]);
    return chat.id;
  };

  const value = useMemo(() => ({ chats, sendMessage, markRead, createChat }), [chats]);
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
