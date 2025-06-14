import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
