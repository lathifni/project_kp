const {program, kegiatan, kwitansi,
        laporan_bulanan, pengeluaran, staff, akun,
        sub_kegiatan} = require('../models')
var Sequelize = require('sequelize');
const controllers ={}

controllers.readProgram = async (req, res) => {
    // res.render('index', {title: 'Halo ini adalah read program'})
    // attributes: [[Sequelize.fn('sum', Sequelize.col('kwitansis.total')), 'totalnya']],

    // const data = await laporan_bulanan.findAll({
    //     attributes: ['bulan', 'anggaran', [Sequelize.fn('sum', Sequelize.col('kwitansis.total')), 'totalnya']],
    //     include: [{model: kwitansi}],
    //     group: ['id_LB']})
    //     .then(data => {
    //     res.send(data)
    // }).catch(err => {
    //     res.send(err)
    // })

    // const data = await pengeluaran.findAll({
    //     include: [{
    //         model: laporan_bulanan,
    //         include: [kwitansi]
    //     }]})
    //     .then(data => {
    //     res.send(data)
    // }).catch(err => {
    //     res.send(err)
    // })

    const data = await program.findAll({
        include: [{
            model: kegiatan,
            include: [{
                model: sub_kegiatan,
                include: [{
                    model: pengeluaran,
                    include: [{
                        model: laporan_bulanan,
                        include: [{
                            model: kwitansi
                        }]
                    }]
                }]
            }]
        }]})
        .then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

module.exports = {controllers}