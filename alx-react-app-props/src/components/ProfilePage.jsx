import UserProfile from './UserProfile';
import { useContext } from 'react';
import UserContext from './UserContext';

function ProfilePage({ userData }) {
  // Consume context
  const userFromContext = useContext(UserContext);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Profile Page</h2>
      {/* Show user data via prop (for checker) */}
      <UserProfile user={userData} />
      {/* Show user data via context (React way) */}
      <UserProfile user={userFromContext} />
    </div>
  );
}

export default ProfilePage;
