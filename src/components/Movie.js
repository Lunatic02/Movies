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
  const metaScore = () => {
    if (+movie.Metascore >= 81) {
      return (
        <div className="color-81-100">
          {movie.Metascore}
          <br></br>
          Universal Acclaim
        </div>
      );
    } else if (+movie.Metascore >= 61) {
      return (
        <div className="color-61-80">
          {movie.Metascore}
          <br></br>
          Generally Favorable Reviews
        </div>
      );
    } else if (+movie.Metascore >= 40) {
      return (
        <div className="color-40-60">
          {movie.Metascore}
          <br></br>
          Mixed or Average Reviews
        </div>
      );
    } else if (+movie.Metascore >= 20) {
      return (
        <div className="color-20-39">
          {movie.Metascore}
          <br></br>
          Generally Unfavorable Reviews
        </div>
      );
    } else {
      return (
        <div className="color-0-19">
          {movie.Metascore}
          <br></br>
          Overwhelming Dislike
        </div>
      );
    }
  };

  return (
    <section className="container">
      <div className="title">
        <img src={movie.Poster} alt="" />
        <div className="title-informacoes">
          <div className="titulo-e-data">
            <h1>{movie.Title}</h1>
            <div>{movie.Released}</div>
          </div>
          <div className="more-informations">
            <div>Runtime: {movie.Runtime}</div>
            <div>Genre: {movie.Genre}</div>
            <div>Director: {movie.Director}</div>
            <div>Writer: {movie.Writer}</div>
            <div>Actors: {movie.Actors}</div>
          </div>
        </div>
      </div>
      <main className="plot">
        <div className="plot-title">
          <h1>Plot</h1>
        </div>
        <div className="plot-text">
          <p>{movie.Plot}</p>
        </div>
      </main>
      <main className="ratings">
        <div className="ratings-title">
          <h1>Rating</h1>
        </div>
        <div className="ratings-notes">
          <div>
            <h2>Meta Critics</h2>
            <p>{metaScore()}</p>
          </div>
          <div>
            <h2>ImdbRating</h2>
            <p>
              <p>⭐{movie.imdbRating}</p>
            </p>
          </div>
        </div>
      </main>
      <main className="awards">
        <div className="awards-title">
          <h1>Awards</h1>
        </div>
        <div className="awards-text">
          <p>{movie.Awards}</p>
          <p>{movie.Metascore}</p>
        </div>
      </main>
    </section>
  );
};

export default Movie;
