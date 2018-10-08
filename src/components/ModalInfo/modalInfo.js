import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalInfo extends Component {

  render() {
    const movie = this.props.movie;
    return (
      <div className='container'>
        <div className='title-container'>
          <span className='title'>{ movie.title }</span><span className='date'>({movie.release_date})</span>
        </div>
        <div className='info-container'>
          <div className='label'>
            Synopsis
          </div>
          <div className='content'>
            {movie.overview}
          </div>
        </div>
        <div className='info-container'>
          <div className='label'>
            Note des utilisateurs
          </div>
          <div className='content'>
          {movie.vote_average}/10
          </div>
        </div>
      </div>
    );
  }
}

ModalInfo.PropTypes = {
  movie: PropTypes.object
}

export default ModalInfo;
