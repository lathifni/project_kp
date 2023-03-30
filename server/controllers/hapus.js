const {kwitansi} = require('../models')
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const controllers ={}

controllers.hapusNota = async (req, res) => {
    try {
        await kwitansi.destroy({
            where: { id: req.params.id }
        })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

module.exports = {controllers}