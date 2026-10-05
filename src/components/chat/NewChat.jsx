import { useState } from 'react';
import useChat from '../../hooks/useChat.js';
import Modal from '../common/Modal.jsx';

export default function NewChat({ onClose, onStart }) {
  const [name, setName] = useState('');
  const { chats, createChat } = useChat();
  const submit = (event) => {
    event.preventDefault();
    const existing = chats.find((chat) => chat.name.toLowerCase() === name.trim().toLowerCase());
    const id = existing?.id || createChat(name);
    if (id) {
      onStart(id);
      onClose();
    }
  };
  return (
    <Modal title="Start a conversation" onClose={onClose}>
      <form className="modal-form" onSubmit={submit}><label htmlFor="new-chat-name">Who would you like to message?</label><input id="new-chat-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter their name" autoFocus required /><button className="primary-button" type="submit">Start chatting <span>→</span></button></form>
    </Modal>
  );
}
