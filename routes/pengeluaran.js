const express = require('express');
const router = express.Router();
const pengeluaranController = require('../controller/pengeluaranController');

router.post('/', pengeluaranController.addToCart)
router.get('/:userId', pengeluaranController.getCart)
router.delete('/remove/:userId/:bahanId', pengeluaranController.removeItem)
router.delete('/clearcart/:userId', pengeluaranController.clearCart)

module.exports = router;