<template>
  <section id="hero" class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Modern Solutions For <span class="highlight">Digital Growth</span>
        </h1>
        <p class="hero-subtitle">
          We build beautiful, functional websites and applications that drive results for your business.
        </p>
        <div class="hero-actions">
          <button class="cta-button primary" @click="openCalendly">
            Free Consultation
          </button>
          <button class="cta-button secondary" @click="navigate('services')">
            Our Services
          </button>
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/hero-illustration.svg" alt="Digital Solutions" />
      </div>
    </div>
    <div class="hero-clients">
      <p>Trusted by:</p>
      <div class="client-logos">
        <img src="/images/clients/afs-travelers.png" alt="AFS Travelers" />
        <img src="/images/clients/tara-whalen-law.png" alt="Tara Whalen Law" />
        <img src="/images/clients/mux-blank.png" alt="Mux Blank" />
        <img src="/images/clients/bcs-bulbls.png" alt="BCS Bulbls" />
        <img src="/images/clients/ttd-learning.png" alt="TTD Learning Solutions" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    navigate(sectionId) {
      this.$emit('navigate', sectionId)
    },
    openCalendly() {
      this.$emit('open-calendly')
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding: 120px 0 60px;
  background: linear-gradient(135deg, var(--hero-bg-start) 0%, var(--hero-bg-end) 100%);
  color: var(--hero-text-color);
  position: relative;
  overflow: hidden;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-title .highlight {
  color: var(--primary-color);
  position: relative;
  display: inline-block;
}

.hero-title .highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: var(--primary-color);
  opacity: 0.3;
  z-index: -1;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: var(--text-secondary-color);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.cta-button {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.cta-button.primary:hover {
  background-color: var(--primary-dark-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--border-color);
}

.cta-button.secondary:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
}

.hero-image {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.hero-image img {
  width: 100%;
  height: auto;
}

.hero-clients {
  background-color: var(--background-alt-color);
  padding: 20px 0;
  margin-top: 60px;
  text-align: center;
}

.hero-clients p {
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  margin-bottom: 15px;
}

.client-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.client-logos img {
  height: 30px;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.client-logos img:hover {
  opacity: 1;
  filter: grayscale(0);
}

@media (min-width: 768px) {
  .hero-section {
    padding: 150px 0 80px;
  }
  
  .hero-container {
    flex-direction: row;
    text-align: left;
  }
  
  .hero-content {
    text-align: left;
    margin-bottom: 0;
    margin-right: 40px;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-actions {
    justify-content: flex-start;
  }
  
  .client-logos img {
    height: 40px;
  }
}
</style>