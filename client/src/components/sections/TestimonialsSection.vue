<template>
  <section id="testimonials" class="py-16">
    <v-container>
      <v-row class="mb-10">
        <v-col cols="12" md="8" offset-md="2" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">What Our Clients Say</h2>
          <p class="text-subtitle-1">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-slide-group
            show-arrows
            center-active
          >
            <v-slide-group-item
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <v-card
                class="ma-4"
                width="360"
                min-height="250"
                :elevation="2"
              >
                <v-card-text>
                  <div class="d-flex flex-column h-100">
                    <v-icon
                      color="primary"
                      size="36"
                      class="mb-4"
                    >
                      mdi-format-quote-open
                    </v-icon>
                    
                    <p class="text-body-1 font-italic mb-4">
                      "{{ testimonial.quote }}"
                    </p>
                    
                    <div class="mt-auto d-flex align-center">
                      <v-avatar size="48" class="mr-3">
                        <v-img :src="testimonial.avatar" alt="Avatar"></v-img>
                      </v-avatar>
                      <div>
                        <div class="font-weight-bold">{{ testimonial.name }}</div>
                        <div class="text-caption">{{ testimonial.position }}</div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
      </v-row>
      
      <v-row class="mt-10">
        <v-col cols="12" class="text-center">
          <v-btn
            color="secondary"
            variant="outlined"
            size="large"
            @click="$emit('open-calendly')"
          >
            Become Our Next Success Story
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>