import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = ['Batman', 'Superman', 'Spider-Man', 'Avengers', 'Iron Man', 'Thor', 'Hulk', 'Doctor Strange', 'Captain America', 'Black Panther', 'Guardians of the Galaxy', 'Ant-Man'];
        const apiKey = '1cc2ae52'; 
        const promises = movieList.map(title =>
          fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`)
            .then(response => response.json())
        );
        const results = await Promise.all(promises);
        setMovies(results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="home-section">
      {movies.map((movie, index) => (
        <div key={index} className="card">
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
          <p><strong>Ano:</strong> {movie.Year}</p>
          <p><strong>Género:</strong> {movie.Genre}</p>
          <p><strong>Duração:</strong>{movie.Runtime}</p>
          <p><strong>Diretor:</strong>{movie.Director}</p>
        </div>
      ))}
    </section>
  );
};

export default Home;
