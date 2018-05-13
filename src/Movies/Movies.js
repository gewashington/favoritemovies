import React from 'react';
import { Route, Switch } from 'react-router-dom';
import movieAPI from './movieAPI';
import MovieList from './MovieList';
import Movie from './Movie';


class Movies extends React.Component {
  constructor(props) {
    super(props)
  }

state = {
    id: '',
    name: '',
  }


  renderMovie = (props) => {
    const { id } = props.match.params;
    const { updateRating, ratings } = this.props;

    // const id = props.match.params.id
    const movie = movieAPI.getOne(id);
    if (!movie) {
      return <div> could not find movie </div>;
    } else {
      return <Movie
        movie={movie}
        updateRating={updateRating}
        ratings={ratings}
        />;
    }


  };

  renderMovieList = () => {
    const movies = movieAPI.getAll();
    return <MovieList movies={movies} />;
  };



  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:id" render={this.renderMovie} />
        </Switch>
      </div>
    );
  }
}
export default Movies;

// class Movies extends React.Component {
//   renderMovie = props => {
//     const { id } = props.match.params;
//     const movie = movieAPI.getOne(id);
//     if (!movie) {
//       return <div>Could not locate movie</div>
//     }
//     else {
//       return <Movie name={movie.name}>
//     }
//   };
//
//   renderMovieList = () => {
//     const movies = movieAPI.getAll();
//     return <MovieList movies={movies} />;
//   };
//
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route exact path='/movies' render={this.renderMovieList} />
//           <Route path='/movies/:id' render={this.renderMovie} />
//         </Switch>
//       </div>
//     );
//   }
// }
//
// export default Movies;
