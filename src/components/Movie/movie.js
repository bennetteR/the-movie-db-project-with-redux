import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalInfo from '../ModalInfo';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      showModal: false
    };
    this.customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '400px',
        backgroundColor: '#eeeeee'
      }
    };
  }

  openModal(){
    this.setState({
      showModal: true
    })
  }

  closeModal () {
    this.setState({ showModal: false });
  }

  render() {
    console.log(this.props.details)
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={ this.customStyles }
          ariaHideApp={ false }
        >
          <button className='close-modal' onClick={this.closeModal}>X</button>
          <ModalInfo movie={this.props.details} />
        </Modal>
        <li className='movie-item' onClick={ this.openModal }>
          <div className='movie-img'>
            {this.props.details.poster_path === null ? (
              <img src='https://fakeimg.pl/185x278/' alt='poster' />
              ) : (
              <img src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${ this.props.details.poster_path }` } alt='poster' />
            )}
          </div>
          <div className='movie-title'>{ this.props.details.original_title }</div>
        </li>
      </div>
    );
  }
}

export default Movie;
