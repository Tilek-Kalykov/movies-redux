import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { getMovies } from '../../redux/reducers/moviesKP-reducer';


const Movies = () => {
    const data = useSelector(state => state.moviesKP.movies)


    const dispatch = useDispatch()

    useEffect(() =>{
     dispatch(getMovies())
    },[])

    
    return (
        <div>
            <MoviesList data={data}/>
            
        </div>
    );
};

export default Movies;