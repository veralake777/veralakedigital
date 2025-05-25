<template>
  <v-app :theme="theme">
    <!-- Header -->
    <AppHeader 
      :theme="theme" 
      :menu-items="menuItems"
      @toggle-theme="toggleTheme"
      @toggle-drawer="drawer = !drawer"
      @navigate="scrollToSection"
      @open-calendly="openCalendlyModal()"
    />
    
    <!-- Mobile Navigation Drawer -->
    <AppNavDrawer
      v-model:drawer="drawer"
      :menu-items="menuItems"
      @navigate="scrollToSection"
      @open-calendly="openCalendlyModal()"
    />
    
    <!-- Main Content -->
    <v-main>
      <!-- Hero Section -->
      <HeroSection
        @navigate="scrollToSection"
        @open-calendly="openCalendlyModal()"
      />
      
      <!-- Services Section -->
      <ServicesSection
        :services="services"
        @open-calendly="openCalendlyModal()"
      />
      
      <!-- Portfolio Section -->
      <PortfolioSection
        :projects="projects"
      />
      
      <!-- Testimonials Section -->
      <TestimonialsSection
        :testimonials="testimonials"
        @open-calendly="openCalendlyModal()"
      />
      
      <!-- Blog Section -->
      <BlogSection
        :blog-posts="blogPosts"
      />
      
      <!-- FAQ Section -->
      <FaqSection
        :faq-items="faqItems"
        @open-calendly="openCalendlyModal()"
      />
      
      <!-- Contact Section -->
      <ContactSection
        :services="services"
        @form-submitted="showNotification"
        @track-event="trackEvent"
      />
      
      <!-- Footer -->
      <footer class="bg-secondary py-8">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="mb-6 mb-md-0">
              <div class="d-flex align-center mb-4">
                <v-avatar color="primary" size="36" class="mr-2">
                  <span class="text-white font-weight-bold">V</span>
                </v-avatar>
                <span class="text-h6 text-white font-weight-bold">
                  <span class="text-primary">veralake</span>.digital
                </span>
              </div>
              <p class="text-white text-opacity-70 mb-4">
                Digital solutions for growing businesses. We help transform your digital presence with innovative strategies and exceptional execution.
              </p>
              <div class="d-flex">
                <v-btn icon variant="text" color="white" class="mr-2">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon variant="text" color="white" class="mr-2">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon variant="text" color="white" class="mr-2">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon variant="text" color="white">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </div>
            </v-col>
            
            <v-col cols="6" md="2">
              <h3 class="text-white font-weight-bold mb-4 text-subtitle-1">Company</h3>
              <v-list class="bg-transparent pa-0">
                <v-list-item
                  v-for="(item, i) in ['About Us', 'Services', 'Portfolio', 'Blog']"
                  :key="i"
                  :title="item"
                  density="compact"
                  class="px-0 text-white text-opacity-70"
                ></v-list-item>
              </v-list>
            </v-col>
            
            <v-col cols="6" md="2">
              <h3 class="text-white font-weight-bold mb-4 text-subtitle-1">Resources</h3>
              <v-list class="bg-transparent pa-0">
                <v-list-item
                  v-for="(item, i) in ['Support', 'Privacy Policy', 'Terms of Service', 'FAQ']"
                  :key="i"
                  :title="item"
                  density="compact"
                  class="px-0 text-white text-opacity-70"
                ></v-list-item>
              </v-list>
            </v-col>
            
            <v-col cols="12" md="4">
              <h3 class="text-white font-weight-bold mb-4 text-subtitle-1">Contact</h3>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-2">mdi-phone</v-icon>
                <a href="tel:+14706293981" class="text-white text-decoration-none">
                  (470) 629-3981
                </a>
              </div>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-2">mdi-email</v-icon>
                <a href="mailto:contact@veralake.digital" class="text-white text-decoration-none">
                  contact@veralake.digital
                </a>
              </div>
              <div class="d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
                <span class="text-white text-opacity-70">Atlanta, GA</span>
              </div>
            </v-col>
          </v-row>
          
          <v-divider class="my-6 bg-white bg-opacity-20"></v-divider>
          
          <div class="text-center text-white text-opacity-70">
            <p>&copy; {{ new Date().getFullYear() }} Veralake Digital. All rights reserved.</p>
          </div>
        </v-container>
      </footer>
    </v-main>
    
    <!-- Calendly Modal -->
    <v-dialog v-model="isCalendlyModalOpen" max-width="600">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span>Schedule a Consultation</span>
          <v-btn icon @click="closeCalendlyModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        
        <v-card-text>
          <p class="mb-4">Choose the type of consultation that best fits your needs:</p>
          
          <v-row>
            <v-col v-for="option in bookingOptions" :key="option.id" cols="12" sm="6" class="mb-4">
              <v-card 
                :color="selectedBookingOption?.id === option.id ? 'primary' : undefined" 
                :variant="selectedBookingOption?.id === option.id ? 'flat' : 'outlined'"
                :class="{ 'text-white': selectedBookingOption?.id === option.id }"
                @click="selectBookingOption(option)"
                height="100%"
              >
                <v-card-item :class="{'bg-secondary text-white': selectedBookingOption?.id === option.id}">
                  <template v-slot:prepend>
                    <v-avatar :color="selectedBookingOption?.id === option.id ? 'white' : 'secondary'" :class="{'text-secondary': selectedBookingOption?.id === option.id, 'text-white': selectedBookingOption?.id !== option.id}">
                      <v-icon>mdi-calendar-clock</v-icon>
                    </v-avatar>
                  </template>
                  <v-card-title>{{ option.name }}</v-card-title>
                  <v-card-subtitle :class="{'text-white': selectedBookingOption?.id === option.id}">
                    {{ option.duration }} • One-on-One
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text class="pt-4">
                  <p class="text-body-2 mb-4" :class="{'text-white': selectedBookingOption?.id === option.id}">
                    {{ option.description }}
                  </p>
                  <v-btn 
                    block 
                    :color="selectedBookingOption?.id === option.id ? 'white' : 'secondary'" 
                    :class="{'text-secondary': selectedBookingOption?.id === option.id}"
                    @click.stop="goToCalendly(option)"
                    variant="flat"
                  >
                    <v-icon start>mdi-calendar</v-icon>
                    Schedule Now
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          
          <!-- Direct Calendly Link -->
          <div class="text-center mt-6 pt-2" style="border-top: 1px solid rgba(0, 0, 0, 0.1);">
            <p class="text-body-2 mb-2">Prefer to book directly on Calendly?</p>
            <v-btn
              variant="outlined"
              color="primary"
              size="small"
              href="https://calendly.com/veralake-digital"
              target="_blank"
              rel="noopener noreferrer"
              @click="trackEvent('open_calendly_external', 'booking', 'external_link')"
            >
              <v-icon start size="small">mdi-open-in-new</v-icon>
              Open Calendly
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    
    <!-- Cookie Consent Banner -->
    <v-snackbar
      v-model="showCookieConsent"
      :timeout="-1"
      location="bottom"
      class="bg-secondary"
    >
      <div class="d-flex flex-column flex-sm-row align-sm-center">
        <div class="mr-4 mb-2 mb-sm-0 text-white">
          We use cookies to enhance your experience and analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies.
        </div>
        <div class="d-flex flex-nowrap">
          <v-btn color="primary" variant="flat" class="mr-2" @click="acceptCookies">
            Accept
          </v-btn>
          <v-btn color="white" variant="outlined" @click="declineCookies">
            Decline
          </v-btn>
        </div>
      </div>
    </v-snackbar>
    
    <!-- Notification Snackbar -->
    <v-snackbar
      v-model="notification.show"
      :color="notification.color"
      :timeout="5000"
    >
      {{ notification.message }}
      
      <template v-slot:actions>
        <v-btn
          variant="text"
          icon="mdi-close"
          @click="notification.show = false"
        ></v-btn>
      </template>
    </v-snackbar>
    
    <!-- Back to Top Button -->
    <v-btn
      icon
      color="primary"
      size="large"
      style="position: fixed; bottom: 20px; right: 20px; z-index: 99;"
      @click="scrollToSection('home')"
      elevation="3"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppNavDrawer from '@/components/layout/AppNavDrawer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNavDrawer,
    HeroSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    BlogSection,
    FaqSection,
    ContactSection
  },
  data() {
    return {
      theme: 'light',
      drawer: false,
      showCookieConsent: false,
      isCalendlyModalOpen: false,
      isCalendlyLoaded: false,
      selectedBookingOption: null,
      notification: {
        show: false,
        color: 'success',
        message: ''
      },
      menuItems: [
        { title: "Home", url: "#home" },
        { title: "Services", url: "#services" },
        { title: "Portfolio", url: "#portfolio" },
        { title: "Testimonials", url: "#testimonials" },
        { title: "Blog", url: "#blog" },
        { title: "Contact", url: "#contact" },
      ],
      services: [
        {
          icon: "mdi-web",
          color: "primary",
          title: "Web Development",
          description:
            "Custom websites and web applications designed to engage users and drive conversions.",
          features: [
            "Responsive Design",
            "E-commerce Solutions",
            "CMS Integration",
            "Performance Optimization",
          ],
        },
        {
          icon: "mdi-cellphone",
          color: "success",
          title: "Mobile App Development",
          description:
            "Native and cross-platform mobile applications that deliver exceptional user experiences.",
          features: [
            "iOS & Android Apps",
            "Cross-platform Solutions",
            "UI/UX Design",
            "App Store Optimization",
          ],
        },
        {
          icon: "mdi-trending-up",
          color: "accent",
          title: "Digital Marketing",
          description:
            "Strategic marketing campaigns that increase visibility and drive targeted traffic.",
          features: [
            "SEO & Content Marketing",
            "Social Media Management",
            "PPC Advertising",
            "Email Marketing",
          ],
        },
        {
          icon: "mdi-palette",
          color: "info",
          title: "Brand Identity",
          description:
            "Comprehensive branding solutions that communicate your unique value proposition.",
          features: [
            "Logo Design",
            "Brand Guidelines",
            "Visual Identity",
            "Brand Messaging",
          ],
        },
        {
          icon: "mdi-chart-line",
          color: "warning",
          title: "Analytics & Insights",
          description:
            "Data-driven insights that help you understand your customers and optimize your digital presence.",
          features: [
            "Performance Tracking",
            "User Behavior Analysis",
            "Conversion Optimization",
            "Custom Reporting",
          ],
        },
        {
          icon: "mdi-robot",
          color: "error",
          title: "Automation Services",
          description:
            "Custom automation solutions that streamline workflows and increase operational efficiency.",
          features: [
            "Business Process Automation",
            "Marketing & Sales Automation",
            "Custom Workflow Development",
            "Integration with Existing Systems",
          ],
        },
      ],
      projects: [
        {
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          category: "Web Development",
          title: "E-commerce Platform",
          description:
            "A fully responsive e-commerce platform with integrated payment systems and inventory management.",
        },
        {
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
          category: "Mobile App",
          title: "Health & Fitness App",
          description:
            "A feature-rich mobile application for tracking health metrics and workout routines.",
        },
        {
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
          category: "Web Development",
          title: "Financial Dashboard",
          description:
            "An interactive dashboard providing real-time financial insights and analytics.",
        },
        {
          image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
          category: "Brand Identity",
          title: "Restaurant Rebranding",
          description:
            "Complete brand identity redesign for a chain of upscale restaurants.",
        },
        {
          image: "https://images.unsplash.com/photo-1560472355-536de3962603",
          category: "Digital Marketing",
          title: "Product Launch Campaign",
          description:
            "Multi-channel marketing campaign for a new tech product launch.",
        },
        {
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
          category: "Web Development",
          title: "Educational Platform",
          description:
            "Interactive learning platform with courses, quizzes, and progress tracking.",
        },
      ],
      testimonials: [
        {
          quote:
            "Working with Veralake Digital transformed our online presence completely. Their strategic approach and attention to detail exceeded our expectations.",
          name: "Sarah Johnson",
          position: "CEO, InnovateTech",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          quote:
            "The Veralake team delivered our mobile app on time and on budget. Their expertise in UX design made a significant difference in user adoption.",
          name: "Michael Chen",
          position: "Product Manager, NexGen",
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          quote:
            "Our e-commerce sales increased by 87% after Veralake redesigned our website and implemented their digital marketing strategy.",
          name: "Emma Davis",
          position: "Marketing Director, StyleHouse",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
          quote:
            "The team at Veralake Digital has been instrumental in our digital transformation journey. Their technical expertise is matched by their business acumen.",
          name: "James Wilson",
          position: "CTO, Elevate Solutions",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      ],
      blogPosts: [
        {
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
          category: "Digital Marketing",
          date: "May 15, 2023",
          readTime: "5 min read",
          title: "10 SEO Strategies That Actually Work in 2023",
          excerpt:
            "Discover the most effective SEO techniques that are driving results in today's digital landscape.",
        },
        {
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
          category: "Web Development",
          date: "April 28, 2023",
          readTime: "7 min read",
          title: "The Future of Web Development: Trends to Watch",
          excerpt:
            "Explore emerging technologies and methodologies that are shaping the future of web development.",
        },
        {
          image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e",
          category: "UI/UX Design",
          date: "April 10, 2023",
          readTime: "6 min read",
          title: "Creating User-Centered Experiences That Convert",
          excerpt:
            "Learn how to design digital experiences that not only delight users but also drive business results.",
        },
      ],
      faqItems: [
        {
          question: "What services does Veralake Digital offer?",
          answer:
            "We offer a comprehensive range of digital services including web development, mobile app development, digital marketing, brand identity design, UI/UX design, automation services, and analytics implementation.",
        },
        {
          question: "How long does it typically take to complete a project?",
          answer:
            "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline specific to your project.",
        },
        {
          question: "Do you work with clients remotely?",
          answer:
            "Yes, we have successfully completed projects with clients from around the world. We use collaborative tools and regular video conferences to ensure smooth communication regardless of location.",
        },
        {
          question: "What is your pricing structure?",
          answer:
            "We offer both fixed-price and time-and-materials pricing models depending on the nature of your project. We provide detailed proposals after understanding your specific requirements during our discovery phase.",
        },
        {
          question:
            "Do you provide ongoing support after the project is completed?",
          answer:
            "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. These can include regular updates, security monitoring, content updates, and performance optimization.",
        },
      ],
      bookingOptions: [
        {
          id: "strategy",
          name: "Marketing Strategy Session",
          url: "https://calendly.com/veralake-digital/marketing-strategy",
          duration: "15 min",
          description:
            "Quick session to discuss your marketing strategy needs and challenges.",
        },
        {
          id: "analytics",
          name: "Free Analytics Setup Call",
          url: "https://calendly.com/veralake-digital/analytics-setup",
          duration: "30 min",
          description:
            "Discuss how to set up analytics for your business and extract valuable insights.",
        },
        {
          id: "consultation",
          name: "Marketing Consultation",
          url: "https://calendly.com/veralake-digital/consultation",
          duration: "30 min",
          description:
            "In-depth consultation about your marketing and digital presence.",
        },
        {
          id: "meeting",
          name: "30 Minute Meeting",
          url: "https://calendly.com/veralake-digital/30min",
          duration: "30 min",
          description:
            "General meeting to discuss your business needs and how we can help.",
        },
      ],
      activeSection: "home"
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify?.display?.xs || false
    }
  },
  mounted() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.theme = savedTheme
    }
    
    // Check if cookies have been accepted or declined
    const cookiesAccepted = localStorage.getItem('cookies-accepted')
    if (cookiesAccepted === null) {
      // Show cookie consent banner if not previously accepted/declined
      this.showCookieConsent = true
    } else if (cookiesAccepted === 'true') {
      // Initialize Google Analytics if cookies accepted
      this.initGA()
    }
    
    // Add scroll event listener for section detection
    window.addEventListener('scroll', this.handleScroll)
    
    // Initial section detection
    this.handleScroll()
  },
  beforeUnmount() {
    // Remove scroll event listener
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme)
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        this.drawer = false
      }
    },
    acceptCookies() {
      localStorage.setItem('cookies-accepted', 'true')
      this.showCookieConsent = false
      
      // Initialize GA after accepting cookies
      this.initGA()
    },
    declineCookies() {
      localStorage.setItem('cookies-accepted', 'false')
      this.showCookieConsent = false
    },
    openCalendlyModal(optionId) {
      this.isCalendlyModalOpen = true
      
      // Set the selected booking option if specified
      if (optionId) {
        const option = this.bookingOptions.find(opt => opt.id === optionId)
        this.selectedBookingOption = option || this.bookingOptions[0]
      } else {
        // Default to first option if none specified
        this.selectedBookingOption = this.bookingOptions[0]
      }
      
      // Track event in Google Analytics
      this.trackEvent('open_calendly', 'engagement', this.selectedBookingOption?.id || 'booking')
      
      // Load the Calendly widget if not already loaded
      if (!this.isCalendlyLoaded) {
        this.initCalendly()
      }
    },
    selectBookingOption(option) {
      this.selectedBookingOption = option
    },
    goToCalendly(option) {
      // Open Calendly in a new tab/window
      window.open(option.url, '_blank')
      
      // Track event
      this.trackEvent('calendly_redirect', 'booking', option.id)
      
      // Close the modal
      this.closeCalendlyModal()
    },
    initCalendly() {
      // Mark Calendly as loaded
      this.isCalendlyLoaded = true
    },
    closeCalendlyModal() {
      this.isCalendlyModalOpen = false
    },
    trackEvent(action, category, label) {
      // Only track if cookies have been accepted
      if (localStorage.getItem('cookies-accepted') === 'true' && window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label
        })
      }
    },
    handleScroll() {
      // Get all sections
      const sections = ['home', 'services', 'portfolio', 'testimonials', 'blog', 'contact']
      
      // Find which section is currently in view
      let currentSection = sections[0]
      let minDistance = Infinity
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const distance = Math.abs(rect.top)
          
          if (distance < minDistance) {
            minDistance = distance
            currentSection = sectionId
          }
        }
      })
      
      // Update active section
      this.activeSection = currentSection
    },
    initGA() {
      // Fetch GA ID from server
      fetch('/api/ga-id')
        .then(response => response.json())
        .then(data => {
          if (data.id) {
            window.GA_MEASUREMENT_ID = data.id
            
            // Initialize Google Analytics
            if (typeof initGA === 'function') {
              initGA()
            }
          }
        })
        .catch(error => {
          console.warn('Failed to fetch Google Analytics ID:', error)
        })
    },
    showNotification(message, color = 'success') {
      this.notification = {
        show: true,
        color: color,
        message: message
      }
    }
  }
}
</script>

<style>
/* Global styles */
.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.transition-swing {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
}
</style>