const {Router} = require('express');
const router = Router();
//definir controllers
const {Videogame, Genre} = require('../db');
const {getInfo} = require('../controllers/videogames')

router.get('/', async (req, res) =>{
    try {
        return res.status(200).send(await getInfo())
    } catch (error) {
        console.log(error)
        return error
    }
})

module.exports= router