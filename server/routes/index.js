var express = require('express');
var router = express.Router();

const programControllers = require('../controllers/testControl')
const auth = require('../controllers/auth')
const cekLogin = require('../controllers/middleware')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/test', cekLogin.controllers.verifyToken, programControllers.controllers.readProgram)
router.post('/login', auth.controllers.login)

module.exports = router;