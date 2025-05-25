// Header Component
const AppHeader = {
  props: {
    menuItems: Array,
    darkMode: Boolean,
    isScrolled: Boolean
  },
  template: `
    <header :class="['app-header', {'header-scrolled': isScrolled}]">
      <div class="header-container">
        <div class="logo">
          <a href="#hero">
            <div class="logo-text">
              <span class="logo-vera">Vera</span>
              <span class="logo-lake">Lake</span>
              <span class="logo-digital">Digital</span>
            </div>
          </a>
        </div>
        
        <nav class="desktop-nav">
          <ul class="nav-links">
            <li v-for="item in menuItems" :key="item.url">
              <a :href="item.url" @click.prevent="$emit('navigate', item.url.substring(1))">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <button class="theme-toggle" @click="$emit('toggle-theme')">
            <i :class="['mdi', darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night']"></i>
          </button>
          <button class="consultation-btn" @click="$emit('open-calendly')">
            <span>Free Consultation</span>
            <i class="mdi mdi-arrow-right"></i>
          </button>
          <button class="mobile-menu-btn" @click="$emit('toggle-mobile-menu', true)">
            <i class="mdi mdi-menu"></i>
          </button>
        </div>
      </div>
    </header>
  `
};

// Mobile Navigation Drawer Component
const AppNavDrawer = {
  props: {
    isOpen: Boolean,
    menuItems: Array,
    darkMode: Boolean
  },
  template: `
    <div class="nav-drawer-backdrop" v-if="isOpen" @click="$emit('close')">
      <div class="nav-drawer" @click.stop :class="{ 'open': isOpen }">
        <div class="drawer-header">
          <div class="logo">
            <div class="logo-text">
              <span class="logo-vera">Vera</span>
              <span class="logo-lake">Lake</span>
              <span class="logo-digital">Digital</span>
            </div>
          </div>
          <button class="close-btn" @click="$emit('close')">
            <i class="mdi mdi-close"></i>
          </button>
        </div>
        
        <nav class="drawer-nav">
          <ul class="drawer-nav-links">
            <li v-for="item in menuItems" :key="item.url">
              <a :href="item.url" @click.prevent="navigate(item.url.substring(1))">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
        
        <div class="drawer-actions">
          <div class="theme-toggle-container">
            <button class="theme-toggle" @click="$emit('toggle-theme')">
              <div class="toggle-icon">
                <i :class="['mdi', darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night']"></i>
              </div>
              <span>{{ darkMode ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i class="mdi mdi-linkedin"></i>
            </a>
            <a href="#" class="social-link">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
          
          <button class="consultation-btn" @click="openCalendly">
            <span>Free Consultation</span>
            <i class="mdi mdi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  methods: {
    navigate(sectionId) {
      this.$emit('navigate', sectionId);
      this.$emit('close');
    },
    openCalendly() {
      this.$emit('open-calendly');
      this.$emit('close');
    }
  }
};

// Hero Section Component
const HeroSection = {
  template: `
    <section id="hero" class="hero-section">
      <div class="hero-bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="hero-container">
        <div class="hero-content">
          <div class="brand-badge">Vera Lake Digital</div>
          <h1 class="hero-title">
            Transform Your <span class="gradient-text">Digital Presence</span>
          </h1>
          <p class="hero-subtitle">
            We craft innovative digital solutions that elevate your brand, engage your audience, and drive measurable results for your business.
          </p>
          <div class="hero-actions">
            <button class="cta-button primary" @click="$emit('open-calendly')">
              <span>Free Consultation</span>
              <i class="mdi mdi-arrow-right"></i>
            </button>
            <button class="cta-button secondary" @click="$emit('navigate', 'services')">
              <span>Explore Services</span>
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-value">8+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">200+</div>
              <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">98%</div>
              <div class="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-container">
            <img src="https://cdn.dribbble.com/userupload/6997440/file/original-4f75e25433ddd93e394e71d338b05aa9.png?resize=1024x768" alt="Digital Solutions" onerror="this.src='https://cdn.dribbble.com/userupload/3070734/file/original-d2ff31d7d2ac2d2c5c5a7194e0137d06.png?resize=1024x768'" />
            <div class="floating-element element-1">
              <i class="mdi mdi-server-network"></i>
              <span>Cloud Services</span>
            </div>
            <div class="floating-element element-2">
              <i class="mdi mdi-cellphone-link"></i>
              <span>Mobile Apps</span>
            </div>
            <div class="floating-element element-3">
              <i class="mdi mdi-web"></i>
              <span>Web Development</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-clients">
        <p>Trusted by innovative brands:</p>
        <div class="client-logos">
          <div class="logo-item">
            <img src="https://placehold.co/120x40/ffffff/192430?text=AFS+Travelers" alt="AFS Travelers" />
          </div>
          <div class="logo-item">
            <img src="https://placehold.co/140x40/ffffff/192430?text=Tara+Whalen+Law" alt="Tara Whalen Law" />
          </div>
          <div class="logo-item">
            <img src="https://placehold.co/120x40/ffffff/192430?text=Mux+Blank" alt="Mux Blank" />
          </div>
          <div class="logo-item">
            <img src="https://placehold.co/120x40/ffffff/192430?text=BCS+Bulbls" alt="BCS Bulbls" />
          </div>
          <div class="logo-item">
            <img src="https://placehold.co/150x40/ffffff/192430?text=TTD+Learning" alt="TTD Learning Solutions" />
          </div>
        </div>
      </div>
    </section>
  `
};

// Services Section Component
const ServicesSection = {
  props: {
    services: Array
  },
  template: `
    <section id="services" class="services-section">
      <div class="section-bg-shapes">
        <div class="service-shape shape-1"></div>
        <div class="service-shape shape-2"></div>
      </div>
      <div class="section-container">
        <div class="section-header">
          <div class="section-tag">Our Expertise</div>
          <h2 class="section-title">Services That <span class="gradient-text">Drive Results</span></h2>
          <p class="section-subtitle">
            We help businesses transform their digital presence with cutting-edge solutions tailored to their unique needs
          </p>
        </div>
        
        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card">
            <div class="service-card-inner">
              <div class="service-icon">
                <i :class="['mdi', service.icon]"></i>
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, fIndex) in service.features" :key="fIndex">
                  <div class="feature-icon">
                    <i class="mdi mdi-check"></i>
                  </div>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <button class="service-cta" @click="$emit('open-calendly', service.title)">
                <span>Get Started</span>
                <i class="mdi mdi-arrow-right"></i>
              </button>
            </div>
            <div class="card-bg-gradient"></div>
          </div>
        </div>
        
        <div class="services-cta">
          <div class="cta-content">
            <h3>Need a custom solution?</h3>
            <p>Let's discuss your specific requirements and build something amazing together.</p>
          </div>
          <button class="cta-button" @click="$emit('open-calendly')">
            <span>Schedule a Call</span>
            <i class="mdi mdi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  `
};

