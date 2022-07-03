import { movieAPI } from "../../modules/api"

const SET_MOVIES = 'SET_MOVIES'
const IS_LOADING = 'IS_LOADING'


const initialState ={
    isLoading:false,
    movies:[]

}


const moviesKPReducer = (state=initialState,action) =>{
    
    switch(action.type){
        case IS_LOADING :
            return{
                ...state,
                isLoading: action.isLoading
            }
        case SET_MOVIES:
            return{
                ...state,
                movies: action.movies
            }
        default:
            return state;
    }


}

export const setIsLoading = (isLoading) => ({type:IS_LOADING,isLoading})
export const setMovies =(movies) =>({type:SET_MOVIES, movies})


export const getMovies = () => (dispatch)=>{
    dispatch(setIsLoading(true))
    movieAPI.getMovies()
    .then(response => dispatch(setMovies(response.items)))
    .catch(err => console.log(err))
    .finally(() => dispatch(setIsLoading(false)))
}


export default moviesKPReducer