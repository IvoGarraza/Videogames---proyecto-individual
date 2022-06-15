const axios = require('axios');
const { Videogame, Genre} = require('../db');
const {API_KEY} = process.env

const getInfo = async () => {
    try {
        //traigo la info de la API
        const ApiInfo = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        //mapeo la info y la ordeno
        const ApiInfoResults = ApiInfo.data.results.map(obj => { return objVideogame(obj)})
        console.log('get info api - ApiInfoResults')
        return ApiInfoResults

    } catch (error) {
        console.log(error)
        return error
    }
}

//funcion para crear el objeto 
const objVideogame = (videogame) =>{
    const obj = {
        id: videogame.id,
        name: videogame.name,
        description: videogame.slug,
        rating: videogame.rating,
        platform: videogame.platforms.map((p) => {return p.platform.name})
    }
    return obj
}

//videogames de la base de datos
const videogamesDB = async () =>{
    //traigo los videogames de la base de datos
    const gamesDB = await Videogame.findAll({
        include: Genre
    });
    const objGameDB= gamesDB.map((game)=>{
        return {
            id: game.id,
            name: game.name,
            description: game.slug,
            rating: game.rating,
            platform: game.platforms
        }
    });

    try {
        return objGameDB
    } catch (error) {
        console.log(error)
        return error        
    }
};

//fusion de la base de datos y la API
const allVideogames = async () => {
    try {
        const ApiInfoGames = await getInfo();
        const DbInfoGames = gamesDB();
        return [...ApiInfoGames, ...DbInfoGames]
    } catch (error) {
        console.log(error)
        return error
    }
}

const searchGames = async (name) => {
    try {
        const infoSearchApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
        const infoSearchApiResults = infoSearchApi.data.results.map(obj => {return objVideogame(obj)});
        let arr = [...infoSearchApiResults]
        //filtro 15
        arr = arr.slice(0, 15)
        console.log('infoSearchApiResults')
        return arr
    } catch (error) {
        console.log(error);
        return error
    }

}

module.exports={
    getInfo,
    allVideogames,
    videogamesDB,
    searchGames
}