import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer container-fluid py-3">
      <div className="row">
        <div className="copyright col text-center">
          Copyright &copy; {new Date().getFullYear()}, Engice. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
