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
        <div className="form-container">
          {form}
          <span className="red">
            <h1>Movie Not Found</h1>
          </span>
        </div>
      </section>
    );
  } else if (movies.length < 1) {
    return (
      <div>
        <section className="section-container">
          <div className="form-container">
            {form}
            <h1>Search a movie of your choice</h1>
          </div>
        </section>
      </div>
    );
  }
  return (
    <>
      <section className="section-container">
        <div className="form-container">{form}</div>
        <div>
          <div className="movies-container">
            <div className="movies-itens">
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
        </div>
      </section>
    </>
  );
};

export default Movies;
