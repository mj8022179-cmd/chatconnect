import Avatar from '../common/Avatar.jsx';
import StatusItem from './StatusItem.jsx';

export default function StatusList({ statuses, onSelect, onAdd }) {
  return (
    <section className="status-list-card">
      <div className="status-list-heading"><span className="eyebrow">THE LATEST</span><h2>Recent updates</h2></div>
      <button className="my-status-row" onClick={onAdd}><Avatar name="You" color="#8e83f4" size="lg" ring /><span><strong>My status</strong><small>Add a little update</small></span><b>＋</b></button>
      <div className="status-rows">{statuses.map((status) => <StatusItem key={status.id} status={status} onClick={() => onSelect(status)} />)}</div>
    </section>
  );
}
