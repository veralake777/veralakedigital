<template>
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
            <img :src="project.image" :alt="project.title" />
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
</template>

<script>
export default {
  name: 'PortfolioSection',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.portfolio-section {
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

.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.portfolio-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 300px;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
}

.portfolio-item:hover .portfolio-image img {
  transform: scale(1.1);
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.project-category {
  color: var(--primary-color);
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
}

.project-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  line-height: 1.6;
  max-width: 300px;
}

.view-project {
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.view-project:hover {
  background-color: var(--primary-dark-color);
}

@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .portfolio-item:nth-child(1) {
    grid-column: span 2;
  }
  
  .portfolio-item:nth-child(4) {
    grid-column: span 2;
  }
}
</style>