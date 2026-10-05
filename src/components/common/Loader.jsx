export default function Loader({ label = 'Loading' }) {
  return <div className="loader" role="status"><span /><span /><span /><small>{label}</small></div>;
}
