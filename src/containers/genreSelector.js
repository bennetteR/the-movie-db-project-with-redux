import { connect } from 'react-redux';
import GenreSelector from '../components/GenreSelector';
import { fetchGenres, setSelectedGenreId } from '../actions/genres';

const mapStateToProps = (state) => ({
  genres: state.genres
});

const mapDispatchToProps = {
  fetchGenres,
  setSelectedGenreId
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreSelector);
