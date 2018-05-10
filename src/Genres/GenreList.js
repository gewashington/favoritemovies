import React from 'react';
import { Link } from 'react-router-dom';

const GenreList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li>
        <Link to={`/movies/${movie.genre}`}>
        {movie.name} ({movie.year})
        </Link>
      </li>
    ))}
  </ul>
);

export default GenreList;
