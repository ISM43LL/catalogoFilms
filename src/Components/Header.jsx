import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logótipo" className="logo" />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projeto">Projeto</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;