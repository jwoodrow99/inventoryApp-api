const router = require('express').Router();

// Controllers
var IndexController = require('../controllers/IndexController');

// Routes
router.get('/', IndexController.testFcn);

module.exports = router;