<template>
  <section id="about" class="py-20 bg-light">
    <v-container>
      <v-row align="center">
        <v-col cols="12" lg="6" order="2" order-lg="1">
          <div class="position-relative">
            <v-img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Veralake digital agency team"
              class="rounded-lg elevation-8"
              height="500"
              cover
              loading="lazy"
            ></v-img>
            <div class="experience-badge d-none d-md-block">
              <div class="text-h3 font-weight-bold">10+</div>
              <div class="text-caption">Years of Experience</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" order="1" order-lg="2">
          <div class="mb-2 text-accent font-weight-medium">ABOUT VERALAKE</div>
          <h2 class="text-h3 font-weight-bold mb-6 font-poppins">
            We Create Digital Solutions That Drive Business Growth
          </h2>
          <p class="text-body-1 mb-6 text-medium-emphasis">
            Veralake is a full-service digital agency committed to transforming businesses through strategic digital solutions. 
            We blend creativity, technology, and data-driven insights to deliver exceptional results that help our clients thrive 
            in today's digital landscape.
          </p>
          
          <v-row class="mb-8">
            <v-col cols="12" md="6" v-for="(feature, index) in features" :key="index">
              <div class="d-flex align-start">
                <v-icon color="primary" size="large" class="mr-4">{{ feature.icon }}</v-icon>
                <div>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ feature.title }}</h3>
                  <p class="text-body-2 text-medium-emphasis">{{ feature.description }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
          
          <v-btn
            color="primary"
            size="large"
            rounded="pill"
            class="font-weight-medium text-white px-8"
            @click="openCalendlyModal"
          >
            Schedule a Discovery Call
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const openCalendlyModal = inject('openCalendlyModal') as () => void

const features = [
  {
    icon: 'mdi-check-circle',
    title: 'Strategic Approach',
    description: 'Data-driven strategies tailored to your business goals'
  },
  {
    icon: 'mdi-check-circle',
    title: 'Expert Team',
    description: 'Seasoned professionals with diverse skillsets'
  },
  {
    icon: 'mdi-check-circle',
    title: 'Results Focused',
    description: 'Measurable outcomes and continuous optimization'
  },
  {
    icon: 'mdi-check-circle',
    title: 'Client Partnership',
    description: 'Transparent communication and collaboration'
  }
]
</script>

<style scoped>
.experience-badge {
  position: absolute;
  bottom: -24px;
  right: -24px;
  background-color: var(--v-theme-primary);
  color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  text-align: center;
}

.bg-light {
  background-color: #F5F7FA;
}

:deep(.v-theme--dark) .bg-light {
  background-color: rgba(30, 30, 45, 0.95);
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
