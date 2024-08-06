import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('/MovieDetails');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <Link to="/AddMovie">
        <button>Add Movie</button>
      </Link>
      <ul>
        {movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie._id}>
              <Link to={`/MovieDetails/${movie._id}`}>{movie.title}</Link>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default MovieList;



