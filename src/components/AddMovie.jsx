import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config';

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    imageURL: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
    .then(response => response.json())
    .then(data => {
      // Navigate to the movie list after successful addition
      navigate('/movies');
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newMovie.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newMovie.description}
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newMovie.imageURL}
        name="imageURL"
        placeholder="Image URL"
        onChange={handleChange}
      />
      <input type="submit" value="Add Movie" />
    </form>
  );
};

export default AddMovie;
