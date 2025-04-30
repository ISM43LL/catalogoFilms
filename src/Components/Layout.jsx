import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';
import imgFundo from '../img/img_fundo.gif'; // ajusta o caminho conforme necessário

const Layout = ({ children }) => {
  return (
    <div
      className="layout"
      style={{
        backgroundImage: `url(${imgFundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
