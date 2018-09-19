import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from './../../actions/genres';

class GenreSelector extends Component {

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

  render() {
    return (
      <select onChange={ this.props.handleGenreChange }>
            { this.renderOptions() }
      </select>
    );
  }
  
}

const mapStateToProps = (state) => ({
  genres: state.genres
});

const mapDispatchToProps = {
  fetchGenres
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreSelector);
