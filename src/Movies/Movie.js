import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'



const Movie = ({ name, year, genre, director, firstActor, secondActor, image, imdb, userRatingChange, currentUserRating }) => (


  <div>
    <div>
    <div><p><img src={image} alt={name} /></p></div>
    <h1>{name}</h1>
    <div>
    <p>Year: {year}</p>
    <p>Genre: {genre}</p>
    <p>Director: {director}</p>
    <p>Starring: {firstActor} , {secondActor}</p>
    <a href={imdb}>IMDB</a>
    <p>User Rating:</p>   <ReactStars
  count={5}
  onChange={userRatingChange}
  size={24}
  half={false}
  value={currentUserRating}/>
    </div>
    <p><Link to="/movies">Back</Link></p>
    </div>
  </div>
);

export default Movie;
