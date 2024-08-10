import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie._id} className="movie">
          <Link to={`/movies/${movie._id}`}>
            <h1>{movie.title}</h1>
          </Link>
          <img src={movie.imageURL} alt={movie.title} />
          <h3>{movie.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
