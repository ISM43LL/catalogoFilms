import React from 'react';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="sobre-container">
      <h1>Sobre Mim</h1>
      <p>
        Olá! O meu nome é Ismael e sou estudante do curso técnico de Análise e Desenvolvimento de Sistemas.
        Ao longo do curso, participei em diversos projetos práticos chamados Situações de Aprendizagem (S.A).
      </p>
      <p>
        Na <strong>1ª fase</strong>, desenvolvemos um site simulando um e-commerce, onde aprendi os fundamentos do desenvolvimento web.
      </p>
      <p>
        Já na <strong>2ª fase</strong>, enfrentámos um desafio mais complexo: criámos um aplicativo para a empresa fictícia <em>Software Solutions</em>.
        O objetivo era desenvolver um dashboard que apresentasse dados da produção de uma fábrica de veículos, com funcionalidades como
        cadastro de peças, gestão de estoque e criação de novos utilizadores.
      </p>
      <p>
        Este projeto foi desenvolvido em <strong>Flutter</strong>, utilizando a linguagem <strong>Dart</strong> e integrando com um banco de dados <strong>PostgreSQL</strong>.
      </p>
    </section>
  );
};

export default Sobre;
