import React from 'react';
import { Route, Switch } from 'react-router-dom';
import movieAPI from '../Movies/movieAPI';
import MovieList from '../Movies/MovieList';
import Movies from '../Movies/Movies';
import Genres from '../Genres/Genres';
import ReactStars from 'react-stars';
import SelectList from '../Movies/SelectList';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
}
    state = {
      ratingsList: []
    }

    getAllRatings = (props) => {
    const { ratings } = this.props;
    const ratingsList = this.state;

    this.setState({
      ratingsList: new Set(ratings.map(obj => obj.rating))
    })


  };

    renderRatingList = (rating) => {
      const { ratings } = this.props;
      console.log("ratings", ratings)
      const filteredRatings = ratings.filter(obj => obj.rating === Number(rating) )
      const movies = movieAPI.getAll().filter(movie => filteredRatings.some(filteredMovie => movie.id == filteredMovie.id));
      console.log("filtered: ", filteredRatings, 'selected rating: ', Number(rating))
      return <MovieList movies={movies} />;

    }


handleRatingSelect = e => {
  this.setState({
    ratingSelected: e.target.value
  })
    console.log(e.target.value)
};

componentDidMount() {
  this.getAllRatings()
}



  render() {
    const { ratingsList, ratingSelected } = this.state;
    return(
      <div>
        <p>Select a Rating</p>
        <SelectList
        values={ratingsList}
        selectedValue={ratingSelected}
        handleSelect={this.handleRatingSelect}
        />

      {ratingSelected !== '' ? this.renderRatingList(ratingSelected) : null}
        <Switch>
          <Route path="/movies/:id" render={Movies.renderMovie} />
        </Switch>
      </div>
    )
  }
}
export default Ratings;
