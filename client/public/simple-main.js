// This is a simplified version of the main.js file focused on the mobile menu
const { createApp } = Vue;
const { createVuetify } = Vuetify;

// Create vuetify instance
const vuetify = createVuetify();

// Define routes and sections
const menuItems = [
  { title: 'Home', url: '#home' },
  { title: 'Services', url: '#services' },
  { title: 'Portfolio', url: '#portfolio' },
  { title: 'Testimonials', url: '#testimonials' },
  { title: 'Blog', url: '#blog' },
  { title: 'Contact', url: '#contact' }
];

// Create Vue app
const app = createApp({
  data() {
    return {
      drawer: false,
      theme: 'light',
      menuItems: menuItems,
      showCalendly: false,
      calendlyOption: null
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.drawer = false;
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', this.theme === 'dark');
      localStorage.setItem('theme', this.theme);
    },
    openCalendlyModal() {
      this.showCalendly = true;
    },
    closeCalendlyModal() {
      this.showCalendly = false;
    },
    trackEvent(action, category, label) {
      if (window.gtag) {
        window.gtag('event', action, {
          'event_category': category,
          'event_label': label
        });
      }
    },
    initGA() {
      if (!window.gtag) return;
      
      fetch('/api/ga-id')
        .then(response => response.json())
        .then(data => {
          if (data.measurementId) {
            window.gtag('config', data.measurementId);
          }
        })
        .catch(error => console.error('Error fetching GA ID:', error));
    }
  },
  mounted() {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.theme = savedTheme;
    document.documentElement.classList.toggle('dark', this.theme === 'dark');
    
    // Initialize Google Analytics
    this.initGA();
  },
  template: `
    <v-app :theme="theme">
      <!-- App Bar with Navigation -->
      <v-app-bar color="white" elevation="1" class="border-bottom" :class="theme === 'light' ? 'border-light' : 'border-dark'">
        <v-container class="d-flex align-center">
          <!-- Logo -->
          <div class="d-flex align-center">
            <v-avatar color="primary" size="36" class="mr-2">
              <span class="text-white font-weight-bold">V</span>
            </v-avatar>
            <div>
              <span class="text-primary font-weight-bold text-h6 text-lowercase">veralake</span>
              <span class="font-weight-bold text-lowercase">.digital</span>
            </div>
          </div>
          
          <v-spacer></v-spacer>
          
          <!-- Desktop Navigation -->
          <div class="d-none d-md-flex">
            <v-btn
              v-for="item in menuItems"
              :key="item.title"
              variant="text"
              class="mx-1"
              @click="scrollToSection(item.url.substring(1))"
            >
              {{ item.title }}
            </v-btn>
            
            <v-btn
              color="primary"
              variant="flat"
              class="ml-4 rounded-pill"
              @click="openCalendlyModal"
            >
              <v-icon start>mdi-calendar-clock</v-icon>
              Book a Call
            </v-btn>
            
            <v-btn
              icon
              variant="text"
              class="ml-2"
              @click="toggleTheme"
            >
              <v-icon v-if="theme === 'light'">mdi-weather-night</v-icon>
              <v-icon v-else>mdi-weather-sunny</v-icon>
            </v-btn>
          </div>
          
          <!-- Mobile Navigation Toggle -->
          <div class="d-flex d-md-none align-center">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </div>
        </v-container>
      </v-app-bar>
      
      <!-- Mobile Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-h6">
              <v-avatar color="primary" size="36" class="mr-2">
                <span class="text-white font-weight-bold">V</span>
              </v-avatar>
              veralake.digital
            </v-list-item-title>
          </v-list-item>
          
          <v-divider></v-divider>
          
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :title="item.title"
            link
            @click="scrollToSection(item.url.substring(1))"
          ></v-list-item>
          
          <v-divider></v-divider>
          
          <v-list-item>
            <v-btn block color="primary" class="mb-2" @click="openCalendlyModal">
              <v-icon start>mdi-calendar-clock</v-icon>
              Book a Call
            </v-btn>
          </v-list-item>
          
          <v-list-item>
            <v-btn block color="success" href="tel:+14706293981">
              <v-icon start>mdi-phone</v-icon>
              Call Now
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <v-main>
        <v-container>
          <h1 class="text-h4 my-4">Mobile Menu Test</h1>
          <p>Click the hamburger menu icon in the top right to open the mobile menu.</p>
        </v-container>
      </v-main>
    </v-app>
  `
});

// Use Vuetify
app.use(vuetify);

// Mount app
app.mount('#app');