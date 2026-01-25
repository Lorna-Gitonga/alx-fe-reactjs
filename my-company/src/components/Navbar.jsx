import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '15px',
    backgroundColor: '#201e1e',
    color: '#fff'
  };

  const linkStyle = { color: '#2058cf', textDecoration: 'none', fontWeight: 'bold' };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
