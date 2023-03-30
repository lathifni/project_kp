var express = require('express');
var router = express.Router();
const list = require('../controllers/list')

router.get('/Program/:id', list.controllers.getSingleProgram)
router.get('/Kegiatan/:id', list.controllers.getSingleKegiatan)
router.get('/SubKegiatan/:id', list.controllers.getSingleSubKegiatan)
router.get('/Pengeluaran/:id', list.controllers.getSinglePengeluaran)
router.get('/konfirmasiNota', list.controllers.listKonfirmasiNota)
router.get('/notaDibayarkan', list.controllers.listNotaDibayarkan)
router.get('/semuaProgram', list.controllers.listsemuaProgram)
router.get('/semuaPengeluaran', list.controllers.listSemuaPengeluaran)
router.get('/semuaAkun', list.controllers.listSemuaAkun)
router.get('/semuaKegiatan', list.controllers.listSemuaKegiatan)
router.get('/semuaNota', list.controllers.listSemuaNota)
router.get('/semualistSubKegiatan', list.controllers.listSubKegiatan)
router.get('/semualistPengeluaran/:id', list.controllers.listPengeluaran)

module.exports = router;