import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movie">
        <Link to={`movie/${movie.imdbID}`}>
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.Poster} alt={movie.title} />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
