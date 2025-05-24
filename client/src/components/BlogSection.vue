<template>
  <section id="blog" class="py-20">
    <v-container>
      <div class="text-center mb-16">
        <div class="text-accent font-weight-medium mb-2">INSIGHTS & RESOURCES</div>
        <h2 class="text-h3 font-weight-bold mb-4 font-poppins">Latest from Our Blog</h2>
        <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 760px">
          Stay updated with the latest digital marketing trends, tips, and insights from our expert team.
        </p>
      </div>
      
      <v-row>
        <v-col cols="12" md="4" v-for="(post, index) in blogPosts" :key="index">
          <v-card class="rounded-xl h-100 blog-card">
            <div class="position-relative">
              <v-img
                :src="post.image"
                :alt="post.title"
                height="200"
                cover
                class="blog-image"
                loading="lazy"
              ></v-img>
              <v-chip
                size="small"
                :color="post.category === 'Digital Marketing' ? 'primary' : 'accent'"
                class="text-white font-weight-medium category-chip"
              >
                {{ post.category }}
              </v-chip>
            </div>
            
            <v-card-text class="pa-6">
              <div class="d-flex align-center text-grey text-caption mb-2">
                <v-icon size="small" class="mr-1">mdi-calendar-blank</v-icon>
                <span>{{ post.date }}</span>
                <v-divider vertical class="mx-2"></v-divider>
                <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
                <span>{{ post.readTime }}</span>
              </div>
              
              <h3 class="text-h6 font-weight-bold mb-3 font-poppins">{{ post.title }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-4">{{ post.excerpt }}</p>
              
              <v-btn
                variant="text"
                color="primary"
                class="font-weight-medium px-0"
                :ripple="false"
                href="#"
              >
                Read More
                <v-icon right class="ml-1">mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="text-center mt-12">
        <v-btn
          color="primary"
          size="large"
          rounded="pill"
          class="font-weight-medium text-white px-8"
          href="#"
        >
          View All Articles
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Digital Marketing',
    date: 'May 15, 2023',
    readTime: '5 min read',
    title: '7 Digital Marketing Trends to Watch in 2023',
    excerpt: 'Discover the latest digital marketing trends that are shaping the industry and how to leverage them for your business growth.'
  },
  {
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Web Design',
    date: 'April 28, 2023',
    readTime: '7 min read',
    title: 'UX Design Principles That Boost Conversion Rates',
    excerpt: 'Learn how to apply user experience design principles that not only delight users but also drive conversions for your business.'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Social Media',
    date: 'April 10, 2023',
    readTime: '6 min read',
    title: 'Building a Social Media Strategy That Actually Works',
    excerpt: 'Develop a comprehensive social media strategy that builds brand awareness, engages your audience, and drives measurable results.'
  }
]
</script>

<style scoped>
.blog-card {
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.category-chip {
  position: absolute;
  top: 16px;
  left: 16px;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
