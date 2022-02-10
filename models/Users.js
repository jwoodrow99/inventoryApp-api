const mongoose  = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    employee_id: { type : Number , unique : true, required : true },
    roles: [String],
    password: String
});

module.exports = mongoose.model('users', UsersSchema);