import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container"> {/* Ensure container is used if needed for width constraint */}
        <p>
          &copy; {currentYear} Tushar Kumar Singh.
          {/* Optional: Adding a mailto link as discussed */}
          {' '} | <a href="mailto:7tm007@gmail.com">Get in Touch</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
