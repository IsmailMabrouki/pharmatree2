const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products.controllers');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

module.exports = router;