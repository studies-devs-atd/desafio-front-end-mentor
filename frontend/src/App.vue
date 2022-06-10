<script>
import { ShoppingCartIcon } from '@heroicons/vue/outline'

import { clone } from '@/utils/object'
import { getProduct } from '@/services/api'
import PageHeader from '@/components/PageHeader.vue'

const MAX_QUANTITY = 9

export default {
  components: {
    ShoppingCartIcon,
    PageHeader,
  },
  data: () => ({
    product: null,
    quantity: 1,
    activeImage: 0,
  }),
  methods: {
    increaseQuantity() {
      if (this.quantity < MAX_QUANTITY) {
        this.quantity++
      }
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    setActiveImage(index) {
      this.activeImage = index
    },
    addToCart() {
      this.$store.commit('addToCart', {
        product: clone(this.product),
        quantity: this.quantity,
      })
    },
  },
  async created() {
    const product = await getProduct(10)
    this.product = product
  },
}
</script>

<template>
  <page-header />
  <main class="max-w-screen-lg mx-auto" v-if="product">
    <div class="flex gap-16">
      <div class="w-[64rem]">
        <img
          :src="`http://localhost:3333/${product.images.full[activeImage]}`"
          alt="Sneakers"
          class="mb-8 w-[32rem] object-cover rounded-lg"
        />
        <div class="mx-auto flex justify-between">
          <img
            v-for="(image, index) in product.images.thumbnails"
            class="w-20 h-20 rounded-lg cursor-pointer transition duration-300 ease-in-out"
            @click="setActiveImage(index)"
            :class="{
              'opacity-100': index === activeImage,
              'opacity-50': index !== activeImage,
              'border-orange-400': index === activeImage,
              'border-2': index === activeImage,
            }"
            :src="`http://localhost:3333/${image}`"
            :alt="product.name"
          />
        </div>
      </div>
      <div>
        <p class="mb-4 text-orange-500 tracking-wider uppercase font-semibold">
          {{ product.company }}
        </p>
        <h1 class="mb-8 text-6xl font-bold tracking-tighter">
          {{ product.name }}
        </h1>
        <p class="mb-8 text-gray-600">
          {{ product.description }}
        </p>
        <div class="mb-4 flex gap-8 items-start">
          <h2 class="text-3xl font-bold tracking-tighter">
            ${{ product.price.toFixed(2) }}
          </h2>
          <p
            class="py-1 px-2 bg-orange-100 text-orange-500 font-semibold rounded"
          >
            50%
          </p>
        </div>
        <p class="mb-4 line-through text-gray-600">
          ${{ product.oldPrice.toFixed(2) }}
        </p>
        <div class="flex items-center gap-4">
          <div class="py-1 px-2 flex gap-6 bg-gray-100 rounded text-lg">
            <button
              class="text-lg text-orange-400 font-bold"
              @click="decreaseQuantity"
            >
              -
            </button>
            <p>{{ quantity }}</p>
            <button
              class="text-lg text-orange-400 font-bold"
              @click="increaseQuantity"
            >
              +
            </button>
          </div>
          <button
            class="flex items-center justify-center gap-2 flex-1 text-white bg-orange-500 px-16 py-3 transition ease-in-out hover:bg-orange-300 hover:shadow-orange-100 hover:shadow-xl rounded"
            @click="addToCart"
          >
            Add to cart
            <shopping-cart-icon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </main>
  <main class="mx-auto" v-else>
    <p>Loading...</p>
  </main>
</template>
