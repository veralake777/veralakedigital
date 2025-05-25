<template>
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
            <img :src="post.image" :alt="post.title" />
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
</template>

<script>
export default {
  name: 'BlogSection',
  props: {
    blogPosts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.blog-section {
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

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.blog-card {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 24px;
}

.blog-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 12px;
  font-size: 0.85rem;
}

.blog-category {
  color: var(--primary-color);
  font-weight: 600;
}

.blog-separator {
  margin: 0 6px;
  color: var(--text-secondary-color);
}

.blog-date, .blog-read-time {
  color: var(--text-secondary-color);
}

.blog-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-color);
  line-height: 1.4;
}

.blog-excerpt {
  color: var(--text-secondary-color);
  margin-bottom: 16px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-read-more {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  position: relative;
}

.blog-read-more::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.blog-read-more:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.blog-view-all {
  text-align: center;
  margin-top: 40px;
}

.view-all-button {
  display: inline-block;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background-color: var(--primary-color);
  color: white;
}

@media (min-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>