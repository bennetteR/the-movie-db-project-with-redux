import React, { Component } from 'react';
import GenreSelector from './containers/genreSelector.js';
import MoviesList from './containers/moviesList.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1 className='app-title'>The Movie Db Project</h1>
        </header>
        <GenreSelector />
        <div className='movies-container'>
          <MoviesList />
        </div>
      </div>
    );
  }
}

export default App;
