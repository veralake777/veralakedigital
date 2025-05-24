<template>
  <section class="py-16">
    <v-container>
      <v-row>
        <v-col cols="6" md="3" v-for="(stat, index) in stats" :key="index" class="text-center">
          <div class="text-primary text-h3 lg:text-h2 font-weight-bold mb-2 font-poppins">{{ stat.value }}</div>
          <div class="text-subtitle-1 text-medium-emphasis font-weight-medium">{{ stat.label }}</div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '250+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '15', label: 'Industry Awards' }
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
