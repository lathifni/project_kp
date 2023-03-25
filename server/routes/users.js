var express = require('express');
var router = express.Router();
const programControllers = require('../controllers/testControl')
const cekLogin = require('../controllers/middleware')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/readProgram', cekLogin.controllers.verifyToken, programControllers.controllers.readProgram)

// router.get('/listProgram', programControllers.controllers.listProgram)
// router.get('/listPengeluaran', programControllers.controllers.ListPengeluaran)
// router.get('/listAkun', programControllers.controllers.listAkun)
// router.get('/listKegiatan', programControllers.controllers.listKegiatan)

module.exports = router;
