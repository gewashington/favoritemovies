import React from 'react';
import { Route, Switch } from 'react-router-dom';
import movieAPI from '../Movies/movieAPI';
import { Dropdown } from 'semantic-ui-react';
// import MovieList from './MovieList';
// import Movie from './Movie/Movie';


class PickAGenre extends React.Component {
  render() {
    const { values, selectedValue, handleSelect } = this.props
    const displayValues = ['', ...values]

    return (
      <div>
        <select
          value={selectedValue}
          onChange={handleSelect}
          placeholder="Genre"
        >
          {displayValues.map(val =>
            <option value={val}>{val}</option>)}
        </select>
      </div>
    )
  }
}


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
    const genres = new Set(movieAPI.getAll().map(obj => obj.genre))
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
      <PickAGenre
      values={genres}
      selectedValue={genreSelected}
      handleSelect={this.handleGenreSelect}
      />
      </div>
    );
  }
}

export default Genres;
