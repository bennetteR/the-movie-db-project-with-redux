import React, { Component } from 'react';
import Movie from './components/Movie';
import GenreSelector from './components/GenreSelector';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.state = {
      movies: [],
      genres: [],
      genreId: 28
    };
  }

  componentDidMount() {
    this.renderMovies();

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=92b418e837b833be308bbfb1fb2aca1e')
    .then(response => response.json())
    .then(data => this.setState({
        genres: data.genres
      })); 
  }

  handleGenreChange(e) {
    this.setState({genreId: e.target.value}, () => {
      this.renderMovies();
    });
  }

  renderMovies(){
    const genreId = this.state.genreId;
    fetch(`https://api.themoviedb.org/4/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&with_genres=${genreId}&primary_release_year=2018&page=1&with_original_language=en`)
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.results
    }));
  }

  render() {
    const movies = this.state.movies;
    return (
      <div className='app'>
        <header className='app-header'>
          <h1 className='app-title'>The Movie Db Project</h1>
        </header>
        <p className='app-intro'>
          Sélectionnez un genre 
          <GenreSelector handleGenreChange={ this.handleGenreChange } genres={ this.state.genres } />
        </p>
        <div className='movies-container'>
        <ul className='movies-list'>
          {
            movies.map((movie, i) => {
              return <Movie details={ movie } key={ i } />
            })
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
