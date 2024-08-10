// src/pages/index.jsx
import React, { useState } from 'react';
import MovieList from '../components/MovieList';

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
      {props.movies ? <MovieList movies={props.movies} /> : loading()}
    </section>
  );
}

export default Index;
