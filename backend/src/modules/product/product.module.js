import ProductController from './product.controller.js'
import ProductService from './product.service.js'
import makeModule from '../../lib/module.js'

const ProductModule = makeModule({
  controller: ProductController,
  services: [new ProductService()],
})

export default ProductModule
