var express = require('express');
var router = express.Router();

const moviesController=require('../controllers/moviesController.js');

/* GET -> api/v1/movies
zwraca listę wszystkich filmow. */
router.get('/', moviesController.getAllMovies);

/* GET -> api/v1/movies/:movieId
zwraca konkretny film. */
router.get('/:movieId', moviesController.getOneMovie);

/* POST -> api/v1/movies/
dodaje konkretny film. */
router.post('/', moviesController.addOneMovie);

/* DELETE -> api/v1/movies/:movieId
usuwa konkretny film. */
router.delete('/:movieId', moviesController.deleteOneMovie);

/* UPDATE -> api/v1/movies/:movieId
aktualizuje konkretny film. */
router.put('/:movieId', moviesController.updateOneMovie);

module.exports = router;
