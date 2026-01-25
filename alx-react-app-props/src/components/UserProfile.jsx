function UserProfile({ user }) {
  return (
    <div style={{
      border: '1px solid #f1f19c',
      padding: '15px',
      borderRadius: '10px',
      margin: '10px auto',
      width: '300px',
      backgroundColor: '#db7864'
    }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
