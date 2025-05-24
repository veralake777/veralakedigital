<template>
  <section id="services" class="py-20">
    <v-container>
      <div class="text-center mb-16">
        <div class="text-accent font-weight-medium mb-2">OUR SERVICES</div>
        <h2 class="text-h3 font-weight-bold mb-4 font-poppins">Comprehensive Digital Solutions</h2>
        <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 760px">
          We offer a full spectrum of digital services designed to help your business grow, engage with customers, and dominate your industry.
        </p>
      </div>
      
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(service, index) in services" :key="index">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              :class="{ 'on-hover': isHovering, 'rounded-xl': true }"
              height="100%"
              class="service-card pa-8"
            >
              <v-icon size="x-large" color="primary" class="mb-6">{{ service.icon }}</v-icon>
              <h3 class="text-h6 font-weight-bold mb-4 font-poppins">{{ service.title }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-6">{{ service.description }}</p>
              
              <v-list density="compact" class="mb-6 bg-transparent pa-0">
                <v-list-item 
                  v-for="(feature, i) in service.features" 
                  :key="i"
                  class="pa-0 mb-2"
                >
                  <template v-slot:prepend>
                    <v-icon color="primary" size="small" class="mr-2">mdi-check</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2 text-medium-emphasis">
                    {{ feature }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              
              <v-btn
                variant="text"
                color="primary"
                class="font-weight-medium px-0"
                :to="{ path: '/', hash: '#contact' }"
                :ripple="false"
              >
                Learn More
                <v-icon right class="ml-1">mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      
      <div class="text-center mt-16">
        <v-btn
          color="primary"
          size="large"
          rounded="pill"
          class="font-weight-medium text-white px-8"
          :to="{ path: '/', hash: '#contact' }"
        >
          Discuss Your Project
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'mdi-web',
    title: 'Web Design & Development',
    description: 'Custom, responsive websites built for performance, user experience, and conversion optimization.',
    features: ['Responsive Web Design', 'E-commerce Solutions', 'CMS Development']
  },
  {
    icon: 'mdi-trending-up',
    title: 'Digital Marketing & SEO',
    description: 'Data-driven marketing strategies that increase visibility, traffic, and conversions.',
    features: ['Search Engine Optimization', 'Content Marketing', 'PPC & Social Media Advertising']
  },
  {
    icon: 'mdi-palette',
    title: 'Brand Identity & Design',
    description: 'Compelling visual identities that communicate your brand\'s values and connect with your audience.',
    features: ['Logo & Brand Identity', 'UI/UX Design', 'Visual Content Creation']
  },
  {
    icon: 'mdi-cellphone-link',
    title: 'Mobile App Development',
    description: 'Custom mobile applications that extend your digital presence and engage users on-the-go.',
    features: ['iOS & Android Development', 'Cross-Platform Solutions', 'App Store Optimization']
  },
  {
    icon: 'mdi-chart-bar',
    title: 'Analytics & Optimization',
    description: 'Data analysis and continuous optimization to maximize performance and ROI.',
    features: ['Performance Tracking', 'Conversion Optimization', 'User Behavior Analysis']
  },
  {
    icon: 'mdi-account-group',
    title: 'Social Media Management',
    description: 'Strategic social media presence that builds community, engagement, and brand loyalty.',
    features: ['Content Strategy & Creation', 'Community Management', 'Social Media Advertising']
  }
]
</script>

<style scoped>
.service-card {
  transition: all 0.3s ease;
  background-color: #F5F7FA;
  height: 100%;
}

:deep(.v-theme--dark) .service-card {
  background-color: rgba(30, 30, 45, 0.8);
}

.service-card.on-hover {
  transform: translateY(-5px);
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
