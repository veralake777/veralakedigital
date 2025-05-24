<template>
  <section id="testimonials" class="py-20 bg-light">
    <v-container>
      <div class="text-center mb-16">
        <div class="text-accent font-weight-medium mb-2">CLIENT TESTIMONIALS</div>
        <h2 class="text-h3 font-weight-bold mb-4 font-poppins">What Our Clients Say</h2>
        <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 760px">
          Hear from our clients about their experience working with Veralake Digital and the results we've delivered.
        </p>
      </div>
      
      <v-carousel
        :show-arrows="false"
        height="auto"
        hide-delimiter-background
        delimiter-icon="mdi-circle"
        v-model="currentSlide"
      >
        <v-carousel-item
          v-for="(group, i) in chunkedTestimonials"
          :key="i"
        >
          <v-row>
            <v-col
              v-for="(testimonial, j) in group"
              :key="j"
              cols="12"
              md="6"
              lg="4"
              class="px-4"
            >
              <v-card class="rounded-xl h-100 pa-8 testimonial-card">
                <div class="d-flex mb-6">
                  <v-rating
                    :model-value="5"
                    color="primary"
                    density="compact"
                    readonly
                  ></v-rating>
                </div>
                
                <p class="text-body-1 text-medium-emphasis mb-8 font-italic">
                  "{{ testimonial.quote }}"
                </p>
                
                <div class="d-flex align-center">
                  <v-avatar size="48" class="mr-4">
                    <v-img :src="testimonial.avatar" alt="Client portrait" cover loading="lazy"></v-img>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold">{{ testimonial.name }}</div>
                    <div class="text-caption text-medium-emphasis">{{ testimonial.position }}</div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      
      <div class="d-flex justify-center mt-8">
        <v-btn
          icon
          variant="tonal"
          class="mx-2"
          @click="prevSlide"
          :disabled="currentSlide === 0"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="tonal"
          class="mx-2"
          @click="nextSlide"
          :disabled="currentSlide === chunkedTestimonials.length - 1"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const currentSlide = ref(0)

const testimonials = [
  {
    quote: 'Veralake completely transformed our online presence. Their strategic approach to our website redesign and digital marketing has resulted in a 200% increase in qualified leads. The team is responsive, professional, and truly invested in our success.',
    name: 'Michael Richardson',
    position: 'CEO, TechNova Solutions',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100'
  },
  {
    quote: 'Working with Veralake has been a game-changer for our e-commerce business. Their comprehensive approach to SEO and social media marketing helped us increase our online sales by 75% within just six months. They truly understand our brand and target audience.',
    name: 'Sarah Johnson',
    position: 'Marketing Director, Urban Styles',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100'
  },
  {
    quote: 'The team at Veralake is exceptional. Their branding expertise and website development skills took our startup from unknown to industry standout. The level of creativity, attention to detail, and strategic thinking they bring to every project is impressive.',
    name: 'David Chen',
    position: 'Founder, Innovate Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100'
  }
]

// Group testimonials for carousel (3 per slide on desktop, 1 per slide on mobile)
const chunkedTestimonials = computed(() => {
  const chunkSize = 3;
  const result = [];
  for (let i = 0; i < testimonials.length; i += chunkSize) {
    result.push(testimonials.slice(i, i + chunkSize));
  }
  return result;
})

const nextSlide = () => {
  if (currentSlide.value < chunkedTestimonials.value.length - 1) {
    currentSlide.value++;
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
}
</script>

<style scoped>
.bg-light {
  background-color: #F5F7FA;
}

:deep(.v-theme--dark) .bg-light {
  background-color: rgba(30, 30, 45, 0.95);
}

.testimonial-card {
  transition: all 0.3s ease;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
