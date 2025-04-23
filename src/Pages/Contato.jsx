import React from 'react';
import './Contato.css';

const Contato = () => {
  const handleEmailClick = () => {
    alert('E-mail: ismael_rostirola@estudante.sc.senai.br');
  };

  const handleWhatsAppClick = () => {
    alert('WhatsApp: (48) 9 9196-3616');
  };

  return (
    <section className="contato-container">
      <h1>Entre em Contato</h1>
      <p>Se você tiver alguma dúvida ou quiser saber mais detalhes, fique à vontade para entrar em contato.</p>

      <div className="contato-links">
        <button onClick={handleEmailClick} className="contato-button">
           E-mail
        </button>
        <button onClick={handleWhatsAppClick} className="contato-button">
           WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contato;
