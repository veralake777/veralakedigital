<template>
  <section class="py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h4 font-weight-bold mb-4 font-poppins">Trusted By Industry Leaders</h2>
        <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 760px">
          We've helped businesses across industries achieve extraordinary results with our digital solutions.
        </p>
      </div>
      
      <v-row align="center" justify="center">
        <v-col
          v-for="(client, index) in clients"
          :key="index"
          cols="6"
          sm="4"
          md="2"
          class="d-flex justify-center"
        >
          <div 
            class="client-logo font-weight-bold text-h6 text-grey-darken-1"
            :class="{ 'active': hoveredClient === index }"
            @mouseenter="hoveredClient = index" 
            @mouseleave="hoveredClient = null"
          >
            {{ client.name }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoveredClient = ref<number | null>(null)

const clients = [
  { name: 'ACME Corp' },
  { name: 'TechFlow' },
  { name: 'Innovex' },
  { name: 'GrowthX' },
  { name: 'Nexgen' },
  { name: 'FutureIQ' }
]
</script>

<style scoped>
.client-logo {
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  filter: grayscale(1);
  opacity: 0.7;
}

.client-logo.active {
  filter: grayscale(0);
  opacity: 1;
  color: var(--v-theme-primary);
}

.client-logo:hover {
  filter: grayscale(0);
  opacity: 1;
  color: var(--v-theme-primary);
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
