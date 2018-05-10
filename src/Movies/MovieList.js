import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => (
  <ul>
    {console.log(movies)}
    {movies.map(movie => (
      <li>
        <Link to={`/movies/${movie.id}`}>
        {movie.name} ({movie.year})
        </Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
