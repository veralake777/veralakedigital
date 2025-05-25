<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <app-header 
      :menu-items="menuItems" 
      :dark-mode="darkMode" 
      :is-scrolled="isScrolled"
      @navigate="scrollToSection"
      @toggle-theme="toggleTheme"
      @open-calendly="openCalendlyModal"
      @toggle-mobile-menu="toggleMobileMenu"
    />
    
    <app-nav-drawer
      :is-open="mobileMenuOpen"
      :menu-items="menuItems"
      :dark-mode="darkMode"
      @close="closeMobileMenu"
      @navigate="scrollToSection"
      @toggle-theme="toggleTheme"
      @open-calendly="openCalendlyModal"
    />
    
    <main>
      <router-view 
        :services="services"
        :projects="projects"
        :testimonials="testimonials"
        :blog-posts="blogPosts"
        :faq-items="faqItems"
        @scroll-to-section="scrollToSection"
        @open-calendly="openCalendlyModal"
        @show-notification="showNotification"
        @track-event="trackEvent"
      />
    </main>
    
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="/images/veralake-logo.svg" alt="Veralake Digital" />
            <p>Building digital solutions that drive growth for your business.</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-links-column">
              <h3>Navigation</h3>
              <ul>
                <li v-for="item in menuItems" :key="item.url">
                  <a href="#" @click.prevent="scrollToSection(item.url)">{{ item.title }}</a>
                </li>
              </ul>
            </div>
            
            <div class="footer-links-column">
              <h3>Services</h3>
              <ul>
                <li v-for="service in services.slice(0, 4)" :key="service.title">
                  <a href="#" @click.prevent="scrollToSection('services')">{{ service.title }}</a>
                </li>
              </ul>
            </div>
            
            <div class="footer-links-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="tel:4706293981">(470) 629-3981</a></li>
                <li><a href="mailto:hello@veralake.digital">hello@veralake.digital</a></li>
                <li><a href="#" @click.prevent="scrollToSection('contact')">Contact Form</a></li>
                <li><a href="#" @click.prevent="openCalendlyModal()">Free Consultation</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="copyright">
            &copy; {{ new Date().getFullYear() }} Veralake Digital. All rights reserved.
          </div>
          <div class="footer-social">
            <a href="https://twitter.com/veralakedigital" target="_blank" class="social-link">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/veralake" target="_blank" class="social-link">
              <i class="mdi mdi-linkedin"></i>
            </a>
            <a href="https://instagram.com/veralakedigital" target="_blank" class="social-link">
              <i class="mdi mdi-instagram"></i>
            </a>
            <a href="https://facebook.com/veralakedigital" target="_blank" class="social-link">
              <i class="mdi mdi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    
    <!-- Calendly Modal -->
    <div v-if="showCalendly" class="calendly-modal">
      <div class="calendly-overlay" @click="closeCalendlyModal"></div>
      <div class="calendly-container">
        <div class="calendly-header">
          <h3>Schedule a Free Consultation</h3>
          <button class="close-btn" @click="closeCalendlyModal">
            <i class="mdi mdi-close"></i>
          </button>
        </div>
        <div class="calendly-content">
          <div id="calendly-embed"></div>
        </div>
      </div>
    </div>
    
    <!-- Notification Toast -->
    <div 
      v-if="notification.show" 
      class="notification-toast"
      :class="notification.color"
    >
      <div class="notification-content">
        <i :class="['mdi', notification.color === 'success' ? 'mdi-check-circle' : 'mdi-alert-circle']"></i>
        <span>{{ notification.message }}</span>
      </div>
      <button class="close-btn" @click="hideNotification">
        <i class="mdi mdi-close"></i>
      </button>
    </div>
    
    <!-- Cookie Consent -->
    <div v-if="showCookieConsent" class="cookie-consent">
      <div class="cookie-content">
        <p>
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div class="cookie-buttons">
          <button class="accept-btn" @click="acceptCookies">Accept</button>
          <button class="decline-btn" @click="declineCookies">Decline</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initGA, trackPageView, trackEvent } from './lib/analytics'
