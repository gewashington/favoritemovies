import React from 'react';
import { Route, Switch } from 'react-router-dom';
import movieAPI from '../Movies/movieAPI';
import MovieList from '../Movies/MovieList';
import Movies from '../Movies/Movies';
import Genres from '../Genres/Genres';
import ReactStars from 'react-stars';

class Ratings extends React.Component {
  constructor() {
    super();
    this.state = {
}
}
  render() {
    return(
      <div>By Rating </div>
    )
  }
}
export default Ratings;
