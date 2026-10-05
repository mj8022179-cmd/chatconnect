import { createContext, useContext, useState } from 'react';
import dummyData from '../data/dummyData.json';
import useLocalStorage from '../hooks/useLocalStorage.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('chatconnect-user', dummyData.user);
  const [isAuthenticated, setAuthenticated] = useState(true);

  const updateProfile = (updates) => setUser((current) => ({ ...current, ...updates }));
  const signOut = () => {
    setAuthenticated(false);
    setUser(null);
  };
  const signIn = (name) => {
    const cleanName = name.trim();
    if (!cleanName) return;
    setUser((current) => ({
      ...(current || dummyData.user),
      name: cleanName,
      username: `@${cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '')}`,
    }));
    setAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ user: isAuthenticated ? user : null, updateProfile, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider.');
  return context;
}
