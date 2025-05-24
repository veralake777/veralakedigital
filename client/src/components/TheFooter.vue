<template>
  <v-footer class="bg-secondary text-white py-16">
    <v-container>
      <v-row class="mb-16">
        <!-- Company Info -->
        <v-col cols="12" md="6" lg="4" class="mb-8 mb-lg-0">
          <div class="text-h5 font-weight-bold mb-6 font-poppins">
            Veralake<span class="text-accent">.digital</span>
          </div>
          <p class="text-grey-lighten-1 mb-6">
            Transforming businesses through innovative digital solutions that drive growth and deliver measurable results.
          </p>
          <div class="d-flex gap-4">
            <v-btn v-for="(icon, index) in socialIcons" :key="index" icon variant="text" color="grey-lighten-1" href="#">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
        
        <!-- Quick Links -->
        <v-col cols="12" sm="6" md="3" lg="2" class="mb-8 mb-lg-0">
          <h3 class="text-h6 font-weight-bold mb-6">Quick Links</h3>
          <v-list density="compact" bg-color="transparent" class="pa-0">
            <v-list-item
              v-for="(link, index) in quickLinks"
              :key="index"
              :href="link.to"
              class="pa-0 mb-3"
              link
              :ripple="false"
            >
              <v-list-item-title class="text-grey-lighten-1 hover-white">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        
        <!-- Services -->
        <v-col cols="12" sm="6" md="3" lg="3" class="mb-8 mb-lg-0">
          <h3 class="text-h6 font-weight-bold mb-6">Services</h3>
          <v-list density="compact" bg-color="transparent" class="pa-0">
            <v-list-item
              v-for="(service, index) in services"
              :key="index"
              href="#services"
              class="pa-0 mb-3"
              link
              :ripple="false"
            >
              <v-list-item-title class="text-grey-lighten-1 hover-white">
                {{ service }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        
        <!-- Contact Info -->
        <v-col cols="12" md="6" lg="3">
          <h3 class="text-h6 font-weight-bold mb-6">Contact Info</h3>
          <v-list density="compact" bg-color="transparent" class="pa-0">
            <v-list-item class="pa-0 mb-4">
              <template v-slot:prepend>
                <v-icon color="accent" class="mr-3">mdi-map-marker</v-icon>
              </template>
              <v-list-item-title class="text-grey-lighten-1">
                123 Innovation Drive, Suite 200<br>San Francisco, CA 94103
              </v-list-item-title>
            </v-list-item>
            
            <v-list-item class="pa-0 mb-4">
              <template v-slot:prepend>
                <v-icon color="accent" class="mr-3">mdi-phone</v-icon>
              </template>
              <v-list-item-title>
                <a href="tel:+14155551234" class="text-grey-lighten-1 hover-white text-decoration-none">
                  (415) 555-1234
                </a>
              </v-list-item-title>
            </v-list-item>
            
            <v-list-item class="pa-0 mb-4">
              <template v-slot:prepend>
                <v-icon color="accent" class="mr-3">mdi-email</v-icon>
              </template>
              <v-list-item-title>
                <a href="mailto:info@veralake.digital" class="text-grey-lighten-1 hover-white text-decoration-none">
                  info@veralake.digital
                </a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      
      <v-divider class="border-opacity-25 mb-8"></v-divider>
      
      <div class="d-flex flex-column flex-md-row justify-space-between align-center">
        <div class="text-grey-lighten-2 mb-4 mb-md-0">
          &copy; {{ new Date().getFullYear() }} Veralake Digital Agency. All rights reserved.
        </div>
        <div class="d-flex gap-6">
          <a href="#" class="text-grey-lighten-2 hover-white text-decoration-none">Privacy Policy</a>
          <a href="#" class="text-grey-lighten-2 hover-white text-decoration-none">Terms of Service</a>
          <a href="#" class="text-grey-lighten-2 hover-white text-decoration-none">Cookie Policy</a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const socialIcons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
]

const quickLinks = [
  { title: 'Home', to: '#home' },
  { title: 'About', to: '#about' },
  { title: 'Services', to: '#services' },
  { title: 'Portfolio', to: '#portfolio' },
  { title: 'Blog', to: '#blog' },
  { title: 'Contact', to: '#contact' }
]

const services = [
  'Web Design & Development',
  'Digital Marketing & SEO',
  'Brand Identity & Design',
  'Mobile App Development',
  'Analytics & Optimization',
  'Social Media Management'
]
</script>

<style scoped>
.bg-secondary {
  background-color: var(--v-theme-secondary) !important;
}

:deep(.v-theme--dark) .bg-secondary {
  background-color: rgba(30, 30, 45, 0.9) !important;
}

.hover-white {
  transition: color 0.3s ease;
}

.hover-white:hover {
  color: white !important;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
