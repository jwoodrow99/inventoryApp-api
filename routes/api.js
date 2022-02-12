const router = require('express').Router();

// Controllers
const AuthController = require('../controllers/AuthController');
const ItemController = require('../controllers/ItemController');
const TransactionController = require('../controllers/TransactionController');

// Middleware
const AuthMiddleware = require('../middleware/AuthMiddleware');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/newuser', AuthMiddleware(), AuthController.newUser);

// Item routes
router.get('/item', AuthMiddleware(), ItemController.index);
router.post('/item', AuthMiddleware(), ItemController.create);
router.patch('/item', AuthMiddleware(), ItemController.update);
router.put('/item', AuthMiddleware(), ItemController.update);
router.delete('/item', AuthMiddleware(), ItemController.remove);

// Transaction routes
router.get('/transaction', AuthMiddleware(), TransactionController.index);
router.post('/transaction', AuthMiddleware(), TransactionController.create);

module.exports = router;