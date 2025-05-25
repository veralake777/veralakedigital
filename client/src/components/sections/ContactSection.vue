<template>
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
            <p><a href="mailto:vera@veralake.com">vera@veralake.com</a></p>
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
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    services: {
      type: Array,
      required: true
    }
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
  methods: {
    validateForm() {
      let isValid = true
      this.errors = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      }
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
        isValid = false
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
        isValid = false
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      if (this.form.phone.trim() && !this.isValidPhone(this.form.phone)) {
        this.errors.phone = 'Please enter a valid phone number'
        isValid = false
      }
      
      if (!this.form.service) {
        this.errors.service = 'Please select a service'
        isValid = false
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
        isValid = false
      }
      
      return isValid
    },
    
    isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    
    isValidPhone(phone) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      return re.test(String(phone))
    },
    
    submitForm() {
      if (!this.validateForm()) {
        this.$emit('track-event', 'form_error', 'contact', 'validation_failed')
        return
      }
      
      this.isSubmitting = true
      this.$emit('track-event', 'form_submit', 'contact', this.form.service)
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false
        this.$emit('form-submitted', 'Your message has been sent successfully!', 'success')
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        }
      }, 1500)
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background-color: var(--background-alt-color);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary-color);
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-card {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.info-icon {
  width: 60px;
  height: 60px;
  background-color: var(--primary-light-color);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 1.8rem;
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-color);
}

.info-card p {
  color: var(--text-secondary-color);
  margin: 0;
}

.info-card a {
  color: var(--text-secondary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: var(--primary-color);
}

.social-links {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

.social-link {
  width: 45px;
  height: 45px;
  background-color: var(--card-bg-color);
  color: var(--text-secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

.contact-form-container {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--text-color);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px var(--primary-light-color);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: var(--error-color);
}

.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 4px;
}

.submit-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--primary-dark-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1.5fr;
  }
}
</style>