import React from 'react';

const MovieCard = ({ movie }) => {
  if (!movie) {
    return <div className="movie-card">No movie data available</div>;
  }

  const { poster, title = 'Unknown Title', description = 'No description available' } = movie;

  return (
    <div className="movie-card" style={styles.card}>
      <img
        src={poster || 'default-poster.jpg'} // Fallback image if poster is missing
        alt={title}
        style={styles.image}
      />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1em',
    margin: '1em',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  title: {
    fontSize: '1.5em',
    margin: '0.5em 0',
  },
  description: {
    fontSize: '1em',
    color: '#666',
  },
};

export default MovieCard;
