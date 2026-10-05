import Avatar from '../common/Avatar.jsx';

export default function StatusItem({ status, onClick }) {
  return <button className="status-row" onClick={onClick}><Avatar name={status.name} color={status.color} size="lg" ring={!status.seen} /><span><strong>{status.name}</strong><small>{status.time}</small></span><span className="status-preview">{status.text}</span></button>;
}
