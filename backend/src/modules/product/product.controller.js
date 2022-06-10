export default class ProductController {
  constructor(productService) {
    this.productService = productService
  }

  async getProduct(request, response) {
    const productId = request.params.productId
    const product = await this.productService.getProduct(productId)
    return response.status(200).json(product)
  }
}
