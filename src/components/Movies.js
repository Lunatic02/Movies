import React from 'react';
import MovieCard from './MovieCard';
import './movies.css';

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const inputSend = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=e105c732&s=${inputValue}`)
      .then((r) => r.json())
      .then((json) => {
        setMovies(json.Search);
      });
    setInputValue('');
  };

  const form = (
    <form>
      <input
        placeholder="Which movie do you want to see today?"
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button onClick={inputSend}>Enviar</button>
    </form>
  );

  if (movies === undefined) {
    return (
      <section className="section-container">
        <div className="form-container">{form}</div>
        <span className="red">
          <h1>Movie Not Found</h1>
        </span>
      </section>
    );
  } else if (movies.length < 1) {
    return (
      <div>
        <section className="section-container">
          <div className="form-container">{form}</div>
          <h1>Add a movie of your choice</h1>
        </section>
      </div>
    );
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
  return (
    <>
      <section className="section-container">
        <div className="form-container">{form}</div>
        <div>
          <div className="movies-container">
            {movies.map((movie) => {
              return (
                <MovieCard
                  className="movieCard"
                  key={movie.imdbID}
                  movie={movie}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
