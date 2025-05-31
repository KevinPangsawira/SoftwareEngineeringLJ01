const express = require('express');
const router = express.Router();
const resepController = require('../controller/resepController');

router.get('/', resepController.getResepList);
router.get('/:id', resepController.getDetailResep);
router.post('/filter/bahan', resepController.filterbyBahan);
router.get('/filter/harga/:key', resepController.filterbyHarga);


module.exports = router;