const router = require('express').Router();

// Middleware
const AuthMiddleware = require('../middleware/AuthMiddleware');

router.use(AuthMiddleware);

// Controllers
const ItemController = require('../controllers/ItemController');
const TransactionController = require('../controllers/transactionController');

// Item routes
router.get('/item', ItemController.index);
router.post('/item', ItemController.create);
router.patch('/item', ItemController.update);
router.put('/item', ItemController.update);
router.delete('/item', ItemController.remove);

// Transaction routes
router.get('/transaction', TransactionController.index);
router.post('/transaction', TransactionController.create);

module.exports = router;