var express = require('express');
var router = express.Router();
const tambah = require('../controllers/tambah')

router.post('/tambahProgram/', tambah.controllers.tambahProgram)
router.post('/tambahKegiatan/:rek_P4', tambah.controllers.tambahKegiatan)
router.post('/tambahSubKegiatan/:rek_PK4', tambah.controllers.tambahSubKegiatan)
router.post('/tambahPengeluaran/:rek_PKSk4', tambah.controllers.tambahPengeluaran)
router.post('/tambahAkun', tambah.controllers.tambahAkun)
router.post('/tambahNota', tambah.controllers.nota)

module.exports = router;