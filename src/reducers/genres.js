export default function genres(state = [], action) {
    console.log(state)
    switch(action.type){
        case 'FETCH_GENRES_SUCCESS': 
            return {
                ...state,
                genres: action.results
            }
        default: 
            return state;
    }
}