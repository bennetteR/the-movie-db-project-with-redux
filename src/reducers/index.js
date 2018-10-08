const initialState = {
  movies: [],
  genres: [],
  genreId: 28
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
    case 'SET_SELECTED_GENRE_ID': 
        return {
            ...state,
            genreId: action.genreId
        }
    default: 
        return state;
  }
}