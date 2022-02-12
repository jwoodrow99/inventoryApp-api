const mongoose  = require('mongoose');
const Users  = require('./Users');

const TransactionSchema = new mongoose.Schema({
    total: Number,
    employee_id: Number,
    items: [{
        item_id: mongoose.ObjectId,
        name: String,
        unit_price: Number,
        quantity: Number,
    }]
});

TransactionSchema.methods.user = async function(){
    return await Users.findOne({employee_id: this.employee_id});
}

module.exports = mongoose.model('transactions', TransactionSchema);