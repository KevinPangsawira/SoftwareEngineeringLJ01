const express = require('express');
const router = express.Router();
const priceController = require('../controller/priceController');

router.get('/', priceController.getPrices);
router.post('/', priceController.addPrice);

module.exports = router;