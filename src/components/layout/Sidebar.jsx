const items = [
  { id: 'chats', icon: '▤', label: 'Chats' },
  { id: 'status', icon: '◉', label: 'Status' },
  { id: 'profile', icon: '♙', label: 'Profile' },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="nav-items">{items.map((item) => (
        <button key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => onNavigate(item.id)} aria-label={item.label} title={item.label}>
          <span>{item.icon}</span><small>{item.label}</small>
        </button>
      ))}</div>
      <span className="sidebar-bottom-mark">✳</span>
    </aside>
  );
}
