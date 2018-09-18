import React, { Component } from 'react';

class GenreSelector extends Component {

  constructor(props){
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=92b418e837b833be308bbfb1fb2aca1e')
    .then(response => response.json())
    .then(data => this.setState({
        genres: data.genres
      })); 
  }
  
  renderOptions() {
    var optionsArr = [];
    this.state.genres.forEach((genre, index) => {
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
