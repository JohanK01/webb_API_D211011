const express = require('express');
const router = express.Router();

const app_Controller = require('../controllers/appController');

router.get('/', app_Controller.app);
router.get('/data', app_Controller.data);

module.exports = router;