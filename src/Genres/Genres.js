import React from 'react';
import SelectList  from '../Movies/SelectList';
import { Route, Switch } from 'react-router-dom';
import movieAPI from '../Movies/movieAPI';
import MovieList from '../Movies/MovieList';
import Movies from '../Movies/Movies';


class Genres extends React.Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      genreSelected: ''
    }
  };

  getAllGenres = () => {
    // movies -> movie -> movie.genre
    const genres = new Set([].concat.apply([],movieAPI.getAll().map(obj => obj.genre)))
    this.setState({ genres })
};

  handleGenreSelect = e => {
    this.setState({
      genreSelected: e.target.value
    })
  };

  componentDidMount() {
    this.getAllGenres();
  }

  renderGenreList = ( genre ) => {
    const movies = movieAPI.getAll().filter(movie => movie.genre.includes(genre));
    console.log(movies)
    // <Link to={`/genres/${genre}`} />
    return <MovieList movies={movies} />;

  }

  // renderGenreList = props => {
  //   const { genre } = props.match.params;
  //   const movie = movieAPI.getOne(genre);
  //   if (!movie) {
  //     return <div> could not find movie </div>;
  //   } else {
  //     return <Movie name={movie.name}
  //       year={movie.year}
  //       genre={movie.genre}
  //       director={movie.director}
  //       firstActor={movie.firstActor}
  //       secondActor={movie.secondActor}
  //       image={movie.image}
  //       imdb={movie.imdb} />;
  //   }
  // }

  render() {
    const { genres, genreSelected } = this.state
    return(
      <div>
      <p>Select a Genre</p>
      <SelectList
      values={genres}
      selectedValue={genreSelected}
      handleSelect={this.handleGenreSelect}
      />
    <br/>
      {genreSelected !== '' ? this.renderGenreList(genreSelected) : null}
      <Switch>
        // <Route exact path="/genres/:genre" render={this.renderGenreList(genreSelected)} />
        <Route path="/movies/:id" render={Movies.renderMovie} />
      </Switch>
      </div>
    );
  }
}

export default Genres;
