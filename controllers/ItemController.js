const Items = require('../models/Items');

// Read
async function index(req, res, next) {

  const allItems = await Items.find();

  res.status(200).json({
    message: 'This is all of the items',
    data: allItems
  });
}

// Create
async function create(req, res, next) {

  // Created our new item
  const newItem = new Items({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity
  });

  // Saving the new item to DB
  await newItem.save();

  res.status(200).json({
    message: 'Item was added.'
  });
}

// Update
async function update(req, res, next) {

  let item = await Items.findById(req.query.id);
  let afterUpdate = await item.updateOne(req.body);

  res.status(200).json({
    message: 'Item was updated.'
  });
}

// Delete
async function remove(req, res, next) {

  let item = await Items.findByIdAndDelete(req.query.id);

  res.status(200).json({
    message: 'Item was deleted.'
  });
}

module.exports = {
  index,
  create,
  update,
  remove
}