export default function Avatar({ name = 'User', color = '#8e83f4', size = 'md', online = false, ring = false }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
  return (
    <span className={`avatar avatar-${size} ${ring ? 'avatar-ring' : ''}`} style={{ '--avatar-color': color }} aria-label={name}>
      <span>{initials}</span>
      {online && <i className="online-dot" />}
    </span>
  );
}
