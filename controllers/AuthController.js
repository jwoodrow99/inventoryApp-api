const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Users = require('../models/Users');

// Login
async function login(req, res, next) {
    const user = await Users.findOne({employee_id: req.body.employee_id});
    const verify = bcrypt.compareSync(req.body.password, user.password);

    if(verify){
        const token = jwt.sign({user: user}, process.env.TOKEN_SECRET);

        res.status(200).json({
            message: 'You are verified.',
            token: token
        });
    } else {
        res.status(401).json({
            message: 'Unauthenticated.'
        });
    }
}

// New User
async function newUser(req, res, next) {
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    // Created new user
    const newUser = new Users({
        name: req.body.name,
        employee_id: req.body.employee_id,
        password: hash,
        roles: []
    });

    // Saving the new user to DB
    await newUser.save();

    res.status(200).json({
        message: 'Item was added.'
    });
}

module.exports = {
  login,
  newUser,
}