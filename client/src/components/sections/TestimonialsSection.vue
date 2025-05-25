<template>
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
                  <img :src="testimonial.avatar" :alt="testimonial.name">
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
        <button class="cta-button" @click="openCalendly">
          Schedule a Consultation
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      autoplayInterval: null
    }
  },
  methods: {
    prevTestimonial() {
      this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length
      this.restartAutoplay()
    },
    nextTestimonial() {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length
      this.restartAutoplay()
    },
    setActiveIndex(index) {
      this.activeIndex = index
      this.restartAutoplay()
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextTestimonial()
      }, 5000)
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval)
    },
    restartAutoplay() {
      this.stopAutoplay()
      this.startAutoplay()
    },
    openCalendly() {
      this.$emit('open-calendly')
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeUnmount() {
    this.stopAutoplay()
  }
}
</script>

<style scoped>
.testimonials-section {
  padding: 80px 0;
  background-color: var(--background-color);
  position: relative;
  overflow: hidden;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/testimonials-bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.05;
  z-index: 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
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

.testimonials-slider {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.testimonials-wrapper {
  position: relative;
  height: 400px;
}

.testimonial-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.5s ease;
  visibility: hidden;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.testimonial-content {
  background-color: var(--card-bg-color);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.quote-icon {
  font-size: 3rem;
  color: var(--primary-color);
  opacity: 0.3;
  margin-bottom: 16px;
}

.testimonial-quote {
  flex-grow: 1;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-color);
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
  border: 3px solid var(--primary-light-color);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: var(--text-color);
}

.author-position {
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  margin: 0;
}

.testimonial-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.control-btn {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background-color: var(--primary-color);
  color: white;
}

.indicator-dots {
  display: flex;
  align-items: center;
  margin: 0 16px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--border-color);
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background-color: var(--primary-color);
  transform: scale(1.3);
}

.testimonial-cta {
  text-align: center;
  margin-top: 60px;
}

.testimonial-cta p {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 16px;
}

.cta-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: var(--primary-dark-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 767px) {
  .testimonial-content {
    padding: 30px;
  }
  
  .testimonials-wrapper {
    height: 450px;
  }
  
  .testimonial-quote {
    font-size: 1rem;
  }
}
</style>