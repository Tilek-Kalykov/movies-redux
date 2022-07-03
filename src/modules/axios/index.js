import axios from "axios";

export const instance = axios.create ({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    headers: { 
        'X-API-KEY': '1f5d643d-12dd-4b0b-96d5-abdff6db72ac', 
        'Content-Type': 'application/json', 
    }, 
})