import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/AddMovie.css'; 

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://movie-list-backend-b007.onrender.com', {
        title,
        description,
        imageURL,
      });

      if (response.status === 201) {
        navigate('/'); // Redirect after adding movie
      } else {
        console.error('Failed to add movie', response.data);
      }
    } catch (error) {
      console.error('Error adding movie:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Image URL:
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add Movie</button>
      <button type="submit" onClick={() => navigate('/')}>
            Return to Main Page
      </button>
    </form>
  );
};

export default AddMovie;





