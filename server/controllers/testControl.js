const {program, kegiatan, kwitansi,
        laporan_bulanan, pengeluaran, staff, akun,
        sub_kegiatan} = require('../models')
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controllers ={}

controllers.readProgram = async (req, res) => {
    // res.render('index', {title: 'Halo ini adalah read program'})
    // attributes: [[Sequelize.fn('sum', Sequelize.col('kwitansis.total')), 'totalnya']],

    // const data = await laporan_bulanan.findAll({
        // attributes: ['bulan', 'anggaran', [Sequelize.fn('sum', Sequelize.col('kwitansis.total')), 'totalnya']],
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
                        model: kwitansi
                    }]
                }]
            }]
        }]
    })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
}

controllers.ListPengeluaran = async (req, res) => {
    const tahun = 2022
    const data = await pengeluaran.findAll({
        where: { '$sub_kegiatan.kegiatan.program.tahun$': tahun },
        include: [{
            model: sub_kegiatan,
            attributes: [],
            require: true,
            include: [{
                model: kegiatan,
                attributes: [],
                require: true,
                include: [{
                    model: program,
                    attributes: [],
                    required: true,
                }]
            }],
        }]
    })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
}

controllers.listProgram = async (req, res) => {
    // const data = await program.findAll({
    //     where: {
    //         tahun: 2022
    //     },
    //     include: [{
    //         model: kegiatan,
    //         include: [{
    //             model: sub_kegiatan
    //         }]
    //     }]})
    // .then(data => {
    //     res.send(data)
    // }).catch(err => {
    //     res.send(err)
    // })
    const data = await pengeluaran.findAll({})
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

controllers.listAkun = async (req, res) => {
    const data = await akun.findAll({
        include: [{
            model: staff
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

controllers.listKegiatan = async (req, res) => {
    const data = await kegiatan.findAll({
        include: [{
            model: sub_kegiatan,
            include: [{
                model: pengeluaran,
                // include: [{
                //     model: kwitansi
                // }],
            }]
        }],
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })

    // const data = await laporan_bulanan.findAll({
    //     attributes: [[Sequelize.fn('sum', Sequelize.col('kwitansis.total')), 'totalnya']],
    //     include: [{
    //         model: kwitansi
    //     }],
    //     group: ['id_LB']})
    //     .then(data => {
    //     res.send(data)
    // }).catch(err => {
    //     res.send(err)
    // })
}

controllers.listSubKegiatan = async (req, res) => {
    var date = new Date()
    var year = date.getFullYear

    const data = await sub_kegiatan.findAll({
        // where: {
        //     tahun: 2022
        // },
        // include: [{
        //     model: sub_kegiatan,
        //     attributes: ['id', 'rek_PK4', 'nama']
        // }]
        include:[{
            model: kegiatan,
            where: {
                tahun: 2022
            }
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

module.exports = {controllers}