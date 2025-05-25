<template>
  <section id="services" class="services-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">
          We provide end-to-end digital solutions to help your business succeed online
        </p>
      </div>
      
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            <i :class="['mdi', service.icon]"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="(feature, fIndex) in service.features" :key="fIndex">
              <i class="mdi mdi-check"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <button class="service-cta" @click="openCalendly(service.title)">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  methods: {
    openCalendly(serviceTitle) {
      this.$emit('open-calendly', serviceTitle)
    }
  }
}
</script>

<style scoped>
.services-section {
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

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.service-card {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  background-color: var(--primary-light-color);
  color: var(--primary-color);
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-color);
}

.service-description {
  color: var(--text-secondary-color);
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  flex-grow: 1;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  color: var(--text-color);
}

.service-features li i {
  color: var(--primary-color);
  margin-right: 10px;
}

.service-cta {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.service-cta:hover {
  background-color: var(--primary-dark-color);
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>