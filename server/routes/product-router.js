const express = require('express')

const productCtrl = require('../controllers/product-ctrl')

const router = express.Router()

router.post('/productcreate', productCtrl.createProduct)
router.put('/productupdate/:id', productCtrl.updateProduct)
router.get('/productdelete/:id', productCtrl.deleteProduct)
router.get('/productsearch/:id', productCtrl.productById)
router.get('/products', productCtrl.allProducts)



module.exports = router
