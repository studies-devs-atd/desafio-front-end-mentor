<script>
import { ShoppingCartIcon } from '@heroicons/vue/outline'

export default {
  components: {
    ShoppingCartIcon,
  },
  computed: {
    cartQuantity() {
      return this.$store.state.items.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },
  },
}
</script>

<template>
  <header class="mb-32 border-b">
    <div class="max-w-screen-lg mx-auto py-8 flex items-center gap-16">
      <h1
        class="text-4xl font-bold tracking-tighter lowercase transform -skew-x-12"
      >
        Sneakers
      </h1>
      <ul class="mt-2 flex gap-4 text-gray-600">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div class="relative mt-2 ml-auto flex gap-4">
        <shopping-cart-icon class="w-6 h-6 text-gray-600" />
        <span
          v-if="cartQuantity"
          class="absolute top-0 right-0 text-xs w-2 h-2 bg-orange-500 rounded animate-pulse"
        >
        </span>
      </div>
    </div>
  </header>
</template>
