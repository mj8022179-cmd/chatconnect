import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { ChatProvider } from './context/ChatContext.jsx';
import { StatusProvider } from './context/StatusContext.jsx';
import Header from './components/layout/Header.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import BottomNavigation from './components/layout/BottomNavigation.jsx';
import ChatList from './components/chat/ChatList.jsx';
import ChatWindow from './components/chat/ChatWindow.jsx';
import Status from './pages/Status.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';

function Workspace() {
  const { user } = useAuth();
  const [section, setSection] = useState('chats');
  const [selectedChatId, setSelectedChatId] = useState(null);

  if (!user) return <Login />;

  return (
    <div className="app-shell">
      <Header />
      <div className="workspace">
        <Sidebar active={section} onNavigate={setSection} />
        {section === 'chats' ? (
          <main className={`chat-layout ${selectedChatId ? 'has-selection' : ''}`}>
            <ChatList selectedId={selectedChatId} onSelect={setSelectedChatId} />
            <ChatWindow chatId={selectedChatId} onBack={() => setSelectedChatId(null)} />
          </main>
        ) : (
          <main className="page-content">
            {section === 'status' ? <Status /> : <Profile />}
          </main>
        )}
      </div>
      <BottomNavigation active={section} onNavigate={setSection} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <StatusProvider>
          <Workspace />
        </StatusProvider>
      </ChatProvider>
    </AuthProvider>
  );
}
