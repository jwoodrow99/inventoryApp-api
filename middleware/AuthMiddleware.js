const jwt = require('jsonwebtoken');

const Users = require('../models/Users');

async function checkAuth(req, res, next) {

    try {
        const token = req.headers['authorization'].split(' ')[1];
        const tokenPayload = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = await Users.findOne({employee_id: tokenPayload.user.employee_id});
        next();
    } catch(e) {
        res.status(401).json({
            message: 'Invalid Token.'
        });
    }

}

module.exports = checkAuth;