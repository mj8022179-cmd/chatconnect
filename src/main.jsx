import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/chat.css';
import './styles/status.css';
import './styles/profile.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
