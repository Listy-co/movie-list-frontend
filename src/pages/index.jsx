import { useState } from "react";
import { Link } from "react-router-dom";

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

  const loaded = () => {
    return props.movies.map((movie) => (
      <div key={movie._id} className="movie">
        <Link to={`/movies/${movie._id}`}>
          <h1>{movie.title}</h1>
        </Link>
        <img src={movie.imageURL} alt={movie.title} />
        <h3>{movie.description}</h3>
      </div>
    ));
  };


  const loading = () => {
    return <h1>Loading...</h1>;
  };
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
