import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviebyId } from '../../redux/reducers/moviesReducer';

const Detail = () => {
    const {id} =useParams()
    const {favoriteMovie} = useSelector(state => state.moviesPage)
    const {movies}=useSelector(state => state.moviesPage)
    const dispatch = useDispatch()
   
    // console.log(movies);

  

    useEffect(() =>{
         dispatch(getMoviebyId(id));
    },[])
   
   
    return (
        <div>
           <h2>{id} {favoriteMovie?.name}</h2>
          <img src={favoriteMovie?.img} alt="" /> 
          <h2>{id} {movies?.name}</h2>
          <img src={movies?.img} alt="" />
         

            
        </div>
    );
};

export default Detail;