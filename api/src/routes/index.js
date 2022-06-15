const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeVideogames = require('./videogames.js');
const routeGenre = require('./genres.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', routeVideogames)
router.use('/genre', routeGenre)

module.exports = router;
