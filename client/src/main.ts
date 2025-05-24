import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerPlugins } from './plugins'
import './assets/css/main.css'

// Create Vue app
const app = createApp(App)

// Register plugins
registerPlugins(app)

// Use router
app.use(router)

// Mount app
app.mount('#app')
