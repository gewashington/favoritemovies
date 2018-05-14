import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactStars from 'react-stars';
import  SelectList  from './SelectList';
import movieAPI from './movieAPI'

class Movie extends React.Component {
constructor(props) {
  super(props);
}

state = {
  numberOfStars: 0
}

componentDidMount() {
  const { ratings, movie } = this.props;
  const id = movie.id;
  ratings.forEach(obj => {
   if ( obj.id === id ) {
    this.setState({
        numberOfStars: obj.rating
      })
    }
  })
}



handleStars = e => {
  const { updateRating, movie } = this.props;
  this.setState ({
    numberOfStars: e
  })
  console.log('props', this.props);
  updateRating(e, movie.id)
}

handleBack = e => {
  e.preventDefault
  this.props.history.goBack()
}




render() {
  const starArr = [1, 2, 3, 4, 5]
  const { movie, currentUserRating, ratings, addUserRating, updateRating} = this.props;
  const { handleStars } = this;
  console.log('ratings', ratings);
  // const movie = movieAPI.getOne(this.props.match.params.id);
  if (!movie) {
    return <div> could not find movie </div>;
  }
  const { name, year, genre, director, firstActor, secondActor, image, imdb } = movie;
  const {  numberOfStars } = this.state;
  console.log('state', this.state);
  console.log('props:', this.props)
  return (
  <div>
    <div>
    <div><p><img src={image} alt={name} /></p></div>
    <h1>{name}</h1>
    <div>
    <p>Year: {year}</p>
    <p>Genre: {genre.join(', ')}</p>
    <p>Director: {director}</p>
    <p>Starring: {firstActor}, {secondActor}</p>
    <a href={imdb}>IMDB</a>
    <p>User Rating:</p>
      <ReactStars
        count={5}
        onChange={handleStars}
        value={numberOfStars}
        half={false}
        />

    </div>
    <p><Link to="/movies">Movies</Link></p>
    <button onClick={this.handleBack}>Go Back</button>

    </div>
  </div>
);
}
}

export default withRouter(Movie);

// <SelectList
//   values={starArr}
//   selectedValue={ratings}
//   handleSelect={this.handleRatingSelect}
//   />
