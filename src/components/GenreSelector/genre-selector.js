import React, { Component } from 'react';

class GenreSelector extends Component {
  
  renderOptions() {
    var optionsArr = [];
    this.props.genres.forEach((genre, index) => {
        optionsArr.push(<option key={index} value={genre.id}>{genre.name}</option>);
    })
    return optionsArr;
  }

  render() {
    return (
      <select onChange={ this.props.handleGenreChange }>
            { this.renderOptions() }
      </select>
    );
  }
  
}

export default GenreSelector;
