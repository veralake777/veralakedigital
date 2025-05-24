<template>
  <section id="portfolio" class="py-20 bg-light">
    <v-container>
      <div class="text-center mb-16">
        <div class="text-accent font-weight-medium mb-2">OUR WORK</div>
        <h2 class="text-h3 font-weight-bold mb-4 font-poppins">Case Studies & Portfolio</h2>
        <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 760px">
          Explore our recent projects and discover how we've helped businesses achieve their digital goals.
        </p>
      </div>
      
      <!-- Portfolio Filter -->
      <div class="d-flex flex-wrap justify-center mb-12 gap-2">
        <v-btn
          v-for="(filter, index) in filters"
          :key="index"
          :color="activeFilter === index ? 'primary' : ''"
          :variant="activeFilter === index ? 'flat' : 'tonal'"
          rounded="pill"
          class="font-weight-medium ma-1"
          @click="activeFilter = index"
        >
          {{ filter }}
        </v-btn>
      </div>
      
      <!-- Portfolio Grid -->
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(project, index) in projects" :key="index">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              class="rounded-xl overflow-hidden"
            >
              <div class="position-relative">
                <v-img
                  :src="project.image"
                  :alt="project.title"
                  height="250"
                  cover
                  class="portfolio-image"
                  loading="lazy"
                ></v-img>
                <div class="portfolio-overlay d-flex align-center justify-center" :class="{ 'show': isHovering }">
                  <v-btn
                    variant="outlined"
                    color="white"
                    rounded="pill"
                    class="font-weight-medium text-white hover-white-bg"
                    href="#"
                  >
                    View Project
                  </v-btn>
                </div>
              </div>
              
              <v-card-text class="pa-6">
                <div class="text-accent font-weight-medium text-caption mb-2">{{ project.category }}</div>
                <h3 class="text-h6 font-weight-bold mb-2 font-poppins">{{ project.title }}</h3>
                <p class="text-body-2 text-medium-emphasis">{{ project.description }}</p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      
      <div class="text-center mt-12">
        <v-btn
          variant="text"
          color="primary"
          class="font-weight-medium"
          href="#"
        >
          View All Case Studies
          <v-icon right class="ml-1">mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeFilter = ref(0)

const filters = ['All', 'Web Design', 'Digital Marketing', 'Branding', 'Mobile Apps']

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'E-commerce',
    title: 'LuxuryLane Boutique Redesign',
    description: 'Complete e-commerce redesign that increased conversions by 45% and improved user engagement metrics.'
  },
  {
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Mobile App',
    title: 'FitTrack Wellness App',
    description: 'Fitness tracking app with personalized workout plans and nutrition guidance, achieving 100K+ downloads.'
  },
  {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Branding',
    title: 'EcoSpark Brand Identity',
    description: 'Complete brand overhaul for a renewable energy company, including logo, visual identity, and brand guidelines.'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Digital Marketing',
    title: 'GlobalTech PPC Campaign',
    description: 'Multi-channel marketing campaign that generated 350% ROI and significantly increased market share.'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Web Application',
    title: 'ConnectCRM Dashboard',
    description: 'Intuitive CRM dashboard that streamlined workflows and improved team productivity by 35%.'
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    category: 'Social Media',
    title: 'TrendyStyles Campaign',
    description: 'Viral social media campaign that increased followers by 200% and drove significant e-commerce sales.'
  }
]
</script>

<style scoped>
.bg-light {
  background-color: #F5F7FA;
}

:deep(.v-theme--dark) .bg-light {
  background-color: rgba(30, 30, 45, 0.95);
}

.portfolio-image {
  transition: transform 0.5s ease;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(42, 65, 232, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-overlay.show {
  opacity: 0.9;
}

.hover-white-bg:hover {
  background-color: white !important;
  color: var(--v-theme-primary) !important;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
