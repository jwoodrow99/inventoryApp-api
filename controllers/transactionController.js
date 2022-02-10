const Transactions = require('../models/Transactions');
const Items = require('../models/Items');

// Read
async function index(req, res, next) {

  const all = await Transactions.find();

  res.status(200).json({
    message: 'This is all transactions.',
    data: all
  });
}

// Create
async function create(req, res, next) {

  req.body.items.forEach(async el => {
    let item = await Items.findById(el.item_id);
    await item.updateOne({
      quantity: item.quantity - el.quantity
    });
  });

  // Created our new item
  const newTransaction = new Transactions(req.body);

  // Saving the new item to DB
  await newTransaction.save();

  res.status(200).json({
    message: 'Item was added.'
  });
}

module.exports = {
  index,
  create
}