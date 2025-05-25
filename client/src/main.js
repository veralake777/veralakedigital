import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#FF5864', // Vibrant coral/red
          secondary: '#202738', // Dark blue
          accent: '#83DECF', // Mint/teal
          background: '#F5F7FA', // Off-white
          surface: '#FFFFFF', // White
          error: '#EB5757', // Red
          info: '#64D2DE', // Cyan
          success: '#3FC380', // Green
          warning: '#FFBA49', // Amber
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#FF7A8B', // Lighter coral/red
          secondary: '#344267', // Lighter dark blue
          accent: '#9CEEE1', // Lighter mint/teal
          background: '#121929', // Very dark blue
          surface: '#202738', // Dark blue
          error: '#FF8A8A', // Lighter red
          info: '#87E5F2', // Lighter cyan
          success: '#65D89B', // Lighter green
          warning: '#FFCF75', // Lighter amber
        }
      }
    }
  }
})

// Create and mount the Vue application
createApp(App)
  .use(vuetify)
  .mount('#app')