import React from 'react';
import logo from '../../img/logo.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Catálogo Filmes &copy;Todos os Direitos Reservados 2025.</p>
      <img src={logo} alt="Logótipo pequeno" className="footer-logo" />
    </footer>
  );
};

export default Footer;