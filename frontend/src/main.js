import { createApp } from 'vue'

import cartStore from '@/contexts/cartStore'
import App from '@/App.vue'

import '@/styles/globals.css'

createApp(App).use(cartStore).mount('#app')
