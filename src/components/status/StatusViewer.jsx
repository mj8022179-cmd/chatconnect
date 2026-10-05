import { useEffect } from 'react';
import Avatar from '../common/Avatar.jsx';
import Modal from '../common/Modal.jsx';

export default function StatusViewer({ status, onClose, onNext }) {
  useEffect(() => {
    const timer = window.setTimeout(onNext, 7000);
    return () => window.clearTimeout(timer);
  }, [status.id, onNext]);
  return (
    <Modal title="Status update" onClose={onClose}>
      <div className="status-viewer" style={{ '--status-color': status.color }}>
        <div className="status-progress"><span /></div>
        <div className="status-viewer-user"><Avatar name={status.name} color={status.color} size="sm" /><span><strong>{status.name}</strong><small>{status.time}</small></span></div>
        <p>{status.text}</p><button className="status-next" onClick={onNext} aria-label="Next status">→</button>
      </div>
    </Modal>
  );
}
