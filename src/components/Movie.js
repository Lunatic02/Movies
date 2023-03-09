import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './movie.css';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=e105c732&i=${id}&api`)
      .then((r) => r.json())
      .then((json) => setMovie(json));
  }, []);
  return (
    <section className="container">
      <div className="title">
        <img src={movie.Poster} alt="" />
        <div>
          <h1>{movie.Title}</h1>
          <div>{movie.Released}</div>
          <div>{movie.Runtime}</div>
          <div>{movie.Genre}</div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
