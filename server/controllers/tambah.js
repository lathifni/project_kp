const {program, kegiatan, kwitansi,
    laporan_bulanan, pengeluaran, staff, akun,
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
    const bulan = date.getMonth()+1
    console.log("ini bulan ke-"+bulan)
    var batasTriwulan, jumlahTriwulan

    try {
        let password = "admin"
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const dataa = await akun.findOne({
        })
        const cocok = bcrypt.compare(dataa.password, hashPassword)
        if (cocok){
            console.log('wah sama bro')
        }
        console.log(dataa.password)
    } catch (err) {
        console.log(err)
    }

    const dataTriwulan = await pengeluaran.findOne({
        where : { id : body.idP},
        attributes: ['triwulan1', 'triwulan2', 'triwulan3', 'triwulan4']
    })
    console.log(dataTriwulan.dataValues.triwulan1)

    try {
    if (bulan > 0 && bulan <= 3){
        batasTriwulan =  dataTriwulan.dataValues.triwulan1
        jumlahTriwulan = await kwitansi.findOne({
            where: {bulan: { [Sequelize.Op.or]: [1, 2, 3]}},
            // attributes: [[Sequelize.fn('sum', Sequelize.col('total')), 'totalnya']],
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
            where: { '$pengeluaran.sub_kegiatan.kegiatan.program.tahun$': 2022 },
            attributes: [[Sequelize.fn('sum', Sequelize.col('total')), 'totalnya']],
        })
        // console.log(jumlahTriwulan.dataValues.totalnya)
    }else if (bulan > 3 && bulan <= 6){
        batasTriwulan =  dataTriwulan.dataValues.triwulan2
        jumlahTriwulan = await kwitansi.findAll({
            where: {bulan: { [Sequelize.Op.or]: [4, 5, 6]}}
        })
        
    }else if (bulan > 6 && bulan <= 9){
        batasTriwulan =  dataTriwulan.dataValues.triwulan3
        jumlahTriwulan = await kwitansi.findAll({
            where: {bulan: { [Sequelize.Op.or]: [7, 8, 9]}}
        })
    }else if (bulan > 9 && bulan <= 12){
        batasTriwulan =  dataTriwulan.dataValues.triwulan4
        jumlahTriwulan = await kwitansi.findAll({
            where: {bulan: { [Sequelize.Op.or]: [10, 11, 12]}}
        })
    }
    const a = jumlahTriwulan.dataValues.totalnya 
    console.log(typeof body.total)
    const totalAkhir = parseInt(jumlahTriwulan.dataValues.totalnya) + parseInt(body.total)
    console.log(`batasnya ${batasTriwulan} total akhir adalah ${totalAkhir} dengan penjumlahan dari ${jumlahTriwulan.dataValues.totalnya} + ${body.total}`)
    if (totalAkhir > batasTriwulan){
        console.log("gabisa nih")
        // res.json({msg: 'Gagal menambahkan data karena inputan melewati limit triwulan'})
    } else {
        console.log("Oke masih ada sisa nya")
        await kwitansi.create({
            rek_P5  : body.idP,
            tahun   : 2022,
            bulan   : 1,
            total   : body.total,
            nama    : body.nama,
            status  : 0,
            NIP     : '0123456789'
        })
        res.status(200)
    }

        // await kwitansi.create({
        //     rek_P5  : body.idP,
        //     tahun   : 2022,
        //     bulan   : 1,
        //     total   : body.total,
        //     nama    : body.nama,
        //     status  : 0,
        //     NIP     : '0123456789'
        // })
        // await kwitansi.create({
        //     rek_P4: "4.01.03.",
        //     tahun: 2022,
        //     nama: "PROGRAM LAINNYAa"
        // })
        // res.status(200)
    } catch(err) {
        res.json({msg: "Gagal menambahkan data"})
    }
}

module.exports = {controllers}