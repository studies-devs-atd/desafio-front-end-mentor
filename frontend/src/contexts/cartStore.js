import { createStore } from 'vuex'

const cartStore = createStore({
  state: {
    items: [],
  },
  mutations: {
    addToCart(state, item) {
      state.items.push(item)
    },
    removeFromCart(state, item) {
      state.items.splice(state.items.indexOf(item), 1)
    },
  },
})

export default cartStore
