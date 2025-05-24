<template>
  <v-app-bar app elevation="1" color="white" :class="{'bg-dark': theme === 'dark'}">
    <div class="container px-4">
      <div class="d-flex align-center justify-space-between w-100">
        <!-- Logo -->
        <router-link to="/" class="text-decoration-none">
          <div class="text-primary text-h5 font-weight-bold font-poppins">
            Veralake<span class="text-accent">.digital</span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex align-center">
          <v-btn
            v-for="item in navItems"
            :key="item.title"
            :to="item.to"
            variant="text"
            :ripple="false"
            class="mx-2 text-body-1 font-weight-medium"
            :class="{'text-primary': activeSection === item.to.substring(1)}"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <!-- CTA Buttons and Theme Switch -->
        <div class="d-none d-md-flex align-center">
          <theme-switcher :theme="theme" @toggle-theme="$emit('toggle-theme')" />
          
          <v-btn
            color="primary"
            class="ml-4 font-weight-medium text-white"
            rounded="pill"
            @click="openCalendlyModal"
          >
            Book a Call
          </v-btn>
          
          <v-btn
            color="accent"
            class="ml-2 font-weight-medium text-white"
            rounded="pill"
            href="#contact"
          >
            Contact Us
          </v-btn>
        </div>

        <!-- Mobile Menu Button -->
        <div class="d-flex d-md-none align-center">
          <theme-switcher :theme="theme" @toggle-theme="$emit('toggle-theme')" />
          
          <v-btn
            icon
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="ml-2"
          >
            <v-icon>{{ mobileMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="mobileMenuOpen"
    temporary
    right
    width="280"
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :to="item.to"
        link
        @click="mobileMenuOpen = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      
      <v-divider class="my-2"></v-divider>
      
      <v-list-item>
        <v-btn
          color="primary"
          block
          class="font-weight-medium text-white mb-2"
          rounded="pill"
          @click="openCalendlyModal(); mobileMenuOpen = false"
        >
          Book a Call
        </v-btn>
        
        <v-btn
          color="accent"
          block
          class="font-weight-medium text-white"
          rounded="pill"
          href="#contact"
          @click="mobileMenuOpen = false"
        >
          Contact Us
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted } from 'vue'
import ThemeSwitcher from './ThemeSwitcher.vue'

const props = defineProps({
  theme: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['toggle-theme'])

const mobileMenuOpen = ref(false)
const activeSection = ref('home')
const openCalendlyModal = inject('openCalendlyModal') as () => void

const navItems = [
  { title: 'Home', to: '#home' },
  { title: 'About', to: '#about' },
  { title: 'Services', to: '#services' },
  { title: 'Portfolio', to: '#portfolio' },
  { title: 'Testimonials', to: '#testimonials' },
  { title: 'Blog', to: '#blog' },
  { title: 'FAQ', to: '#faq' }
]

// Function to determine active section based on scroll position
const handleScroll = () => {
  const sections = navItems.map(item => item.to.substring(1))
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (!element) continue
    
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // If the section is in view
    if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
      activeSection.value = section
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.bg-dark {
  background-color: var(--v-theme-background) !important;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