import AppHeader from './components/layout/AppHeader.vue'
import AppNavDrawer from './components/layout/AppNavDrawer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNavDrawer
  },
  data() {
    return {
      menuItems: [
        { title: 'Home', url: 'hero' },
        { title: 'Services', url: 'services' },
        { title: 'Work', url: 'portfolio' },
        { title: 'Testimonials', url: 'testimonials' },
        { title: 'Blog', url: 'blog' },
        { title: 'FAQ', url: 'faq' },
        { title: 'Contact', url: 'contact' }
      ],
      services: [
        {
          icon: 'mdi-web',
          title: 'Web Development',
          description: 'Custom websites built to engage your audience and drive conversions.',
          features: [
            'Responsive design for all devices',
            'SEO optimized for better rankings',
            'Fast loading and performance',
            'User-friendly interfaces'
          ]
        },
        {
          icon: 'mdi-cellphone-link',
          title: 'Mobile Apps',
          description: 'Native and cross-platform mobile applications for iOS and Android.',
          features: [
            'Intuitive user experience',
            'Seamless offline functionality',
            'Push notification integration',
            'App store optimization'
          ]
        },
        {
          icon: 'mdi-cart-outline',
          title: 'E-Commerce',
          description: 'Online stores that drive sales and provide great shopping experiences.',
          features: [
            'Secure payment processing',
            'Inventory management',
            'Customer account portals',
            'Analytics and reporting'
          ]
        },
        {
          icon: 'mdi-chart-line',
          title: 'Digital Marketing',
          description: 'Data-driven marketing strategies to grow your online presence.',
          features: [
            'Search engine optimization',
            'Social media campaigns',
            'Email marketing',
            'Content creation'
          ]
        },
        {
          icon: 'mdi-palette',
          title: 'UI/UX Design',
          description: 'Beautiful, functional designs that engage and convert visitors.',
          features: [
            'User research and testing',
            'Wireframing and prototyping',
            'Visual design and branding',
            'Conversion rate optimization'
          ]
        },
        {
          icon: 'mdi-server-network',
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure and DevOps for reliable applications.',
          features: [
            'AWS, Azure, and Google Cloud',
            'Serverless architecture',
            'Continuous integration/deployment',
            'Performance monitoring'
          ]
        }
      ],
      projects: [
        {
          image: '/images/portfolio/project-1.jpg',
          category: 'Web Development',
          title: 'AFS Travelers Portal',
          description: 'A custom booking platform for travel enthusiasts with integrated payment processing and user accounts.'
        },
        {
          image: '/images/portfolio/project-2.jpg',
          category: 'Mobile App',
          title: 'Tara Whalen Law',
          description: 'Legal consultation booking app with document upload and secure client communications.'
        },
        {
          image: '/images/portfolio/project-3.jpg',
          category: 'E-Commerce',
          title: 'Mux Blank Store',
          description: 'Fashion e-commerce platform with advanced filtering, wishlist functionality, and integrated marketing tools.'
        },
        {
          image: '/images/portfolio/project-4.jpg',
          category: 'UI/UX Design',
          title: 'BCS Bulbls Dashboard',
          description: 'Analytics dashboard redesign with improved data visualization and user experience.'
        },
        {
          image: '/images/portfolio/project-5.jpg',
          category: 'Digital Marketing',
          title: 'TTD Learning Platform',
          description: 'Content marketing strategy and implementation for an online education platform.'
        }
      ],
      testimonials: [
        {
          quote: "Working with Veralake Digital transformed our business. Their team delivered a website that not only looks great but also converts visitors into customers consistently.",
          name: "Sarah Johnson",
          position: "CEO, AFS Travelers",
          avatar: "/images/testimonials/testimonial-1.jpg"
        },
        {
          quote: "The mobile app Veralake built for our law firm has significantly streamlined our client consultation process. It's intuitive, secure, and our clients love it.",
          name: "Michael Whalen",
          position: "Partner, Tara Whalen Law",
          avatar: "/images/testimonials/testimonial-2.jpg"
        },
        {
          quote: "Their attention to detail and technical expertise is unmatched. Our e-commerce platform has seen a 40% increase in sales since launching the new site.",
          name: "David Chen",
          position: "Founder, Mux Blank",
          avatar: "/images/testimonials/testimonial-3.jpg"
        },
        {
          quote: "Veralake's digital marketing strategies helped us reach our target audience effectively. Their data-driven approach delivered measurable results within months.",
          name: "Lisa Thomas",
          position: "Marketing Director, TTD Learning",
          avatar: "/images/testimonials/testimonial-4.jpg"
        }
      ],
      blogPosts: [
        {
          image: "/images/blog/blog-1.jpg",
          category: "Web Development",
          date: "May 15, 2025",
          readTime: "5 min read",
          title: "7 Web Design Trends That Will Dominate in 2025",
          excerpt: "Discover the cutting-edge design trends that are shaping the digital landscape this year and how to implement them in your website."
        },
        {
          image: "/images/blog/blog-2.jpg",
          category: "Digital Marketing",
          date: "May 8, 2025",
          readTime: "8 min read",
          title: "How to Create a Content Strategy That Drives Results",
          excerpt: "Learn the essential components of a successful content marketing strategy and how to measure its impact on your business goals."
        },
        {
          image: "/images/blog/blog-3.jpg",
          category: "E-Commerce",
          date: "April 30, 2025",
          readTime: "6 min read",
          title: "Optimizing Your E-commerce Checkout for Maximum Conversions",
          excerpt: "Practical tips to reduce cart abandonment and create a frictionless checkout experience that boosts your conversion rates."
        }
      ],
      faqItems: [
        {
          question: "What services does Veralake Digital offer?",
          answer: "We provide comprehensive digital solutions including web development, mobile app development, e-commerce, UI/UX design, digital marketing, and cloud solutions. Our team can handle projects of any size, from simple websites to complex enterprise applications."
        },
        {
          question: "How long does it take to build a website?",
          answer: "The timeline varies depending on the complexity of the project. A simple informational website might take 2-4 weeks, while a complex e-commerce platform or custom web application could take 2-4 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
        },
        {
          question: "What is your development process?",
          answer: "Our process includes discovery (understanding your goals and requirements), planning (creating wireframes and project roadmap), design (creating visual mockups), development (building the actual product), testing (ensuring everything works perfectly), launch, and ongoing support and maintenance."
        },
        {
          question: "Do you offer website maintenance services?",
          answer: "Yes, we offer ongoing maintenance and support packages to keep your digital products secure, up-to-date, and performing optimally. These can include regular updates, security monitoring, performance optimization, content updates, and technical support."
        },
        {
          question: "How much does a website or app cost?",
          answer: "The cost depends on the scope and complexity of your project. We provide custom quotes based on your specific requirements after an initial consultation. We're transparent about our pricing and work with you to find solutions that fit your budget while meeting your business goals."
        },
        {
          question: "What technologies do you use?",
          answer: "We use modern, industry-standard technologies that provide the best performance, security, and scalability. This includes frameworks like Vue.js, React, Angular, Node.js, Laravel, and platforms like WordPress, Shopify, and custom solutions. We select the technology stack based on what's most appropriate for your specific project."
        }
      ],
      darkMode: false,
      isScrolled: false,
      mobileMenuOpen: false,
      showCalendly: false,
      calendlyService: '',
      notification: {
        show: false,
        message: '',
        color: 'success',
        timer: null
      },
      showCookieConsent: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      this.closeMobileMenu()
      
      const section = document.getElementById(sectionId)
      if (section) {
        const headerOffset = 80
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        
        this.trackEvent('navigation', 'scroll', sectionId)
      }
    },
    
    toggleTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false')
      document.documentElement.classList.toggle('dark', this.darkMode)
      this.trackEvent('theme', 'toggle', this.darkMode ? 'dark' : 'light')
    },
    
    toggleMobileMenu(isOpen) {
      this.mobileMenuOpen = isOpen
      document.body.style.overflow = isOpen ? 'hidden' : ''
    },
    
    closeMobileMenu() {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
    },
    
    openCalendlyModal(service = '') {
      this.calendlyService = service
      this.showCalendly = true
      document.body.style.overflow = 'hidden'
      this.trackEvent('calendly', 'open', service || 'general')
      
      this.$nextTick(() => {
        this.initCalendly()
      })
    },
    
    closeCalendlyModal() {
      this.showCalendly = false
      document.body.style.overflow = ''
      this.trackEvent('calendly', 'close')
      
      // Clean up Calendly embed
      const calendlyEmbed = document.getElementById('calendly-embed')
      if (calendlyEmbed) {
        calendlyEmbed.innerHTML = ''
      }
    },
    
    initCalendly() {
      const calendlyEmbed = document.getElementById('calendly-embed')
      if (!calendlyEmbed) return
      
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)
      
      script.onload = () => {
        if (window.Calendly) {
          calendlyEmbed.innerHTML = ''
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/veralake/consultation',
            parentElement: calendlyEmbed,
            prefill: {
              customAnswers: {
                a1: this.calendlyService
              }
            }
          })
        }
      }
    },
    
    showNotification(message, color = 'success') {
      // Clear any existing timer
      if (this.notification.timer) {
        clearTimeout(this.notification.timer)
      }
      
      this.notification = {
        show: true,
        message,
        color,
        timer: setTimeout(() => {
          this.hideNotification()
        }, 5000)
      }
    },
    
    hideNotification() {
      this.notification.show = false
      if (this.notification.timer) {
        clearTimeout(this.notification.timer)
        this.notification.timer = null
      }
    },
    
    acceptCookies() {
      this.showCookieConsent = false
      localStorage.setItem('cookiesAccepted', 'true')
      this.trackEvent('cookies', 'accept')
      
      // Initialize analytics after consent
      this.initAnalytics()
    },
    
    declineCookies() {
      this.showCookieConsent = false
      localStorage.setItem('cookiesAccepted', 'false')
      this.trackEvent('cookies', 'decline')
    },
    
    initAnalytics() {
      const hasAcceptedCookies = localStorage.getItem('cookiesAccepted') === 'true'
      if (hasAcceptedCookies) {
        initGA()
      }
    },
    
    trackEvent(action, category, label) {
      const hasAcceptedCookies = localStorage.getItem('cookiesAccepted') === 'true'
      if (hasAcceptedCookies) {
        trackEvent(action, category, label)
      }
    },
    
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  },
  created() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme === 'true') {
      this.darkMode = true
      document.documentElement.classList.add('dark')
    }
    
    // Check for cookie consent
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (cookiesAccepted === null) {
      this.showCookieConsent = true
    } else if (cookiesAccepted === 'true') {
      // Initialize analytics if cookies were previously accepted
      this.initAnalytics()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    
    // Track initial page view
    this.$router.afterEach((to) => {
      const hasAcceptedCookies = localStorage.getItem('cookiesAccepted') === 'true'
      if (hasAcceptedCookies) {
        trackPageView(to.fullPath)
      }
    })
    
    // Initialize scroll position
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    
    // Clear notification timer if it exists
    if (this.notification.timer) {
      clearTimeout(this.notification.timer)
    }
  }
}
</script>

