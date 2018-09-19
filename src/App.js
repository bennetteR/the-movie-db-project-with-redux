import React, { Component } from 'react';
import GenreSelector from './components/GenreSelector';
import MoviesList from './components/MoviesList';
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
