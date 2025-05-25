<template>
  <section id="contact" class="py-16 bg-secondary">
    <v-container>
      <v-row class="mb-10">
        <v-col cols="12" md="8" offset-md="2" class="text-center">
          <h2 class="text-h3 font-weight-bold text-white mb-4">Get In Touch</h2>
          <p class="text-subtitle-1 text-white text-opacity-80">
            Ready to transform your digital presence? Contact us today to discuss your project.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="mb-8 mb-md-0">
          <v-form @submit.prevent="submitForm">
            <v-card class="pa-6">
              <v-card-title class="px-0 text-h5 font-weight-bold">
                Send us a message
              </v-card-title>
              
              <v-card-text class="px-0">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.name"
                      label="Your Name"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.email"
                      label="Email Address"
                      variant="outlined"
                      type="email"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.phone"
                      label="Phone Number"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="form.service"
                      :items="serviceOptions"
                      label="Service of Interest"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                  
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.message"
                      label="Your Message"
                      variant="outlined"
                      rows="4"
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-card-text>
              
              <v-card-actions class="px-0">
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  :loading="isSubmitting"
                >
                  <v-icon start>mdi-send</v-icon>
                  Send Message
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
        
        <v-col cols="12" md="5" offset-md="1">
          <div class="text-white h-100 d-flex flex-column">
            <div class="mb-8">
              <h3 class="text-h5 font-weight-bold mb-4">Contact Information</h3>
              
              <div class="d-flex align-center mb-4">
                <v-avatar color="primary" size="36" class="mr-4">
                  <v-icon color="white">mdi-phone</v-icon>
                </v-avatar>
                <div>
                  <div class="text-body-2 mb-1">Phone</div>
                  <a href="tel:+14706293981" class="text-white text-decoration-none">
                    (470) 629-3981
                  </a>
                </div>
              </div>
              
              <div class="d-flex align-center mb-4">
                <v-avatar color="primary" size="36" class="mr-4">
                  <v-icon color="white">mdi-email</v-icon>
                </v-avatar>
                <div>
                  <div class="text-body-2 mb-1">Email</div>
                  <a href="mailto:contact@veralake.digital" class="text-white text-decoration-none">
                    contact@veralake.digital
                  </a>
                </div>
              </div>
              
              <div class="d-flex align-center mb-8">
                <v-avatar color="primary" size="36" class="mr-4">
                  <v-icon color="white">mdi-map-marker</v-icon>
                </v-avatar>
                <div>
                  <div class="text-body-2 mb-1">Location</div>
                  <div>Atlanta, GA (Remote Services Available)</div>
                </div>
              </div>
            </div>
            
            <v-divider class="bg-white bg-opacity-20 mb-8"></v-divider>
            
            <div class="mb-8">
              <h3 class="text-h5 font-weight-bold mb-4">Business Hours</h3>
              <div class="d-flex justify-space-between mb-2">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>
              <div class="d-flex justify-space-between">
                <span>Weekends:</span>
                <span>By Appointment</span>
              </div>
            </div>
            
            <div class="mt-auto">
              <h3 class="text-h5 font-weight-bold mb-4">Follow Us</h3>
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
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
      isSubmitting: false
    }
  },
  computed: {
    serviceOptions() {
      return this.services.map(service => service.title)
    }
  },
  methods: {
    submitForm() {
      this.isSubmitting = true
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        }
        
        // Emit success event to show notification
        this.$emit('form-submitted', 'Your message has been sent successfully. We will get back to you soon.')
        
        // Track form submission event
        this.$emit('track-event', 'form_submit', 'contact', 'contact_form')
      }, 1500)
    }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>