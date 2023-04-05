const {program, kegiatan, notas,
    pengeluaran, staff, akun,
    sub_kegiatan} = require('../models')
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controllers ={}

controllers.tambahAkun = async (req, res) => {
    let password = req.body.NIP
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await staff.create({
            NIP     : req.body.NIP,
            nama    : req.body.nama,
            TTL     : req.body.TTL,
            alamat  : req.body.alamat,
            telp    : req.body.telp
        })
        await akun.create({
            NIP     : req.body.NIP,
            password: hashPassword,
            role    : req.body.role
        })
    } catch (err) {
        console.log(err)
        res.status(204).json({msg: 'gagal'})
    }
}

controllers.tambahProgram = async (req, res) => {
    var date = new Date()
    var year = date.getFullYear
    try {
        await program.create({
            rek_P4  : req.body.rek_P4,
            tahun   : 2022,
            nama    : req.body.nama
        })
        console.log('ok')
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        res.status(204).json({msg: 'gagal'})
    }
}

controllers.tambahKegiatan = async (req, res) => {
    var date = new Date()
    var year = date.getFullYear
    const body = req.body
    try {
        await kegiatan.create({
            rek_P4  : body.rek_P4,
            rek_PK4 : body.rek_PK4,
            tahun   : 2022,
            nama    : body.nama
        })
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        res.status(204).json({msg: 'gagal'})
    }
}

controllers.tambahSubKegiatan = async (req, res) => {
    var date = new Date()
    var year = date.getFullYear
    const body = req.body
    try {
        await sub_kegiatan.create({
            rek_PK4     : body.rek_PK4,
            rek_PKSk4   : body.rek_PKSk4,
            tahun       : 2022,
            nama        : body.nama
        })
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        console.log(err)
        res.status(204).json({msg: 'gagal'})
    }
}

controllers.tambahPengeluaran = async (req, res) => {
    var date = new Date()
    var year = date.getFullYear
    const body = req.body
    try {
        await pengeluaran.create({
            rek_PKSk4   : body.rek_PKSk4,
            rek_P5      : body.rek_P5,
            tahun       : 2022,
            nama        : body.nama,
            anggaran    : 1,
            triwulan1   : body.triwulan1,
            triwulan2   : body.triwulan2,
            triwulan3   : body.triwulan3,
            triwulan4   : body.triwulan4
        })
        res.status(200).json({msg: 'berhasil'})
    } catch (err) {
        res.status(204).json({msg: 'gagal'})
    }
}

controllers.nota = async (req, res) => {
    const body = req.body
    const date = new Date()
    const bulan = date.getMonth() + 1
    var batasTriwulan, jumlahTriwulan

    const dataTriwulan = await pengeluaran.findOne({
        where: { id: body.idP },
        attributes: ['triwulan1', 'triwulan2', 'triwulan3', 'triwulan4']
    })

    try {
        if (bulan > 0 && bulan <= 3) {
            batasTriwulan = dataTriwulan.dataValues.triwulan1
            jumlahTriwulan = await notas.findOne({
                where: { bulan: { [Sequelize.Op.or]: [1, 2, 3] } },
                include: [{
                    model: pengeluaran,
                    attributes: [],
                    include: [{
                        model: sub_kegiatan,
                        attributes: [],
                        include: [{
                            model: kegiatan,
                            attributes: [],
                            include: [{
                                model: program
                            }]
                        }]
                    }]
                }],
                where: { '$pengeluaran.sub_kegiatan.kegiatan.program.tahun$': 2023 },
                attributes: [[Sequelize.fn('sum', Sequelize.col('total')), 'totalnya']],
            })
        } else if (bulan > 3 && bulan <= 6) {
            batasTriwulan = dataTriwulan.dataValues.triwulan2
            // jumlahTriwulan = await nota.findAll({
            //     where: { bulan: { [Sequelize.Op.or]: [4, 5, 6] } }
            // })
            jumlahTriwulan = await notas.findOne({
                where: { bulan: { [Sequelize.Op.or]: [4, 5, 6] } },
                include: [{
                    model: pengeluaran,
                    attributes: [],
                    include: [{
                        model: sub_kegiatan,
                        attributes: [],
                        include: [{
                            model: kegiatan,
                            attributes: [],
                            include: [{
                                model: program
                            }]
                        }]
                    }]
                }],
                where: { '$pengeluaran.sub_kegiatan.kegiatan.program.tahun$': 2023 },
                attributes: [[Sequelize.fn('sum', Sequelize.col('total')), 'totalnya']],
            })

        } else if (bulan > 6 && bulan <= 9) {
            batasTriwulan = dataTriwulan.dataValues.triwulan3
            // jumlahTriwulan = await nota.findAll({
            //     where: { bulan: { [Sequelize.Op.or]: [7, 8, 9] } }
            // })
            jumlahTriwulan = await nota.findOne({
                where: { bulan: { [Sequelize.Op.or]: [7, 8, 9] } },
                include: [{
                    model: pengeluaran,
                    attributes: [],
                    include: [{
                        model: sub_kegiatan,
                        attributes: [],
                        include: [{
                            model: kegiatan,
                            attributes: [],
                            include: [{
                                model: program
                            }]
                        }]
                    }]
                }],
                where: { '$pengeluaran.sub_kegiatan.kegiatan.program.tahun$': 2023 },
                attributes: [[Sequelize.fn('sum', Sequelize.col('total')), 'totalnya']],
            })

        } else if (bulan > 9 && bulan <= 12) {
            batasTriwulan = dataTriwulan.dataValues.triwulan4
            // jumlahTriwulan = await nota.findAll({
            //     where: { bulan: { [Sequelize.Op.or]: [10, 11, 12] } }
            // })
            jumlahTriwulan = await notas.findOne({
                where: { bulan: { [Sequelize.Op.or]: [10, 11, 12] } },
                include: [{
                    model: pengeluaran,
                    attributes: [],
                    include: [{
                        model: sub_kegiatan,
                        attributes: [],
                        include: [{
                            model: kegiatan,
                            attributes: [],
                            include: [{
                                model: program
                            }]
                        }]
                    }]
                }],
                where: { '$pengeluaran.sub_kegiatan.kegiatan.program.tahun$': 2023 },
                attributes: [[Sequelize.fn('sum', Sequelize.col('total')), 'totalnya']],
            })

        }
        const totalnya = jumlahTriwulan.dataValues.totalnya
        const totalAkhir = parseInt(jumlahTriwulan.dataValues.totalnya) + parseInt(body.total)
        console.log(`batasnya ${batasTriwulan} total akhir adalah ${totalAkhir} dengan penjumlahan dari ${totalnya} + ${body.total}`)
        const sisa = parseInt(batasTriwulan) - parseInt(totalnya)
        if (totalAkhir > batasTriwulan) {
            console.log(sisa)
            res.status(200).json({ ket: 'gagal', msg: `Jumlah penambahan maksimum triwulan ini Rp${sisa}` })
        } else {
            console.log("Oke masih ada sisa nya")
            await notas.create({
                rek_P5: body.idP,
                tahun: 2022,
                bulan: bulan,
                total: body.total,
                nama: body.nama,
                status: 0,
                NIP: body.NIP
            })
            res.status(200).json({msg: 'berhasil'})
        }
    } catch (err) {
        res.json({ msg: "Gagal menambahkan data" })
    }
}

module.exports = {controllers}