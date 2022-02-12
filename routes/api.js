const router = require('express').Router();

// Controllers
const AuthController = require('../controllers/AuthController');
const ItemController = require('../controllers/ItemController');
const TransactionController = require('../controllers/TransactionController');

// Middleware
const AuthMiddleware = require('../middleware/AuthMiddleware');
const RoleMiddleware = require('../middleware/RoleMiddleware');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/newuser', AuthMiddleware(), RoleMiddleware(['manager']), AuthController.newUser);

// Item routes
router.get('/item', AuthMiddleware(), RoleMiddleware(['manager', 'stock']), ItemController.index);
router.post('/item', AuthMiddleware(), RoleMiddleware(['manager', 'stock']), ItemController.create);
router.patch('/item', AuthMiddleware(), RoleMiddleware(['manager', 'stock']), ItemController.update);
router.put('/item', AuthMiddleware(), RoleMiddleware(['manager', 'stock']), ItemController.update);
router.delete('/item', AuthMiddleware(), RoleMiddleware(['manager', 'stock']), ItemController.remove);

// Transaction routes
router.get('/transaction', AuthMiddleware(), RoleMiddleware(['manager']), TransactionController.index);
router.post('/transaction', AuthMiddleware(), RoleMiddleware(['manager', 'cash']), TransactionController.create);

module.exports = router;