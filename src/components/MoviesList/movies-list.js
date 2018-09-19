import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './../Movie';
import { fetchMovies } from './../../actions/movies';

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

const mapStateToProps = (state) => ({
  movies: state.movies,
  genreId: state.genreId
});

const mapDispatchToProps = {
  fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
