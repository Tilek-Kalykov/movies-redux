import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <NavLink to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRfOzYuvs8ZmeDoLntthcuOHzdDuEUGZucw&usqp=CAU" alt="Logo" />
            </NavLink>

            <ul className='navlink'>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/best">Top 5</NavLink>
                <NavLink to="/addMovie">Add new Movie</NavLink>
                <NavLink to="/detail/:id">Movie</NavLink>
                
            </ul>
         
            
        </header>
    );
};

export default Header;