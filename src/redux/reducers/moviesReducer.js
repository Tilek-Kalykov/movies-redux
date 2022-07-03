import Movies from "../../pages/Movies"

const GET_MOVIE_BY_ID= 'GET_MOVIE_BY_ID'
const GET_NEW_MOVIE = 'GET_NEW_MOVIE'

 
const initialState ={
    movies:  [ 
        { 
            id: 1, 
            img: 'https://www.hdclub.ua/files/film/big/bigi528bc8a62c306.jpg', 
            name: 'Pacificrim', 
            year: 2013, 
            actors: ['Charlie Hannam', 'Idris Elba'], 
            genreL: 'action', 
            rated: 9.9, 
        }, 
        { 
            id: 2, 
            img: 'https://www.game-ost.ru/static/covers_soundtracks/5/7/5745_450947.jpg', 
            name: "The Dark Knight", 
            year: 2008, 
            actors: ["Cristian Bale", 'Heath ledser', 'Aaron Eckhart', 'Maggie Gyllenhaal',], 
            genre: "action", 
            rated: 7.9, 
        }, 
        { 
            id: 3, 
            img: 'https://smile-original.online/uploads/posts/2020-02/23026330.jpg', 
            name: "The GodFathers", 
            year: 1972, 
            actors: ['Marlon Brando', 'Al Pacino', 'Diana Keaton'], 
            genre: 'drama', 
            rated: 10, 
        }, 
        { 
            id: 4, 
            img:"https://i.pinimg.com/736x/0b/82/6f/0b826fec850bac465d021e31f4013234.jpg", 
            name: 'The Lords of the Rings: The Retturn og the King', 
            year: 2003, 
            actors: ["Elijah Wopd", "Viggo Mortensen", "Ian Mckellen", "Orlando Bloom"], 
            genre: "fantastic", 
            rated: 8.9, 
        }, 
        { 
            id: 5, 
            img: "https://www.hdclub.ua/files/film_poster/big/bigi51c344e8837ce.jpg", 
            name: "Pulp Fiction", 
            year: 1994, 
            actors: ["John TraVOLTA", "Uma Thurman"], 
            genre: 'comedian', 
            rated: 8.8, 
        }, 
        { 
            id: 6, 
            img: "https://c4.wallpaperflare.com/wallpaper/874/819/824/edward-norton-brad-pitt-men-actor-fight-club-hd-wallpaper-preview.jpg", 
            name: "Fight Club", 
            year: 1999, 
            actors: ["Brad Pitt", "Edward Norton"], 
            genre: 'action', 
            rated: 9.0, 
        }, 
        { 
            id: 7, 
            img: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg", 
            name: 'Inception', 
            year: 2010, 
            actors: ["leonardo Do=icaprio", "Elliot Page", "Ken Watanabe"], 
            genre: 'fantastic', 
            rated: 1, 
        }, 
        { 
            id: 8, 
            img: "https://www.hdclub.ua/files/film/big/bigi4c263f1ca4a3c.jpg", 
            name: 'The Matrix', 
            year: 1999, 
            actors: ["Keanu Reeves", "Gloria Foster"], 
            genre: 'action', 
            rated: 9.2, 
        }, 
        { 
            id: 9, 
            img: "https://wallpaperaccess.com/full/2011370.jpg", 
            name: 'Se7en', 
            year: 1995, 
            actors: ["Morgan Freeman", "Brad Pitt", 'Kevin Spacey'], 
            genre: 'comedian', 
            rated: 8.5, 
        }, 
        { 
            id: 10, 
            img: "https://www.hdclub.ua/files/film/big/bigi5afc7e0249666.jpg", 
            name: "Saving Private Ryan", 
            year: 1998, 
            actors: ["Tom Hanks", "Matt Damon", "Tom Sizemore", "Barry Pepper"], 
            genre: 'fantastic', 
            rated: 8.9, 
        }, 
        { 
            id: 11, 
            img: "https://cdn.hmv.com/r/w-640/hmv/files/ff/ff154dab-a882-4ee2-a3e6-b8fde1339c5a.jpg", 
            name: "The Shawshank Redemption", 
            year: 1994, 
            actors: ["Tim Robbins", "Bob Gunton", "Morgan Freeman","William Sadler"], 
            genre: 'drama', 
            rated: 8.3, 
        }, 
    { 
            id: 12, 
            img: "https://www.hdclub.ua/files/film/big/bigi4c921dfedd794.jpg", 
            name: "Gladiator", 
            year: 2000, 
        actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"], 
            genre: 'action', 
            rated: 8.5, 
        },],
    favoriteMovie: null
}


const moviesReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_MOVIE_BY_ID:
            return{
                ...state,
                favoriteMovie: state.movies.find(el => el.id == action.id)
                   
                

            }
            case GET_NEW_MOVIE:
                return{
                    ...state,
                    movies:[
                        ...state.movies,
                        action.newMovie
                    ]
                }
        default:
            return state;
    }

}





export const getMoviebyId = (id) =>({type:GET_MOVIE_BY_ID, id })
export const getNewMovie =(newMovie) =>({type: GET_NEW_MOVIE, newMovie})

export default moviesReducer