const {Router} = require('express');
const router = Router();
//definir controllers
const {Videogame, Genre} = require('../db');
const {getInfo, searchGames} = require('../controllers/videogames')

router.get('/', async (req, res) =>{
    const name = req.query.name;

    try {
        if(!name){
            return res.status(200).send(await getInfo())
        }else{
            return res.status(200).send( await searchGames(name))
        }
    } catch (error) {
        console.log(error)
        return error
    }
})



module.exports= router