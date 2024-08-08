import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  const URL = import.meta.env.VITE_API_URL
  const fetchMovies = async () => {
    try {
      const response = await fetch(`${URL}/movies`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>
      <ul>
        {movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie._id} className="movie-item">
              <Link to={`/movies/${movie._id}`} className="movie-link">
                {movie.imageURL && (
                  <img src={movie.imageURL} alt={movie.title} className="movie-poster" />
                )}
                   <div className="movie-title">{movie.title}</div>
              {movie.description && (
                <div className="movie-description">{movie.description}</div>
              )}
              </Link>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
      <Link to="/AddMovie">
        <button>Add Movie</button>
      </Link>
    </div>
  );
};

export default MovieList;





