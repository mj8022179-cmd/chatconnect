import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import Avatar from '../components/common/Avatar.jsx';

export default function Login() {
  const { signIn } = useAuth();
  const [name, setName] = useState('');
  const submit = (event) => { event.preventDefault(); signIn(name); };
  return <main className="login-page"><div className="login-card"><span className="brand-mark">c</span><span className="eyebrow">WELCOME BACK</span><h1>Good conversations<br />start here.</h1><p>Jump back into your little corner of the world.</p><form onSubmit={submit}><label htmlFor="login-name">What should we call you?</label><input id="login-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" autoFocus required /><button className="primary-button" type="submit">Continue to ChatConnect <span>→</span></button></form><div className="login-friends"><Avatar name="Maya Chen" color="#f0a17b" size="sm" /><Avatar name="Noah Williams" color="#6cbea7" size="sm" /><Avatar name="Leo Park" color="#e58a9b" size="sm" /><span>Your people are right here.</span></div></div></main>;
}