<style>
/* Global CSS Variables */
:root {
  --primary-color: #4f46e5;
  --primary-dark-color: #3730a3;
  --primary-light-color: rgba(79, 70, 229, 0.1);
  --text-color: #1e293b;
  --text-secondary-color: #64748b;
  --background-color: #ffffff;
  --background-alt-color: #f8fafc;
  --card-bg-color: #ffffff;
  --border-color: #e2e8f0;
  --hover-color: #f1f5f9;
  --error-color: #ef4444;
  --success-color: #10b981;
  --hero-bg-start: #f8fafc;
  --hero-bg-end: #ffffff;
  --hero-text-color: #1e293b;
}

/* Dark Mode Variables */
.dark-mode {
  --primary-color: #818cf8;
  --primary-dark-color: #6366f1;
  --primary-light-color: rgba(129, 140, 248, 0.1);
  --text-color: #f1f5f9;
  --text-secondary-color: #94a3b8;
  --background-color: #0f172a;
  --background-alt-color: #1e293b;
  --card-bg-color: #1e293b;
  --border-color: #334155;
  --hover-color: #334155;
  --hero-bg-start: #0f172a;
  --hero-bg-end: #1e293b;
  --hero-text-color: #f1f5f9;
}

/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.5;
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Footer Styles */
.footer {
  background-color: var(--background-alt-color);
  padding: 60px 0 30px;
  border-top: 1px solid var(--border-color);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo img {
  height: 40px;
  margin-bottom: 16px;
}

.footer-logo p {
  color: var(--text-secondary-color);
  max-width: 300px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 30px;
}

.footer-links-column h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-color);
}

