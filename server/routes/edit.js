var express = require('express');
var router = express.Router();
const edit = require('../controllers/edit')

router.post('/editProgram/:id', edit.controllers.editProgram)
router.post('/editKegiatan/:id', edit.controllers.editKegiatan)
router.post('/editSubKegiatan/:id', edit.controllers.editSubKegiatan)
router.post('/editPengeluaran/:id', edit.controllers.editPengeluaran)
router.get('/editNota/:id', edit.controllers.editNota)

module.exports = router;