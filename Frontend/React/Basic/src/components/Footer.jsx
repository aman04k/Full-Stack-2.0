// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoSection}>
          <h2>MyLogo</h2>
        </div>
        <div style={linksSection}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
    
      </div>
      <div style={copyright}>
        <p>© 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoSection = {
  flex: 1,
};

const linksSection = {
  flex: 2,
  display: 'flex',
  justifyContent: 'space-around',
};

const socialIcons = {
  flex: 1,
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '1.5em',
};

const copyright = {
  marginTop: '20px',
  fontSize: '0.9em',
};

export default Footer;
