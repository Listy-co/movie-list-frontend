import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const Show = (props) => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id;
  const movies = props.movies;
  const movie = movies.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(movie);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateMovies(editForm, movie._id);
    navigate("/");
  };

  const removeMovie = (e) => {
    e.preventDefault()
    props.deleteMovies(movie._id);
    navigate("/");
  };

  return (
    <div className="movie">
      <h1>{movie.title}</h1>
      <h2>{movie.description}</h2>
      <img src={movie.imageURL} alt={movie.title} />
      <button id="delete" onClick={removeMovie}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.imageURL}
          name="imageURL"
          placeholder="image URL"
          onChange={handleChange}
        />

        <input type="submit" value="Update Movie" />
      </form>
    </div>
  );
}

export default Show;
