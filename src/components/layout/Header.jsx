import { useAuth } from '../../context/AuthContext.jsx';
import Avatar from '../common/Avatar.jsx';

export default function Header() {
  const { user } = useAuth();
  return (
    <header className="topbar">
      <a href="#" className="brand" aria-label="ChatConnect home"><span className="brand-mark">c</span><span>chat<span>connect</span></span></a>
      <div className="topbar-right"><span className="secure-label"><i /> Your space, your people</span>{user && <div className="topbar-user"><span>{user.name.split(' ')[0]}</span><Avatar name={user.name} color={user.color} size="sm" /></div>}</div>
    </header>
  );
}
