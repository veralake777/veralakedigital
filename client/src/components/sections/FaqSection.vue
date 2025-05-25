<template>
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
            <button class="cta-button" @click="openCalendly">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  props: {
    faqItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: null,
      answerHeights: []
    }
  },
  methods: {
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    },
    answerStyle(index) {
      return {
        maxHeight: this.activeIndex === index ? '500px' : '0px'
      }
    },
    openCalendly() {
      this.$emit('open-calendly')
    }
  },
  mounted() {
    // Calculate answer heights on mount
    this.$nextTick(() => {
      this.answerHeights = this.faqItems.map((_, index) => {
        const answerEl = this.$el.querySelectorAll('.faq-answer-content')[index]
        return answerEl ? answerEl.scrollHeight + 'px' : '0px'
      })
    })
  }
}
</script>

<style scoped>
.faq-section {
  padding: 80px 0;
  background-color: var(--background-color);
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

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.faq-container {
  width: 100%;
}

.faq-item {
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 16px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
}

.faq-question h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.faq-item.active .faq-question h3 {
  color: var(--primary-color);
}

.faq-question i {
  font-size: 1.5rem;
  color: var(--text-secondary-color);
  transition: all 0.3s ease;
}

.faq-item.active .faq-question i {
  color: var(--primary-color);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.faq-answer-content {
  padding: 0 0 16px 0;
  color: var(--text-secondary-color);
  line-height: 1.6;
}

.faq-cta {
  width: 100%;
}

.cta-card {
  background-color: var(--primary-light-color);
  border-radius: 8px;
  padding: 40px;
  text-align: center;
}

.cta-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-color);
}

.cta-card p {
  color: var(--text-secondary-color);
  margin-bottom: 24px;
  line-height: 1.6;
}

.cta-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: var(--primary-dark-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (min-width: 992px) {
  .faq-grid {
    grid-template-columns: 3fr 1fr;
    align-items: start;
  }
}
</style>