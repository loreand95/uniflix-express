const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {

        const token = req.header('Authorization').replace('Bearer ', '')

        const {_id} = jwt.verify(token, process.env.TOKEN_SECRET)

        if(!_id){
            res.status(401).send({ error: 'Token not valid' })
            return;
        }

        req.userId = _id
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth