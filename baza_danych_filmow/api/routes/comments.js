var express = require('express');
var router = express.Router();

const commentsController=require('../controllers/commentsController.js');

/* GET -> api/v1/comments
zwraca listę wszystkich komentarzy. */
router.get('/comments', commentsController.getAllComments);

/* GET -> api/v1/comments/:commentId
zwraca wybrany komentarz. */
router.get('/comments/:commentId', commentsController.getOneComment);

/* POST -> api/v1/comments
dodaje jeden komentarz. */
router.post('/comments', commentsController.addOneComment);

module.exports = router;
