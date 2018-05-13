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
      ratings: []
    }

    getAllRatings = () => {
      // movies -> movie -> movie.genre
      const ratings = this.props;
      this.setState({ ratings })
      console.log('ratings:', ratings)
  };

    renderRatingList = (rating) => {
      const { ratings } = this.state;
      console.log('renderRatingList', ratings.hasOwnProperty(ratings)])

      // const movies = movieAPI.getAll().filter(movie =>  movie.id.includes(newRatings.filter(obj => obj.movie.id)));
      // <Link to={`/genres/${genre}`} />
      // return <MovieList movies={movies} />;

    }

// getAllRatings = (props) => {
//   const { ratings } = this.props;
//   console.log('getallratings:', ratings)
// }

handleRatingSelect = e => {
  this.setState({
    ratingSelected: e.target.value
  })
};

componentDidMount() {
  this.getAllRatings()
}



  render() {
    const { ratings, ratingSelected } = this.state;
    return(
      <div>
        <p>Select a Rating</p>
        <SelectList
        values={ratings}
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
