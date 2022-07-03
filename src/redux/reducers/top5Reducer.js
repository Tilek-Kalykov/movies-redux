const initialState = {
    films:[
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
        }
    ]
    
}



const top5Reducer = (state=initialState,action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default top5Reducer