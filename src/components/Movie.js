import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=e105c732&i=${id}&api`)
      .then((r) => r.json())
      .then((json) => setMovie(json));
  }, []);
  return <div>{movie.Title}</div>;
};

export default Movie;
