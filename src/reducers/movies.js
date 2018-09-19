export default function movies(state = [], action) {
    console.log(state)
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