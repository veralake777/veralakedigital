import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2A41E8',
          secondary: '#37474F',
          accent: '#FF5722',
          success: '#4CAF50',
          error: '#F44336',
          background: '#F5F7FA',
          surface: '#FFFFFF',
          'on-surface': '#37474F',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-accent': '#FFFFFF',
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#2A41E8',
          secondary: '#37474F',
          accent: '#FF5722',
          success: '#4CAF50',
          error: '#F44336',
          background: '#1E1E2D',
          surface: '#2C2C3A',
          'on-surface': '#E0E0E0',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-accent': '#FFFFFF',
        }
      }
    }
  }
})
