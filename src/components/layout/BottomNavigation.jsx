const items = [
  { id: 'chats', icon: '▤', label: 'Chats' },
  { id: 'status', icon: '◉', label: 'Status' },
  { id: 'profile', icon: '♙', label: 'Profile' },
];

export default function BottomNavigation({ active, onNavigate }) {
  return <nav className="bottom-nav" aria-label="Main navigation">{items.map((item) => <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}><span>{item.icon}</span>{item.label}</button>)}</nav>;
}