.footer-links-column ul {
  list-style: none;
}

.footer-links-column li {
  margin-bottom: 12px;
}

.footer-links-column a {
  color: var(--text-secondary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links-column a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
}

.copyright {
  color: var(--text-secondary-color);
  font-size: 0.9rem;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social .social-link {
  width: 36px;
  height: 36px;
  background-color: var(--card-bg-color);
  color: var(--text-secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.footer-social .social-link:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

/* Calendly Modal */
.calendly-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calendly-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.calendly-container {
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 90%;
  max-height: 650px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.calendly-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
}

.calendly-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
}

.calendly-header .close-btn {
  background: none;
  border: none;
  color: var(--text-secondary-color);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.calendly-header .close-btn:hover {
  color: var(--text-color);
}

.calendly-content {
  flex: 1;
  overflow: hidden;
}

#calendly-embed {
  width: 100%;
  height: 100%;
}

/* Notification Toast */
.notification-toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 350px;
  background-color: var(--card-bg-color);
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification-toast.success {
  border-left: 4px solid var(--success-color);
}

.notification-toast.error {
  border-left: 4px solid var(--error-color);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification-content i {
  font-size: 1.5rem;
}

.notification-toast.success i {
  color: var(--success-color);
}

.notification-toast.error i {
  color: var(--error-color);
}

.notification-toast .close-btn {
  background: none;
  border: none;
  color: var(--text-secondary-color);
  cursor: pointer;
}

/* Cookie Consent */
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--card-bg-color);
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 20px;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
}

.cookie-content p {
  color: var(--text-color);
  max-width: 800px;
}

.cookie-buttons {
  display: flex;
  gap: 16px;
}

.accept-btn, .decline-btn {
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.accept-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.accept-btn:hover {
  background-color: var(--primary-dark-color);
}

.decline-btn {
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.decline-btn:hover {
  border-color: var(--text-color);
}

/* Responsive Adjustments */
@media (min-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr 2fr;
  }
  
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .cookie-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
</style>