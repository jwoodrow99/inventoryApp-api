const router = require('express').Router();

// Controllers
const ItemController = require('../controllers/ItemController');

// Item routes
router.get('/item', ItemController.index);
router.post('/item', ItemController.create);
router.patch('/item', ItemController.update);
router.put('/item', ItemController.update);
router.delete('/item', ItemController.remove);



module.exports = router;