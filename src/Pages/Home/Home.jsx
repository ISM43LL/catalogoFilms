import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from '../../Components/Card/Card';

const Home = () => {
  const [moviesByGenre, setMoviesByGenre] = useState({
    Ação: [],
    Comédia: [],
    Terror: [],
    Romance: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '1cc2ae52';
      const movieGenres = {
        Ação: ['Avatar', 'Mad-Max:-Fury-Road', 'Spider-Man', 'Die-Hard', 'Iron Man', 'Mission:-Impossible-Rogue-Nation'],
        Comédia: ['Superbad', 'The Hangover', 'Step Brothers', 'Bridesmaids', 'Jumanji', 'The-Hangover'],
        Terror: ['The Conjuring', 'It', 'Hereditary', 'The Exorcist', 'A Quiet Place', 'Get Out'],
        Romance: ['The Notebook', 'Titanic', 'Before Sunrise', 'Call Me By Your Name', 'Me Before You', 'A Walk to Remember'],
      };

      const newMoviesByGenre = {};

      try {
        for (const genre in movieGenres) {
          const titles = movieGenres[genre];
          const promises = titles.map(title =>
            fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`)
              .then(res => res.json())
          );
          const results = await Promise.all(promises);
          newMoviesByGenre[genre] = results;
        }

        setMoviesByGenre(newMoviesByGenre);

        // Espera 2 segundos antes de tirar o loading
        setTimeout(() => {
          setLoading(false);
        }, 2000);

      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>A carregar filmes...</p>
        </div>
      ) : (
        <div className="home-container">
          {Object.entries(moviesByGenre).map(([genre, movies]) => (
            <section key={genre} className="genre-section">
              <h2 className="genre-title">{genre}</h2>
              <div className="home-section">
                {movies.map((movie, index) => (
                  <Card key={index} movie={movie} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
