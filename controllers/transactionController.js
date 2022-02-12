const Transactions = require('../models/Transactions');
const Items = require('../models/Items');

// Read
async function index(req, res, next) {

  console.log(req.user);

  const all = await Transactions.find();

  res.status(200).json({
    message: 'This is all transactions.',
    data: all
  });
}

// Create
async function create(req, res, next) {

  let total = 0;

  // loop over each item in request
  req.body.items.forEach(async el => {

    // add to total price
    total += el.unit_price * el.quantity;

    // Finding item in items table, and reduicing quantity
    let item = await Items.findById(el.item_id);
    await item.updateOne({
      quantity: item.quantity - el.quantity
    });
  });

  // Created our new item
  const newTransaction = new Transactions({
    total: total,
    employee_id: req.user.employee_id,
    items: req.body.items
  });

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