const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

function auth() {
    return (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];

        try{
            const payload = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = payload.user;
            next();
        } catch(e) {
            console.log(e);
            res.status(401).json({
                message: 'unathenticated.'
            });
        }
    }
}

module.exports = auth;