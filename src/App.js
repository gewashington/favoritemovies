import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//import movies here
import './App.css';
import Home from './Home';
import Movies from './Movies/Movies';
import movieAPI from './Movies/movieAPI';
import Genres from './Genres/Genres';
import Ratings from './Ratings/Ratings';

class App extends React.Component {
  constructor()  {
    super()

    this.state = {
      ratings: []
    }
  }


  updateRating = (userRating, movieID) => {
    const { ratings } = this.state;
    let currentMovie = movieAPI.getAll().find(movie => movie.id === movieID);
    let objIndex = null;
    let movieFiltered = ratings.filter((obj, i) => {
      if (obj.id === movieID) {
        objIndex = i;
      }
      return obj.id === movieID
    })
    console.log('obj', objIndex)
    console.log('moviefiltered:', movieFiltered)
    if (  movieFiltered[0]  ) {
      ratings[objIndex].rating = userRating
      this.setState ({
        ratings: ratings
      })
    } else {
      this.setState({
            ratings: [...ratings, {id: movieID, rating: userRating}]
          })
    }
  }

render() {
    const { ratings } = this.state;
  return(
      <div>
        <nav>
        <Link to='/'>Home</Link>{" "}
        <Link to='/movies'>Movies</Link>
        <Link to='/genres'>Genres</Link>
        <Link to='/ratings'>Ratings</Link>

        </nav>


      <Switch>
      //place Route here
        <Route exact path="/" component={Home} />
        <Route path='/movies' component={(props) => <Movies {...props} updateRating={this.updateRating} ratings={ratings}/>} />
        <Route path='/genres' component={Genres} />
        <Route path='/ratings' component={Ratings} />
      </Switch>
     </div>
  )
}
}

export default App;
