import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalhes/${encodeURIComponent(movie.Title)}`, { state: { movie } });
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default Card;
