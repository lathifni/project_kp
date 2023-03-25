const {program, kegiatan, kwitansi,
    laporan_bulanan, pengeluaran, staff, akun,
    sub_kegiatan} = require('../models')
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const controllers ={}

controllers.login = async (req, res) => {
    try {
        const cekAkun = await akun.findOne({
            where : { NIP: req.body.NIP},
            include: [{
                model: staff
            }]
        })
        if (!cekAkun) return res.status(400).json({msg: "Gagal Login1"})
        // let password = "user"
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(password, salt);
        // await akun.update({
        //     password: hashPassword
        // },{ 
        //     where: { NIP : req.body.NIP}
        // })

        const cocok = bcrypt.compareSync(req.body.password, cekAkun.password)
        if (!cocok) return res.status(400).json({msg: "Gagal Login2"})

        const nama = cekAkun.staff.nama
        const NIP = cekAkun.NIP
        const role = cekAkun.role
        const accessToken = jwt.sign({nama, NIP, role}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10000s'})
        
        res.cookie('accessToken', accessToken, {
            httpOnly    : true,
            maxAge      : 24 * 60 * 60 * 1000
        })
        res.status(200).json({
            token: accessToken,
            role: role,
            nama: nama,
            NIP: NIP
        })
    } catch (err) {
        res.status(404).json({msg: 'Gagal Login3'})
        console.log(err)
    }
}

controllers.logout = async (req, res) => {
    //
}

controllers.changePassword = async (req, res) => {
    try {
        // if (!sessionStorage.getItem('NIP')) return res.json({msg: 'Mohon Login terlebih dahulu'})
        // const data = await akun.findOne({
        //     where: { NIP: sessionStorage.getItem('NIP')}
        // })

        // const cocok = bcrypt.compareSync(req.body.password, data.password)
        // if (!cocok) return res.status(400).json({msg: "Password lama salah"})

        // if (req.body.passBaru !== req.body.passBaruConf) return res.status(400).json({msg: "Password baru tidak sama"})

        // let password = req.body.passBaru
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(password, salt);
        // await akun.update({
        //     password: hashPassword
        // }, {
        //     where : { NIP: sessionStorage.getItem('NIP') }
        // })
        //
        const data = await akun.findOne({
            where : { NIP: req.body.NIP}
        })
        console.log('1')
        if (req.body.passBaru != req.body.konfirmasiPassBaru) return res.status(400).json({msg: "Password baru tidak sama"})
        console.log('2')
        const cocok = bcrypt.compareSync(req.body.passLama, data.password)
        console.log('3')
        if (!cocok) return res.status(400).json({msg: "Password lama salah"})
        console.log('4')
        let password = req.body.passBaru
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        console.log('5')
        await akun.update({
            password: hashPassword
        },{ 
            where: { NIP : req.body.NIP}
        })
        console.log('6')
        res.status(200).json({msg: 'ok'})
    } catch (err) {
        res.json({msg: 'gagal'})
    }
}

controllers.reset = async (req, res) => {
    let password = req.body.NIP
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    await akun.update({
        password: hashPassword
    }, {
        where : { NIP: req.body.NIP }
    })
    res.status(200)
}

module.exports = {controllers}