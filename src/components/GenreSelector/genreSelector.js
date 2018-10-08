import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

GenreSelector.PropTypes = {
  genres: PropTypes.array,
  fetchGenres: PropTypes.func,
  setSelectedGenreId: PropTypes.func
}

export default GenreSelector;
