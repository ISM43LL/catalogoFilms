import React from 'react';
import './Projeto.css';
import videoProjeto from '../videos/projeto.mp4';

const Projeto = () => {
  return (
    <section className="projeto-container">
      <h1>Projeto em Destaque</h1>
      <p>
        Este foi o projeto mais importante em que participei durante o curso técnico. Desenvolvido em grupo, envolveu
        desde a definição de regras de negócio, design UI/UX, até à implementação do banco de dados e funcionalidades no Flutter.
      </p>
      <p>
        Criámos a empresa fictícia <strong>Software Solutions</strong> com o objetivo de construir um sistema capaz de atender
        às áreas de administração, projetos, desenvolvimento, fabricação, produção, estoque, manutenção e qualidade.
      </p>
      <p>
        O software foi desenvolvido com <strong>Flutter</strong> e <strong>Dart</strong>, e utilizou uma base de dados <strong>PostgreSQL</strong>.
      </p>

      <div className="video-wrapper">
        <h2 className="video-title">Vídeo de Demonstração.</h2>
        <video src={videoProjeto} autoPlay loop muted controls className="projeto-video" />
      </div>
    </section>
  );
};

export default Projeto;
