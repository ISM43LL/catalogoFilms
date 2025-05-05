import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';
import imgFundo from '../../img/img_fundo.gif';

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
