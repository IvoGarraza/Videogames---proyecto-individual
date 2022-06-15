const {Router} = require('express');
const router = Router();
//definir controllers
const {Videogame, Genre} = require('../db');
const {getGenre} = require('../controllers/genres.js');

router.get('/', async (req, res)=>{
    try {
        return res.status(200).send(await getGenre())
    } catch (error) {
        console.log(error)
        return error
    }
});

module.exports = router