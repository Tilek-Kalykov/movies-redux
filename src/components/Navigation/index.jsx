import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Top5 from '../../pages/Top5';
import Detail from '../Detail';
import Form from '../Form';


const Navigation = () => {
    return (
       
        <div className='routes'>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/movies' element={<Movies/>}/>
           <Route path='/detail/:id' element={<Detail/>}/>
           <Route path='/best' element={<Top5/>}/>
           <Route path='/addMovie' element={<Form/>}/>
       </Routes>
       </div>
       
    );
    
};

export default Navigation;