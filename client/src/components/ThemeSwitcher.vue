<template>
  <v-btn
    icon
    variant="text"
    class="ml-2"
    @click="$emit('toggle-theme')"
  >
    <v-icon v-if="theme === 'light'">mdi-weather-night</v-icon>
    <v-icon v-else color="yellow">mdi-white-balance-sunny</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  theme: {
    type: String,
    required: true
  }
})

defineEmits(['toggle-theme'])
</script>
