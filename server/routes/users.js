var express = require('express');
var router = express.Router();

const programControllers = require('../controllers/testControl')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/readProgram', programControllers.controllers.readProgram)
router.get('/listProgram', programControllers.controllers.listProgram)
router.get('/listPengeluaran', programControllers.controllers.ListPengeluaran)
router.get('/listAkun', programControllers.controllers.listAkun)
router.get('/listKegiatan', programControllers.controllers.listKegiatan)
router.get('/listSubKegiatan', programControllers.controllers.listSubKegiatan)
router.get('/Pengeluaran/:id', programControllers.controllers.Pengeluaran)
router.post('/post', programControllers.controllers.post)

module.exports = router;
