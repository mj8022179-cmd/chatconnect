import Avatar from '../common/Avatar.jsx';

export default function ProfileCard({ user, onEdit }) {
  return (
    <section className="profile-card">
      <div className="profile-cover"><span className="cover-orb cover-orb-one" /><span className="cover-orb cover-orb-two" /></div>
      <div className="profile-main"><Avatar name={user.name} color={user.color} size="xl" /><div className="profile-identity"><span className="eyebrow">YOUR PROFILE</span><h2>{user.name}</h2><p>{user.username}</p></div><button className="secondary-button profile-edit-button" onClick={onEdit}>Edit profile <span>↗</span></button></div>
      <div className="profile-about"><span className="eyebrow">ABOUT ME</span><p>{user.about || 'A little about you goes here.'}</p></div>
      <div className="profile-details"><div><span className="eyebrow">EMAIL ADDRESS</span><strong>{user.email}</strong></div><div><span className="eyebrow">MEMBER SINCE</span><strong>October 2026</strong></div></div>
    </section>
  );
}
