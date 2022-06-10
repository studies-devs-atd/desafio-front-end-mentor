import ProductController from '../src/modules/product/product.controller.js'

describe('ProductController', () => {
  describe('ProductController.getProduct()', () => {
    const productController = new ProductController({
      getProduct: () => Promise.resolve({}),
    })

    it('should call the .json() method with an empty object', (done) => {
      const response = {
        json: (data) => {
          expect(data).toEqual({})
          done()
        },
        status: () => {
          return response
        },
      }

      productController.getProduct({ params: { productId: 1 } }, response)
    })

    it('should call the .status() method with 200', (done) => {
      const response = {
        json() {
          return response
        },
        status: (status) => {
          expect(status).toEqual(200)
          done()
          return response
        },
      }

      productController.getProduct({ params: { productId: 1 } }, response)
    })
  })
})
