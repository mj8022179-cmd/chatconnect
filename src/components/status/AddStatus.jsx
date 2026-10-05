import { useState } from 'react';
import Modal from '../common/Modal.jsx';

export default function AddStatus({ onClose, onAdd }) {
  const [text, setText] = useState('');
  const submit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    onClose();
  };
  return <Modal title="Share a status" onClose={onClose}><form className="modal-form" onSubmit={submit}><label htmlFor="status-text">What's on your mind?</label><textarea id="status-text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Share a little moment..." maxLength={180} rows={4} autoFocus required /><span className="character-count">{text.length}/180</span><button className="primary-button" type="submit">Share update <span>→</span></button></form></Modal>;
}
