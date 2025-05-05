import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';
import icon from '../../img/icon_header.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <img src={logo} alt="Logótipo" className="logo" />
        <h1>Catálogo de Filmes</h1>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-icon">
          <img src={icon} alt="Início" className="icon-img" />
          <span>Início</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
