const mongoose  = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    subtotal: Number,
    total: Number,
    items: [{
        item_id: String,
        name: String,
        unit_price: Number,
        quantity: Number,
    }]
});

module.exports = mongoose.model('transactions', TransactionSchema);