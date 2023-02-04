var express = require('express');
var router = express.Router();

const programControllers = require('../controllers/testControl')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/readProgram', programControllers.controllers.readProgram)

module.exports = router;
