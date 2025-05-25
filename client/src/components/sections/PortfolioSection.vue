<template>
  <section id="portfolio" class="py-16 bg-secondary">
    <v-container>
      <v-row class="mb-10">
        <v-col cols="12" md="8" offset-md="2" class="text-center">
          <h2 class="text-h3 font-weight-bold text-white mb-4">Our Portfolio</h2>
          <p class="text-subtitle-1 text-white text-opacity-80">
            Explore our latest projects that showcase our expertise and creative approach.
            Each project represents our commitment to delivering exceptional results.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col 
          v-for="(project, index) in projects"
          :key="index"
          cols="12" sm="6" lg="4"
          class="mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 10 : 3"
              class="transition-swing h-100"
            >
              <v-img
                :src="project.image"
                height="200"
                cover
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
                <div 
                  class="fill-height d-flex flex-column justify-end pa-4"
                  :class="{'project-overlay': isHovering}"
                >
                  <div 
                    :class="{'project-details': true, 'project-details-visible': isHovering}"
                  >
                    <v-chip size="small" color="primary" class="mb-2">{{ project.category }}</v-chip>
                    <h3 class="text-h5 font-weight-bold text-white mb-2">{{ project.title }}</h3>
                    <p class="text-body-2 text-white text-opacity-80">{{ project.description }}</p>
                    <v-btn
                      variant="text"
                      color="white"
                      class="px-0 mt-2"
                      size="small"
                    >
                      View Case Study
                      <v-icon end>mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      
      <v-row class="mt-10">
        <v-col cols="12" class="text-center">
          <v-btn
            color="primary"
            variant="flat"
            size="large"
          >
            View All Projects
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSection',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.project-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  transition: all 0.3s ease;
}

.project-details {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.project-details-visible {
  opacity: 1;
  transform: translateY(0);
}

.h-100 {
  height: 100%;
}
</style>