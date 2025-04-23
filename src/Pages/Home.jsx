import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="card">
        <h2>Sobre</h2>
        <p>Olá! Me chamo Ismael, estudante do curso Técnico em Análise e Desenvolvimento de Sistemas.
            Aqui, você terá a oportunidade de conhecer um pouco mais sobre um dos projetos que desenvolvi
            durante minha jornada de aprendizado.</p>
        <Link to="/sobre" className="card-link">Saiba mais</Link>
      </div>

      <div className="card">
        <h2>Projetos</h2>
        <p>Ao longo do curso, tivemos a oportunidade de colocar a mão na massa em diversos projetos práticos.
            Na primeira fase, desenvolvemos um site simulando um e-commerce.
            Agora, apresento o projeto que realizei na segunda fase do curso.</p>
        <Link to="/projeto" className="card-link">Saiba mais</Link>
      </div>

      <div className="card">
        <h2>Contato</h2>
        <p>Se você tiver alguma dúvida ou quiser saber mais detalhes,
             fique à vontade para entrar em contato. Clique em "Saiba Mais" para ver as opções disponíveis.</p>
        <Link to="/contato" className="card-link">Saiba mais</Link>
      </div>
    </section>
  );
};

export default Home;
