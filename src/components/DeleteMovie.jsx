import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const DeleteMovie = ({ movie }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = () => {
    setIsLoading(true);
    setError('');

    fetch(`/movies/${movie._id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Movie deleted');
        navigate('/');
      })
      .catch(error => {
        setError('Error deleting movie: ' + error.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete Movie'}
      </button>
    </div>
  );
};

DeleteMovie.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string,
    releaseYear: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default DeleteMovie;

