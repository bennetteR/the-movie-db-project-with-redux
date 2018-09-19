export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
function fetchGenresSuccess({ genres }) {
  return {
    type: FETCH_GENRES_SUCCESS,
    results: genres
  };
}

export function fetchGenres() {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=92b418e837b833be308bbfb1fb2aca1e`)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(genres =>
          dispatch(fetchGenresSuccess(genres))
        )
    };
}

export const SET_SELECTED_GENRE_ID = 'SET_SELECTED_GENRE_ID';
function setSelectedGenreIdSuccess(genreId) {
  return {
    type: SET_SELECTED_GENRE_ID,
    genreId
  }; 
}

export function setSelectedGenreId(genreId) {
  return (dispatch) => {
    dispatch(setSelectedGenreIdSuccess(genreId))
  };
}