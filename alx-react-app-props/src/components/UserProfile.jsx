import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const user = useContext(UserContext); //consume context directly

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '10px',
      margin: '10px auto',
      width: '300px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center'
    }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
