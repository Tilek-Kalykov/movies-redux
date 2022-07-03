import { instance } from "../axios"

export const movieAPI = {
    getMovies() {
        return instance.get()
        .then(response=>response.data)
    },
}