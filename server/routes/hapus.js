var express = require('express');
var router = express.Router();
const hapus = require('../controllers/hapus')

router.get('/hapusNota/:id', hapus.controllers.hapusNota)

module.exports = router;