// Portfolio Section Component
const PortfolioSection = {
  props: {
    projects: Array
  },
  template: `
    <section id="portfolio" class="portfolio-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Our Work</h2>
          <p class="section-subtitle">
            Take a look at some of our recent projects
          </p>
        </div>
        
        <div class="portfolio-grid">
          <div v-for="(project, index) in projects" :key="index" class="portfolio-item">
            <div class="portfolio-image">
              <img :src="project.image" :alt="project.title" onerror="this.src='https://via.placeholder.com/600x400?text='+encodeURIComponent(this.alt)" />
              <div class="portfolio-overlay">
                <span class="project-category">{{ project.category }}</span>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <a href="#" class="view-project">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// Testimonials Section Component
const TestimonialsSection = {
  props: {
    testimonials: Array
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  template: `
    <section id="testimonials" class="testimonials-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Client Testimonials</h2>
          <p class="section-subtitle">
            What our clients say about working with us
          </p>
        </div>
        
        <div class="testimonials-slider">
          <div class="testimonials-wrapper">
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index" 
              class="testimonial-card"
              :class="{ 'active': activeIndex === index }"
            >
              <div class="testimonial-content">
                <div class="quote-icon">
                  <i class="mdi mdi-format-quote-open"></i>
                </div>
                <p class="testimonial-quote">{{ testimonial.quote }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    <img :src="testimonial.avatar" :alt="testimonial.name" onerror="this.src='https://via.placeholder.com/60x60?text='+encodeURIComponent(this.alt.charAt(0))" />
                  </div>
                  <div class="author-info">
                    <h4 class="author-name">{{ testimonial.name }}</h4>
                    <p class="author-position">{{ testimonial.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-controls">
            <button class="control-btn prev" @click="prevTestimonial">
              <i class="mdi mdi-chevron-left"></i>
            </button>
            <div class="indicator-dots">
              <span 
                v-for="(_, index) in testimonials" 
                :key="index" 
                class="indicator-dot"
                :class="{ 'active': activeIndex === index }"
                @click="setActiveIndex(index)"
              ></span>
            </div>
            <button class="control-btn next" @click="nextTestimonial">
              <i class="mdi mdi-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div class="testimonial-cta">
          <p>Ready to work with us?</p>
          <button class="cta-button" @click="$emit('open-calendly')">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  `,
  methods: {
    prevTestimonial() {
      this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
    nextTestimonial() {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    }
  },
  mounted() {
    // Auto rotate testimonials
    setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }
};

// Blog Section Component
const BlogSection = {
  props: {
    blogPosts: Array
  },
  template: `
    <section id="blog" class="blog-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Latest Insights</h2>
          <p class="section-subtitle">
            Tips, trends and insights from our digital marketing experts
          </p>
        </div>
        
        <div class="blog-grid">
          <div v-for="(post, index) in blogPosts" :key="index" class="blog-card">
            <div class="blog-image">
              <img :src="post.image" :alt="post.title" onerror="this.src='https://via.placeholder.com/400x250?text=Blog+Post'" />
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">{{ post.category }}</span>
                <span class="blog-separator">•</span>
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-separator">•</span>
                <span class="blog-read-time">{{ post.readTime }}</span>
              </div>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <a href="#" class="blog-read-more">Read More</a>
            </div>
          </div>
        </div>
        
        <div class="blog-view-all">
          <a href="#" class="view-all-button">View All Articles</a>
        </div>
      </div>
    </section>
  `
};

// FAQ Section Component
const FaqSection = {
  props: {
    faqItems: Array
  },
  data() {
    return {
      activeIndex: null
    }
  },
  template: `
    <section id="faq" class="faq-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Get answers to common questions about our services
          </p>
        </div>
        
        <div class="faq-grid">
          <div class="faq-container">
            <div 
              v-for="(item, index) in faqItems" 
              :key="index" 
              class="faq-item"
              :class="{ 'active': activeIndex === index }"
            >
              <div class="faq-question" @click="toggleFaq(index)">
                <h3>{{ item.question }}</h3>
                <i :class="['mdi', activeIndex === index ? 'mdi-minus' : 'mdi-plus']"></i>
              </div>
              <div class="faq-answer" :style="answerStyle(index)">
                <div class="faq-answer-content">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="faq-cta">
            <div class="cta-card">
              <h3>Still have questions?</h3>
              <p>We're here to help you with any questions about our services.</p>
              <button class="cta-button" @click="$emit('open-calendly')">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  methods: {
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    answerStyle(index) {
      return {
        maxHeight: this.activeIndex === index ? '500px' : '0px'
      };
    }
  }
};

// Contact Section Component
const ContactSection = {
  props: {
    services: Array
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  template: `
    <section id="contact" class="contact-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">
            Reach out to discuss your project or schedule a consultation
          </p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">
                <i class="mdi mdi-phone"></i>
              </div>
              <h3>Call or Text</h3>
              <p><a href="tel:4706293981">(470) 629-3981</a></p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="mdi mdi-email"></i>
              </div>
              <h3>Email Us</h3>
              <p><a href="mailto:hello@veralake.digital">hello@veralake.digital</a></p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="mdi mdi-map-marker"></i>
              </div>
              <h3>Location</h3>
              <p>Atlanta, GA<br>United States</p>
            </div>
            
            <div class="social-links">
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
          
          <div class="contact-form-container">
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="Enter your full name"
                  :class="{ 'error': errors.name }"
                  required
                >
                <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="Enter your email address"
                  :class="{ 'error': errors.email }"
                  required
                >
                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number (optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  placeholder="Enter your phone number"
                  :class="{ 'error': errors.phone }"
                >
                <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
              </div>
              
              <div class="form-group">
                <label for="service">Service Interested In</label>
                <select 
                  id="service" 
                  v-model="form.service"
                  :class="{ 'error': errors.service }"
                  required
                >
                  <option value="" disabled selected>Select a service</option>
                  <option v-for="(service, index) in services" :key="index" :value="service.title">
                    {{ service.title }}
                  </option>
                </select>
                <div v-if="errors.service" class="error-message">{{ errors.service }}</div>
              </div>
              
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  placeholder="Tell us about your project"
                  :class="{ 'error': errors.message }"
                  required
                ></textarea>
                <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
              </div>
              
              <button 
                type="submit" 
                class="submit-button"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      };
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required';
        isValid = false;
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      if (this.form.phone.trim() && !this.isValidPhone(this.form.phone)) {
        this.errors.phone = 'Please enter a valid phone number';
        isValid = false;
      }
      
      if (!this.form.service) {
        this.errors.service = 'Please select a service';
        isValid = false;
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required';
        isValid = false;
      }
      
      return isValid;
    },
    
    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    
    isValidPhone(phone) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return re.test(String(phone));
    },
    
    submitForm() {
      if (!this.validateForm()) {
        this.$emit('track-event', 'form_error', 'contact', 'validation_failed');
        return;
      }
      
      this.isSubmitting = true;
      this.$emit('track-event', 'form_submit', 'contact', this.form.service);
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.$emit('form-submitted', 'Your message has been sent successfully!', 'success');
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        };
      }, 1500);
    }
  }
};