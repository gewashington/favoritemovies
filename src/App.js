import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//import movies here
import './App.css';
import Home from './Home';
import Movies from './Movies/Movies';
import Genres from './Genres/Genres'

const App = () => (
  <div>
    <nav>
    <Link to='/'>Home</Link>{" "}
    <Link to='/movies'>Movies</Link>
    <Link to='/genres'>Genres</Link>
    </nav>


  <Switch>
  //place Route here
    <Route exact path="/" component={Home} />
    <Route path='/movies' component={Movies} />
    <Route path='/genres' component={Genres} />
  </Switch>
 </div>
)

export default App;
