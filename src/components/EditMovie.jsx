import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/EditMovie.css'; 

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({ title: '', director: '', releaseYear: '', genres: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/movies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Error fetching movie: ' + error.message);
        setIsLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setError('');

    fetch(`/movies/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Movie updated:', data);
        navigate('/');
      })
      .catch(error => {
        setError('Error updating movie: ' + error.message);
        setIsUpdating(false);
      });
  };

  const handleGenresChange = (e) => {
    setMovie({ ...movie, genres: e.target.value.split(',').map(genre => genre.trim()) });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form className="edit-movie-form" onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={movie.title}
          onChange={e => setMovie({ ...movie, title: e.target.value })}
          placeholder="Title"
          required
        />
      </div>
      <div className="form-group">
        <label> Description:</label>
        <input
          type="text"
          value={movie.director}
          onChange={e => setMovie({ ...movie, director: e.target.value })}
          placeholder="Director"
        />
      </div>
      <div className="form-group">
        <label>Release Year</label>
        <input
          type="number"
          value={movie.releaseYear}
          onChange={e => setMovie({ ...movie, releaseYear: e.target.value })}
          placeholder="Release Year"
        />
      </div>
      <div className="form-group">
        <label>Genres (comma separated)</label>
        <input
          type="text"
          value={movie.genres.join(', ')}
          onChange={handleGenresChange}
          placeholder="Genres"
        />
      </div>
      <button type="submit" disabled={isUpdating}>
        {isUpdating ? 'Updating...' : 'Update Movie'}
      </button>
    </form>
  );
};

export default EditMovie;
