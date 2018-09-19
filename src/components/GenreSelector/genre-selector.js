import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenres, setSelectedGenreId } from './../../actions/genres';

class GenreSelector extends Component {

  constructor(props){
    super(props);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchGenres();
  }
  
  renderOptions() {
    var optionsArr = [];
    this.props.genres.forEach((genre, index) => {
        optionsArr.push(<option key={index} value={genre.id}>{genre.name}</option>);
    })
    return optionsArr;
  }

  handleGenreChange(e) {
    this.props.setSelectedGenreId(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Sélectionnez un genre</label>
        <select onChange={ this.handleGenreChange }>
              { this.renderOptions() }
        </select>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  genres: state.genres
});

const mapDispatchToProps = {
  fetchGenres,
  setSelectedGenreId
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreSelector);
