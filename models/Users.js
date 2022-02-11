const mongoose  = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    employee_id: Number,
    password: String,
    roles: [String]
});

module.exports = mongoose.model('users', UsersSchema);