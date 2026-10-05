import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import ProfileHeader from '../components/profile/ProfileHeader.jsx';
import ProfileCard from '../components/profile/ProfileCard.jsx';
import EditProfile from '../components/profile/EditProfile.jsx';

export default function Profile() {
  const { user, updateProfile, signOut } = useAuth();
  const [editing, setEditing] = useState(false);
  return <div className="profile-page"><ProfileHeader /><ProfileCard user={user} onEdit={() => setEditing(true)} /><div className="profile-footer"><span>Your profile is only visible to people you connect with.</span><button onClick={signOut}>Sign out <span>↗</span></button></div>{editing && <EditProfile user={user} onClose={() => setEditing(false)} onSave={updateProfile} />}</div>;
}
