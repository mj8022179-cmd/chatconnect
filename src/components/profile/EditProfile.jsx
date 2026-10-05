import { useState } from 'react';
import Modal from '../common/Modal.jsx';

export default function EditProfile({ user, onClose, onSave }) {
  const [form, setForm] = useState({ name: user.name, username: user.username, about: user.about, email: user.email });
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    onSave(form);
    onClose();
  };
  return <Modal title="Edit your profile" onClose={onClose}><form className="modal-form profile-edit-form" onSubmit={submit}>
    <label htmlFor="profile-name">Name</label><input id="profile-name" name="name" value={form.name} onChange={update} maxLength={48} required />
    <label htmlFor="profile-username">Username</label><input id="profile-username" name="username" value={form.username} onChange={update} maxLength={32} required />
    <label htmlFor="profile-about">About</label><textarea id="profile-about" name="about" value={form.about} onChange={update} maxLength={120} rows={3} />
    <label htmlFor="profile-email">Email address</label><input id="profile-email" name="email" type="email" value={form.email} onChange={update} required />
    <button className="primary-button" type="submit">Save changes <span>→</span></button>
  </form></Modal>;
}
