export default function EmptyState({ icon = '✦', title, description, action }) {
  return <div className="empty-state"><span className="empty-icon">{icon}</span><h2>{title}</h2><p>{description}</p>{action}</div>;
}
