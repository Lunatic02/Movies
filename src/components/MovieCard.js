import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`movie/${movie.imdbID}`}>
      <div>
        <img src={movie.Poster} alt="" />
        <h1>{movie.Title}</h1>
        <p>{}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
