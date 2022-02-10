const router = require('express').Router();

// Controllers
const IndexController = require('../controllers/IndexController');
const ItemController = require('../controllers/ItemController');

// Routes
router.get('/', IndexController.testFcn);

router.get('/item', ItemController.index);
router.post('/item', ItemController.create);
router.patch('/item', ItemController.update);
router.delete('/item', ItemController.remove);

module.exports = router;