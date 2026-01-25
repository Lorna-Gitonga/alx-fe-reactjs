function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '15px',
      marginTop: '20px',
      backgroundColor: '#1e1d1d',
      color: '#fff'
    }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
