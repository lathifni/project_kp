const  jwt = require('jsonwebtoken')
const controllers ={}

controllers.verifyToken = (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken
        if (!accessToken)
            res.json("Tidak ada token")
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const role = payload.role
        const NIP = payload.NIP
        next()
        } catch (err) {
            res.json(err)
        }
}

module.exports = {controllers}