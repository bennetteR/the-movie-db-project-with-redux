export default function movies(state = [], action) {
    switch(action.type){
        case 'FETCH_MOVIES_SUCCESS': 
            return {
                ...state,
                movies: action.results
            }
        default: 
            return state;
    }
}