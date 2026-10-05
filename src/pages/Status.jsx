import { useCallback, useState } from 'react';
import { StatusContext } from '../context/StatusContext.jsx';
import { useContext } from 'react';
import StatusList from '../components/status/StatusList.jsx';
import StatusViewer from '../components/status/StatusViewer.jsx';
import AddStatus from '../components/status/AddStatus.jsx';

export default function Status() {
  const { statuses, addStatus, markSeen } = useContext(StatusContext);
  const [viewing, setViewing] = useState(null);
  const [adding, setAdding] = useState(false);
  const openStatus = (status) => {
    setViewing(status);
    markSeen(status.id);
  };
  const nextStatus = useCallback(() => {
    if (!viewing) return;
    const index = statuses.findIndex((status) => status.id === viewing.id);
    const next = statuses[index + 1];
    if (next) openStatus(next);
    else setViewing(null);
  }, [statuses, viewing]);

  return (
    <div className="status-page">
      <div className="section-heading"><span className="eyebrow">LITTLE MOMENTS</span><h1>Status</h1><p>A peek at what your people are up to.</p></div>
      <div className="status-layout"><div className="status-intro-card"><div className="status-sun">✳</div><span className="eyebrow">A MOMENT, SHARED</span><h2>Life lately,<br />in little bits.</h2><p>Share a photo, a thought, or whatever's making your day a little brighter.</p><button className="primary-button" onClick={() => setAdding(true)}>Add your status <span>＋</span></button></div><StatusList statuses={statuses.filter((status) => !status.own)} onSelect={openStatus} onAdd={() => setAdding(true)} /></div>
      {viewing && <StatusViewer status={viewing} onClose={() => setViewing(null)} onNext={nextStatus} />}
      {adding && <AddStatus onClose={() => setAdding(false)} onAdd={addStatus} />}
    </div>
  );
}
