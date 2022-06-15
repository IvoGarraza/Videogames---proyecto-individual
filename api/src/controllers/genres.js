const axios = require('axios');
const { Videogame, Genre} = require('../db');
const {API_KEY} = process.env

//traigo los generos de la API

const genreAPI= async () => {
    try {
        const reqApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const resApi = reqApi.data.results
        const generoGames = resApi.map (g => {
            Genre.create({
                name: g.name,
                id: g.id
            })
        });
        return generoGames
        
    }catch (error) {
        console.log
        return error
    }
};
genreAPI()

const getGenre = async () =>{
    const resultado = await Genre.findAll();
    return resultado
}
module.exports={
    getGenre
}

