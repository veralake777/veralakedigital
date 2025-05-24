<template>
  <section class="py-16 cta-section">
    <v-container>
      <div class="text-center text-white max-w-4xl mx-auto">
        <h2 class="text-h3 font-weight-bold mb-6 font-poppins">Ready to Transform Your Digital Presence?</h2>
        <p class="text-h6 mb-8 text-white text-opacity-90">
          Schedule a free 30-minute consultation to discuss your business goals and how we can help you achieve them.
        </p>
        <div class="d-flex flex-column flex-sm-row justify-center gap-4">
          <v-btn
            color="white"
            size="large"
            rounded="pill"
            class="text-primary font-weight-bold px-8 elevation-2"
            @click="openCalendlyModal"
          >
            Schedule Your Free Consultation
          </v-btn>
          <v-btn
            variant="outlined"
            color="white"
            size="large"
            rounded="pill"
            class="font-weight-bold px-8"
            href="#contact"
          >
            Contact Us
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const openCalendlyModal = inject('openCalendlyModal') as () => void
</script>

<style scoped>
.cta-section {
  background-color: var(--v-theme-primary);
}

:deep(.v-theme--dark) .cta-section {
  background-color: rgba(42, 65, 232, 0.9);
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
