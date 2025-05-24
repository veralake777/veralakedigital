<template>
  <section id="home" class="hero-section">
    <div class="overlay"></div>
    <v-container class="py-16">
      <v-row align="center" class="py-8">
        <v-col cols="12" md="6" class="text-white">
          <h1 class="text-h3 md:text-h2 lg:text-h1 font-weight-bold mb-4 font-poppins">
            Transforming Ideas Into Digital Success
          </h1>
          <p class="text-body-1 lg:text-h6 mb-8 text-white opacity-90">
            We craft innovative digital experiences that drive growth and deliver measurable results for forward-thinking businesses.
          </p>
          <div class="d-flex flex-column flex-sm-row gap-4">
            <v-btn
              color="white"
              size="large"
              rounded="pill"
              class="text-primary font-weight-bold px-8 elevation-2"
              @click="openCalendlyModal"
            >
              Book a Free Consultation
            </v-btn>
            <v-btn
              variant="outlined"
              color="white"
              size="large"
              rounded="pill"
              class="font-weight-bold px-8"
              href="#services"
            >
              Explore Our Services
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-none d-md-flex">
          <v-img
            src="https://images.unsplash.com/photo-1551434678-e076c223a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
            alt="Digital transformation illustration"
            class="rounded-lg elevation-10"
            cover
            loading="lazy"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <div class="wave-divider">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="wave">
        <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,80C840,96,960,96,1080,88C1200,80,1320,64,1380,56L1440,48L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const openCalendlyModal = inject('openCalendlyModal') as () => void
</script>

<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(to right, var(--v-theme-primary), rgba(42, 65, 232, 0.8));
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
}

.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.wave {
  display: block;
  width: 100%;
  height: auto;
}

:deep(.v-theme--light) .wave {
  fill: white;
}

:deep(.v-theme--dark) .wave {
  fill: var(--v-theme-background);
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
