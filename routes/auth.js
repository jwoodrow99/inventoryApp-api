const router = require('express').Router();

// Controllers
const AuthController = require('../controllers/AuthController');

// Auth Routes
router.post('/newuser', AuthController.createUser);
router.post('/login', AuthController.login);

module.exports = router;