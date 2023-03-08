import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card-container">
      <Link to={`movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt="" />
        <h1>{movie.Title}</h1>
      </Link>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
