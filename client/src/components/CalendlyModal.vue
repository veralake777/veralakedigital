<template>
  <v-dialog
    v-model="localValue"
    max-width="800"
    scrollable
  >
    <v-card class="rounded-lg">
      <v-toolbar flat color="white" class="pr-3">
        <v-toolbar-title class="text-h5 font-weight-bold font-poppins">Schedule a Free Consultation</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="localValue = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-6">
        <p class="text-body-1 text-medium-emphasis mb-6">
          Select a convenient time for a 30-minute call with our team to discuss your project and how we can help you achieve your business goals.
        </p>

        <div class="calendly-container">
          <div v-if="calendlyLoaded" class="calendly-inline-widget" data-url="https://calendly.com/d/example-meeting/30min" style="min-width:320px;height:630px;"></div>
          <div v-else class="calendly-placeholder d-flex flex-column align-center justify-center">
            <v-icon size="x-large" color="primary" class="mb-4">mdi-calendar-clock</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">Loading Calendar...</h4>
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { trackEvent } from '../lib/analytics'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const calendlyLoaded = ref(false)

// Load Calendly widget when modal is opened
watch(localValue, (newValue) => {
  if (newValue) {
    loadCalendlyWidget()
    // Track event when Calendly modal is opened
    trackEvent('open_calendly', 'engagement', 'booking_widget')
  }
})

const loadCalendlyWidget = () => {
  if (window.Calendly) {
    calendlyLoaded.value = true
    return
  }

  // Load Calendly script
  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  script.onload = () => {
    calendlyLoaded.value = true
  }

  document.head.appendChild(script)

  // Load Calendly styles
  const link = document.createElement('link')
  link.href = 'https://assets.calendly.com/assets/external/widget.css'
  link.rel = 'stylesheet'

  document.head.appendChild(link)
}

// Initialize Calendly when component is mounted
onMounted(() => {
  // If modal is already open on mount, load Calendly widget
  if (localValue.value) {
    loadCalendlyWidget()
  }
})
</script>

<style scoped>
.calendly-placeholder {
  height: 630px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Add this style to ensure text is visible when a button is selected in Calendly */
.calendly-inline-widget .calendly-grid .calendly-event-name {
    color: black !important; /* Or any other visible color */
}
</style>