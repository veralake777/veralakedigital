<template>
  <section id="services" class="py-16">
    <v-container>
      <v-row class="mb-10">
        <v-col cols="12" md="8" offset-md="2" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">Our Services</h2>
          <p class="text-subtitle-1">
            We offer comprehensive digital solutions tailored to your business needs.
            From web development to digital marketing, we have the expertise to help you succeed.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col 
          v-for="(service, index) in services"
          :key="index"
          cols="12" sm="6" md="4"
          class="mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              :class="{ 
                'transition-swing': true,
                'scale-up': isHovering,
                'bg-surface': true
              }"
              height="100%"
            >
              <v-card-item>
                <template v-slot:prepend>
                  <v-avatar :color="service.color" size="48" class="elevation-1">
                    <v-icon size="24" color="white">{{ service.icon }}</v-icon>
                  </v-avatar>
                </template>
                <v-card-title class="text-h5 font-weight-bold">{{ service.title }}</v-card-title>
              </v-card-item>

              <v-card-text>
                <p class="mb-4">{{ service.description }}</p>
                <v-list density="compact" class="bg-transparent pa-0">
                  <v-list-item
                    v-for="(feature, i) in service.features"
                    :key="i"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon :color="service.color" size="small" class="mr-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>

              <v-card-actions class="mt-auto">
                <v-spacer></v-spacer>
                <v-btn
                  variant="tonal"
                  :color="service.color"
                  @click="$emit('open-calendly')"
                >
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <v-row class="mt-10">
        <v-col cols="12" class="text-center">
          <v-btn
            color="primary"
            size="large"
            @click="$emit('open-calendly')"
          >
            <v-icon start>mdi-calendar-clock</v-icon>
            Schedule a Consultation
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  props: {
    services: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.scale-up {
  transform: scale(1.02);
}

.bg-surface {
  background-color: var(--v-theme-surface);
}
</style>