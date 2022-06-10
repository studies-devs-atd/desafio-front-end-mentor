import { Router } from 'express'
import ProductModule from './modules/product/product.module.js'

const router = Router()

router.get('/products/:productId', ProductModule.getProduct)

export default router
