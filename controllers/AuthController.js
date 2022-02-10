const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Users = require('../models/Users');

async function createUser(req, res, next) {

    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    let newUser = new Users({
        name: req.body.name,
        employee_id: req.body.employee_id,
        roles: req.body.roles,
        password: hash
    });

    newUser.save();

    res.status(200).json({
        message: 'New User created.'
    });

}

async function login(req, res, next) {

    let user = await Users.findOne({employee_id: req.body.employee_id});

    if(bcrypt.compareSync(req.body.password, user.password)){
        const userToken =  await jwt.sign(JSON.stringify({
            name: user.name,
            employee_id: user.employee_id,
            roles: user.roles
        }), String(process.env.TOKEN_SECRET));

        res.status(200).json({
            message: 'User logged in.',
            token: userToken
        });
    } else {
        res.status(401).json({
            message: 'Unauthenticated.'
        });
    }
}

module.exports = {
    login,
    createUser
}