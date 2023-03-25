const {program, kegiatan, kwitansi,
    laporan_bulanan, pengeluaran, staff, akun,
    sub_kegiatan} = require('../models')
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controllers ={}

controllers.getSingleProgram = async (req, res) => {
    const data = await program.findOne({
        where: [{
            id: req.params.id
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

controllers.getSingleKegiatan = async (req, res) => {
    const data = await kegiatan.findOne({
        where: [{
            id: req.params.id
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })

}

controllers.getSingleSubKegiatan = async (req, res) => {
    const data = await sub_kegiatan.findOne({
        where: [{
            id: req.params.id
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

controllers.getSinglePengeluaran = async (req, res) => {
    const data = await pengeluaran.findOne({
        where: [{
            id: req.params.id
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

controllers.listKonfirmasiNota = async (req, res) => {
    const data = await sub_kegiatan.findAll({
        where: { '$pengeluarans.kwitansis.status$': 0},
        attributes: ['nama', 'rek_PKSk4'],
        include: [{
            model: pengeluaran,
            attributes: ['nama', 'rek_P5'],
            include: [{
                model: kwitansi
            }]
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

controllers.listSemuaNota = async (req, res) => {
    const data = await sub_kegiatan.findAll({
        where: { '$pengeluarans.kwitansis.status$': {
            [Sequelize.Op.or]: [0,1]} 
        },
        attributes: ['nama', 'rek_PKSk4'],
        include: [{
            model: pengeluaran,
            attributes: ['nama', 'rek_P5'],
            include: [{
                model: kwitansi
            }]
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
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

controllers.listPengeluaran = async (req, res) => {
    const id = req.params.id
    const data = await pengeluaran.findAll({
        attributes:['id', 'nama'],
        include:[{
            model: sub_kegiatan,
            where: {
                id: id
            },
            attributes:['id']
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

controllers.listsemuaProgram = async (req, res) => {
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

controllers.listSemuaPengeluaran = async (req, res) => {
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

controllers.listSemuaAkun = async (req, res) => {
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

controllers.listSemuaKegiatan = async (req, res) => {
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

module.exports = {controllers}