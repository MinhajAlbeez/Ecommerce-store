import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

// Styles
const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};

const textStyle = {
  margin: '0'
};

export default Footer;
