import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import { fetchMovies } from '../actions/movies';


const mapStateToProps = (state) => ({
    movies: state.movies,
    genreId: state.genreId
  });
  
  const mapDispatchToProps = {
    fetchMovies
  };

const Container = connect(mapStateToProps, mapDispatchToProps)(MoviesList);

export default Container;