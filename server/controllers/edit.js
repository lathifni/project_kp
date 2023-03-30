const {program, kegiatan, kwitansi, pengeluaran,
    sub_kegiatan} = require('../models')
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controllers ={}

controllers.editProgram = async (req, res) => {
    try {
        await program.update({
            nama    : req.body.nama,
            rek_P4 : req.body.rek_P4
        }, {
            where : { id: req.params.id }
        })
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        res.send(err)
    }
}

controllers.editKegiatan = async (req, res) => {
    try {
        await kegiatan.update({
            nama    : req.body.nama,
            rek_PK4 : req.body.rek_PK4
        }, {
            where : { id: req.params.id }
        })
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        res.send(err)
    }
}

controllers.editSubKegiatan = async (req, res) => {
    try {
        await sub_kegiatan.update({
            nama    : req.body.nama,
            rek_PKSk4 : req.body.rek_PKSk4
        }, {
            where : { id: req.params.id }
        })
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        res.send(err)
    }
}

controllers.editPengeluaran = async (req, res) => {
    try {
        await pengeluaran.update({
            nama        : req.body.nama,
            rek_P5      : req.body.rek_P5,
            triwulan1   : req.body.triwulan1,
            triwulan2   : req.body.triwulan2,
            triwulan3   : req.body.triwulan3,
            triwulan4   : req.body.triwulan4,
        }, {
            where : { id: req.params.id }
        })
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        res.send(err)
    }
}

controllers.editNotaKonfirmasi = async (req, res) => {
    try {
        await kwitansi.update({
            status  : 1
        }, {
            where   : { id: req.params.id}
        })
    } catch (err) {
        res.send(err)
    }
}

controllers.editNotaDibayarkan = async (req, res) => {
    try {
        await kwitansi.update({
            status  : 2
        }, {
            where   : { id: req.params.id}
        })
    } catch (err) {
        res.send(err)
    }
}

module.exports = {controllers}