import React from 'react';
import { useLocation } from 'react-router-dom';
import './Detalhes.css';

const Detalhes = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <div className="detalhes-container">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Ano:</strong> {movie.Year}</p>
      <p><strong>Género:</strong> {movie.Genre}</p>
      <p><strong>Duração:</strong> {movie.Runtime}</p>
      <p><strong>Diretor:</strong> {movie.Director}</p>
      <p><strong>Roteiro:</strong> {movie.Writer}</p>
      <p><strong>Atores:</strong> {movie.Actors}</p>
      <p><strong>Sinopse:</strong> {movie.Plot}</p>
    </div>
  );
};

export default Detalhes;
