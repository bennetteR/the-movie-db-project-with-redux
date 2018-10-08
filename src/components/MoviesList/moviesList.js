import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';

class MoviesList extends Component {

  componentDidMount() {
    this.props.fetchMovies(this.props.genreId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.genreId !== prevProps.genreId) {
      this.props.fetchMovies(this.props.genreId);
    }
  }

  render() {
    const movies = this.props.movies;
    return (
      <ul className='movies-list'>
          {
            movies.map((movie, i) => {
              return <Movie details={ movie } key={ i } />
            })
          }
      </ul>
    );
  }
}

MoviesList.PropTypes = {
  fetchMovies: PropTypes.func,
  genreId: PropTypes.instanceOf,
  movies: PropTypes.array
}

export default MoviesList;