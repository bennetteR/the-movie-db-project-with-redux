import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './components/Movie';
import GenreSelector from './components/GenreSelector';
import './App.css';
import { fetchMovies } from './actions/movies';

class App extends Component {

  constructor(props){
    super(props);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.state = {
      genreId: 28
    };
  }

  componentDidMount() {
    this.renderMovies();
  }

  handleGenreChange(e) {
    this.setState({genreId: e.target.value}, () => {
      this.renderMovies();
    });
  }

  renderMovies(){
    const genreId = this.state.genreId;
    this.props.fetchMovies(genreId);
  }

  render() {
    const movies = this.props.movies;
    return (
      <div className='app'>
        <header className='app-header'>
          <h1 className='app-title'>The Movie Db Project</h1>
        </header>
        <p className='app-intro'>
          Sélectionnez un genre 
          <GenreSelector handleGenreChange={ this.handleGenreChange } />
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

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = {
  fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
