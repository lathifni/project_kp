var express = require('express');
var router = express.Router();

const programControllers = require('../controllers/testControl')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/test', programControllers.controllers.readProgram)

module.exports = router;