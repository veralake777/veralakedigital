<template>
  <section id="contact" class="py-20">
    <v-container>
      <div class="text-center mb-16">
        <div class="text-accent font-weight-medium mb-2">GET IN TOUCH</div>
        <h2 class="text-h3 font-weight-bold mb-4 font-poppins">Contact Us</h2>
        <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 760px">
          Ready to start your next digital project? Reach out to us and let's discuss how we can help you achieve your business goals.
        </p>
      </div>
      
      <v-row>
        <!-- Contact Information -->
        <v-col cols="12" lg="6">
          <div class="mb-10">
            <h3 class="text-h4 font-weight-bold mb-6 font-poppins">Let's Connect</h3>
            <p class="text-body-1 text-medium-emphasis mb-8">
              Fill out the form or contact us directly using the information below. We look forward to hearing from you!
            </p>
            
            <div class="d-flex flex-column gap-6">
              <div class="d-flex">
                <div class="mr-4 pa-3 rounded-circle bg-primary bg-opacity-10">
                  <v-icon color="primary" size="large">mdi-map-marker</v-icon>
                </div>
                <div>
                  <h4 class="font-weight-bold mb-1">Visit Us</h4>
                  <p class="text-medium-emphasis">123 Innovation Drive, Suite 200<br>San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div class="d-flex">
                <div class="mr-4 pa-3 rounded-circle bg-primary bg-opacity-10">
                  <v-icon color="primary" size="large">mdi-email</v-icon>
                </div>
                <div>
                  <h4 class="font-weight-bold mb-1">Email Us</h4>
                  <a href="mailto:info@veralake.digital" class="text-primary">info@veralake.digital</a>
                </div>
              </div>
              
              <div class="d-flex">
                <div class="mr-4 pa-3 rounded-circle bg-primary bg-opacity-10">
                  <v-icon color="primary" size="large">mdi-phone</v-icon>
                </div>
                <div>
                  <h4 class="font-weight-bold mb-1">Call Us</h4>
                  <a href="tel:+14155551234" class="text-primary">(415) 555-1234</a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-h5 font-weight-bold mb-6 font-poppins">Follow Us</h3>
            <div class="d-flex gap-4">
              <v-btn
                v-for="(icon, index) in socialIcons" 
                :key="index"
                icon
                color="primary"
                variant="tonal"
                href="#"
              >
                <v-icon>{{ icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
        
        <!-- Contact Form -->
        <v-col cols="12" lg="6">
          <v-card class="rounded-xl pa-8 bg-light" elevation="4">
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
              <v-alert
                v-if="formSubmitted"
                type="success"
                class="mb-8"
              >
                <div class="font-weight-bold mb-1">Thank you for your message!</div>
                <p>We'll get back to you as soon as possible.</p>
              </v-alert>
              
              <div v-if="!formSubmitted">
                <v-text-field
                  v-model="formData.name"
                  :rules="nameRules"
                  label="Full Name *"
                  variant="outlined"
                  class="mb-4"
                  hide-details="auto"
                ></v-text-field>
                
                <v-text-field
                  v-model="formData.email"
                  :rules="emailRules"
                  label="Email Address *"
                  variant="outlined"
                  class="mb-4"
                  hide-details="auto"
                ></v-text-field>
                
                <v-text-field
                  v-model="formData.phone"
                  label="Phone Number"
                  variant="outlined"
                  class="mb-4"
                  hide-details="auto"
                ></v-text-field>
                
                <v-select
                  v-model="formData.service"
                  :items="serviceOptions"
                  label="Service of Interest"
                  variant="outlined"
                  class="mb-4"
                  hide-details="auto"
                ></v-select>
                
                <v-textarea
                  v-model="formData.message"
                  :rules="messageRules"
                  label="Message *"
                  variant="outlined"
                  class="mb-4"
                  rows="5"
                  hide-details="auto"
                ></v-textarea>
                
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  class="mt-8 font-weight-bold"
                  :loading="loading"
                >
                  Send Message
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { trackEvent } from '../lib/analytics'

const form = ref<any>(null)
const valid = ref(false)
const loading = ref(false)
const formSubmitted = ref(false)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const nameRules = [
  (v: string) => !!v || 'Name is required'
]

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email'
]

const messageRules = [
  (v: string) => !!v || 'Message is required'
]

const serviceOptions = [
  { title: 'Select a service', value: '' },
  { title: 'Web Design & Development', value: 'web-design' },
  { title: 'Digital Marketing & SEO', value: 'digital-marketing' },
  { title: 'Brand Identity & Design', value: 'branding' },
  { title: 'Mobile App Development', value: 'mobile-app' },
  { title: 'Analytics & Optimization', value: 'analytics' },
  { title: 'Social Media Management', value: 'social-media' },
  { title: 'Other', value: 'other' }
]

const socialIcons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
]

const submitForm = async () => {
  const { valid } = await form.value.validate()
  
  if (valid) {
    loading.value = true
    
    try {
      // Send form data to server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.value)
      })
      
      if (response.ok) {
        // Track form submission event
        trackEvent('contact_form_submit', 'engagement', 'contact_form')
        
        // Show success message
        formSubmitted.value = true
        
        // Reset form after submission
        formData.value = {
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        }
      } else {
        // Handle errors
        const error = await response.json()
        console.error('Form submission error:', error)
        alert('There was an error submitting your form. Please try again later.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again later.')
    } finally {
      loading.value = false
    }
  }
}
</script>

<style scoped>
.bg-light {
  background-color: #F5F7FA;
}

:deep(.v-theme--dark) .bg-light {
  background-color: rgba(30, 30, 45, 0.8);
}

.bg-primary.bg-opacity-10 {
  background-color: rgba(42, 65, 232, 0.1);
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
