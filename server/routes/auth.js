var express = require('express');
var router = express.Router();
const auth = require('../controllers/auth')

router.post('/reset', auth.controllers.reset)
router.post('/changePass', auth.controllers.changePassword)

module.exports = router;