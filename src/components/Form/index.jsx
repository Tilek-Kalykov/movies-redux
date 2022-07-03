import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewMovie } from '../../redux/reducers/moviesReducer';

const Form = () => {
    const moviesLength = useSelector(state => state.moviesPage.movies.length)
    const dispatch = useDispatch()

    const [formData,setFormData] = useState({
        id:moviesLength + 1,
        img:"",
        name:"",
        year:null,
        actors:[],
        genre:"",
        rated:"",

    })

    const handleChange = (key,value) =>{
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const onSubmit =(event) =>{
        event.preventDefault()
        dispatch(getNewMovie(formData))
    }
   
    return (
       <form onSubmit={onSubmit} style={{display:'flex',flexDirection:'column',}}>
           <input onChange={(event) =>handleChange("name",event.target.value)} type="text" placeholder='Name'/>
           <input onChange={(event) =>handleChange("year",event.target.value)}  type="number" placeholder='Year' />
           <input onChange={(event) =>handleChange("img",event.target.value)}  type="text" placeholder='Image'/>
           <input onChange={(event) =>handleChange("genre",event.target.value)}  type="text" placeholder='Genre'/>
           <input onChange={(event) =>handleChange("actors",event.target.value)} type="text" placeholder='Actors'/>
           <input onChange={(event) =>handleChange("rated",event.target.value)} type="number" placeholder='Rate'/>
           <button>Add</button>
       </form>
    );
};



export default Form;