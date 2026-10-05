import { createContext, useMemo } from 'react';
import dummyData from '../data/dummyData.json';
import useLocalStorage from '../hooks/useLocalStorage.js';
import generateId from '../utils/generateId.js';
import { useAuth } from './AuthContext.jsx';

export const StatusContext = createContext(null);

export function StatusProvider({ children }) {
  const [statuses, setStatuses] = useLocalStorage('chatconnect-statuses', dummyData.statuses);
  const { user } = useAuth();

  const addStatus = (text) => {
    const cleanText = text.trim();
    if (!cleanText || !user) return;
    const status = {
      id: generateId(),
      name: user.name,
      color: user.color || '#8e83f4',
      text: cleanText,
      time: 'Just now',
      seen: false,
      own: true,
    };
    setStatuses((current) => [status, ...current.filter((item) => !item.own)]);
  };
  const markSeen = (id) => setStatuses((current) => current.map((item) => (
    item.id === id ? { ...item, seen: true } : item
  )));

  const value = useMemo(() => ({ statuses, addStatus, markSeen }), [statuses, user]);
  return <StatusContext.Provider value={value}>{children}</StatusContext.Provider>;
}
