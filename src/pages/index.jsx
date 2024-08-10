import { useState } from "react";
import MovieCard from "../components/MovieCard";
import '../assets/indexmovie.css';

function Index(props) {
  const [newForm, setNewForm] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createMovies(newForm);
    setNewForm({
      title: "",
      description: "",
      imageURL: "",
    });
  };

  const loaded = () => (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );

  const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.imageURL}
          name="imageURL"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Movie" />
      </form>
      {props.movies ? loaded() : loading()}
    </section>
  );
}

export default Index;
