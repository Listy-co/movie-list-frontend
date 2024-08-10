import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.imageURL} alt={movie.title} className="card-img" />
      <div className="card-content">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <Link to={`/movies/${movie._id}`} className="card-link">View Details</Link>
      </div>
    </div>
  );
}

export default MovieCard;
