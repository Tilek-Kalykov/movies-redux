import React from 'react';
import './Movies.css'



const MoviesList = ({data}) => {
   
console.log(data);
    
    return (
        
        <div  className='movies'>
             {
                data?.map(el =>(
                    <div key={el.kinopoiskId}>
                        <img src={el?.posterUrl} alt="" className='img' />
                        <div className='h4'>
                        <h4>{el?.nameOriginal}</h4>
                        <h4>{el?.nameRu}</h4>
                        </div>
                    </div>
                ))
            } 

        
            
        </div>
    );
};

export default MoviesList;