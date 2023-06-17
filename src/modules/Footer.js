import React from 'react';

const footerStyles = {
  backgroundColor: 'black',
  color: 'white',
  padding:'20px',
  textAlign: 'center',

};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <span>c Kasa. All right reserved</span>
    </footer>
  );
};

export default Footer;