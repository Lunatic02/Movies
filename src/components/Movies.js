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
    return <section>{form}</section>;
  }

  return (
    <>
      <section>
        {form}
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
