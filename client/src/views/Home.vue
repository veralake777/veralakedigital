<template>
  <div>
    <!-- Hero Section -->
    <hero-section 
      @navigate="scrollToSection" 
      @open-calendly="openCalendlyModal"
    />
    
    <!-- Services Section -->
    <services-section 
      :services="services" 
      @open-calendly="openCalendlyModal"
    />
    
    <!-- Portfolio Section -->
    <portfolio-section 
      :projects="projects"
    />
    
    <!-- Testimonials Section -->
    <testimonials-section 
      :testimonials="testimonials" 
      @open-calendly="openCalendlyModal"
    />
    
    <!-- Blog Section -->
    <blog-section 
      :blog-posts="blogPosts"
    />
    
    <!-- FAQ Section -->
    <faq-section 
      :faq-items="faqItems" 
      @open-calendly="openCalendlyModal"
    />
    
    <!-- Contact Section -->
    <contact-section 
      :services="services"
      @form-submitted="showNotification"
      @track-event="trackEvent"
    />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    BlogSection,
    FaqSection,
    ContactSection
  },
  props: {
    services: {
      type: Array,
      required: true
    },
    projects: {
      type: Array,
      required: true
    },
    testimonials: {
      type: Array,
      required: true
    },
    blogPosts: {
      type: Array,
      required: true
    },
    faqItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollToSection(sectionId) {
      this.$emit('scroll-to-section', sectionId)
    },
    openCalendlyModal(optionId) {
      this.$emit('open-calendly', optionId)
    },
    showNotification(message, color) {
      this.$emit('show-notification', message, color)
    },
    trackEvent(action, category, label) {
      this.$emit('track-event', action, category, label)
    }
  }
}
</script>