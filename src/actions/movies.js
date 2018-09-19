export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
function fetchMoviesSuccess({ results }) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    results
  };
}

export function fetchMovies(genreId) {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/4/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&with_genres=${genreId}&primary_release_year=2018&page=1&with_original_language=en`)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(results =>
          dispatch(fetchMoviesSuccess(results))
        )
    };
}