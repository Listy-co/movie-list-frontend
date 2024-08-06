import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    poster: '',
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setFormData({
          title: data.title,
          description: data.description,
          poster: data.poster,
        });
      })
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:5000/api/MovieDetails/${id}`, { method: 'DELETE' })
      .then(() => navigate('/'))
      .catch(error => console.error('Error deleting movie:', error));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/MovieDetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setEditMode(false);
        setMovie(formData);
      })
      .catch(error => console.error('Error updating movie:', error));
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Poster URL:
            <input
              type="text"
              name="poster"
              value={formData.poster}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
