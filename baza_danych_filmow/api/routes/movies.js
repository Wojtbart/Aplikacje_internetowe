var express = require('express');
var router = express.Router();

const moviesController=require('../controllers/moviesController.js');

/* GET -> api/v1/movies
zwraca listę wszystkich filmow. */
router.get('/movie', moviesController.getAllMovies);

/* GET -> api/v1/movies/:movieId
zwraca konkretny film. */
router.get('/movie/:movieId', moviesController.getOneMovie);

/* POST -> api/v1/movies/
dodaje konkretny film. */
router.post('/movie', moviesController.addOneMovie);

/* DELETE -> api/v1/movies/:movieId
usuwa konkretny film. */
router.delete('/movie/:movieId', moviesController.deleteOneMovie);

/* UPDATE -> api/v1/movies/:movieId
aktualizuje konkretny film. */
router.put('/movie/:movieId', moviesController.updateOneMovie);

module.exports = router;
