/************Not working yet*************/
/*import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';

export default combineReducers({
  movies,
  genres
});*/

const initialState = {
  movies: [],
  genres: []
}

export default function reducer(state = initialState, action) {
  switch(action.type){
      case 'FETCH_MOVIES_SUCCESS': 
      return {
          ...state,
          movies: action.results
      }
      case 'FETCH_GENRES_SUCCESS': 
          return {
              ...state,
              genres: action.results
          }
      default: 
          return state;
  }
}