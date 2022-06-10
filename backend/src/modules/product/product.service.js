import fs from 'fs/promises'
import path from 'path'
import { CWD } from '../../config/globals.js'

export default class ProductService {
  async getProduct(_id) {
    const folderPath = path.join(CWD, 'public')
    const files = await fs.readdir(folderPath)

    const thumbnails = files.filter((file) => file.includes('thumbnail'))
    const full = files.filter((file) => !file.includes('thumbnail'))

    return {
      company: 'Sneaker Company',
      name: 'Fall limited edition sneakers',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto placeat quam quaerat dolor, omnis quae odit unde cumque blanditiis, perspiciatis, tenetur officiis qui quis nobis nulla hic quod!',
      price: 125,
      oldPrice: 250,
      images: {
        full: full,
        thumbnails: thumbnails,
      },
    }
  }
}
