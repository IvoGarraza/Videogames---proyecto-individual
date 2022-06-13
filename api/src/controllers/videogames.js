const axios = require('axios');
const { Videogame, Genre} = require('../db');
const {API_KEY} = process.env

const getInfo = async () => {
    try {
        const ApiInfo = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        console.log(ApiInfo)
        const ApiInfoResults = ApiInfo.data.results.map( async (obj) => ) 
    } catch (error) {
        console.log(error)
        return error
    }
}

/* const objVideogame = (videogame) =>{
    const obj = {
        id: videogame.id
        name: videogame.name,
        description: videogame.
    }
} */