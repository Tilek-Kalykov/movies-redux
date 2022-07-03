
const initialState ={
    title: 'Movies -ITC - JS- Redux',
    description : [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit ea consequatur placeat iusto officia voluptates, mollitia vero nihil magnam enim totam quo maiores porro minima neque adipisci minus! Saepe?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit ea consequatur placeat iusto officia voluptates, mollitia vero nihil magnam enim totam quo maiores porro minima neque adipisci minus! Saepe?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit ea consequatur placeat iusto officia voluptates, mollitia vero nihil magnam enim totam quo maiores porro minima neque adipisci minus! Saepe?'
    ]
}

const homeReducer = (state=initialState,action) =>{
    switch (action.type) {
        default:
            return state;
    }

}
export default homeReducer