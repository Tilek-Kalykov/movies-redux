import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css'

const Home = () => {
    const {title,description} = useSelector(state => state.home)
    
    
    return (
        <div>


            <h2 className='title'>{title}</h2>

            
            <div className='description'>
            {
                
                description?.map((text,id)=> (
                    
                    <p key={id}>{text}</p>
                ))
            }
            </div>
            
        </div>
    );
};

export default Home;