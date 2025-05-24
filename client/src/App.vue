<template>
  <v-app :theme="theme">
    <the-navbar @toggle-theme="toggleTheme" :theme="theme" />
    <v-main>
      <router-view />
    </v-main>
    <the-footer />
    <calendly-modal v-model="isCalendlyModalOpen" />
    <cookie-consent v-if="showCookieConsent" @accept="acceptCookies" @decline="declineCookies" @settings="openCookieSettings" />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import CalendlyModal from './components/CalendlyModal.vue'
import CookieConsent from './components/CookieConsent.vue'
import { initGA, trackPageView } from './lib/analytics'

const theme = ref('light')
const isCalendlyModalOpen = ref(false)
const showCookieConsent = ref(false)
const route = useRoute()
const router = useRouter()

// Provide the calendly modal control to child components
provide('openCalendlyModal', () => {
  isCalendlyModalOpen.value = true
})

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

const acceptCookies = () => {
  localStorage.setItem('cookies-accepted', 'true')
  showCookieConsent.value = false
  // Initialize analytics after cookies are accepted
  initGA()
}

const declineCookies = () => {
  localStorage.setItem('cookies-accepted', 'false')
  showCookieConsent.value = false
}

const openCookieSettings = () => {
  // This would typically open a more detailed cookie settings modal
  // For simplicity, we'll just decline cookies
  declineCookies()
}

// Check for saved theme preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.value = savedTheme
  }
  
  // Check if cookies have been accepted before
  const cookiesAccepted = localStorage.getItem('cookies-accepted')
  if (!cookiesAccepted) {
    // Show cookie consent if not previously accepted/declined
    showCookieConsent.value = true
  } else if (cookiesAccepted === 'true') {
    // Initialize analytics if cookies were accepted
    initGA()
  }
  
  // Track page views when route changes
  router.afterEach((to) => {
    if (localStorage.getItem('cookies-accepted') === 'true') {
      trackPageView(to.path)
    }
  })
})
</script>

<style>
:root {
  --primary: 207 90% 54%;
  --secondary: 200 13% 26%;
  --accent: 14 100% 57%;
  --light: 210 10% 98%;
  --dark: 240 15% 15%;
  --success: 122 39% 49%;
  --error: 0 73% 58%;
}

.v-application {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}
</style>
