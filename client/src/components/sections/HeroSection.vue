<template>
  <section id="home" class="bg-primary" style="min-height: 100vh;">
    <v-container fluid class="fill-height">
      <v-row class="fill-height align-center">
        <v-col cols="12" md="7" class="py-16">
          <div class="text-center text-md-left px-4 fade-in-up">
            <h1 class="text-h2 text-md-h1 font-weight-bold text-white mb-4">
              Modern Digital Solutions for Growing Businesses
            </h1>
            <p class="text-h6 text-white text-opacity-80 mb-8">
              We help businesses transform their digital presence with 
              innovative web development, effective marketing strategies, 
              and memorable brand experiences.
            </p>
            <div class="d-flex flex-column flex-md-row justify-center justify-md-start">
              <v-btn
                size="large"
                color="white"
                class="px-8 py-3 mb-4 mb-md-0 mr-md-4"
                @click="$emit('open-calendly')"
              >
                <v-icon start>mdi-calendar-clock</v-icon>
                Book a Free Consultation
              </v-btn>
              <v-btn
                size="large"
                variant="outlined"
                color="white"
                class="px-8 py-3"
                href="tel:+14706293981"
              >
                <v-icon start>mdi-phone</v-icon>
                Call Us
              </v-btn>
            </div>
            
            <!-- Client logos -->
            <div class="mt-16 d-none d-md-block">
              <p class="text-caption text-white text-opacity-70 mb-4">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div class="client-marquee-container">
                <div class="client-scroller d-flex">
                  <div class="d-flex align-center" style="gap: 48px; padding-right: 48px;">
                    <div class="text-white text-opacity-60">AFS Travelers</div>
                    <div class="text-white text-opacity-60">Tara Whalen Law</div>
                    <div class="text-white text-opacity-60">Mux Blank</div>
                    <div class="text-white text-opacity-60">BCS Bulbls</div>
                    <div class="text-white text-opacity-60">TTD Learning Solutions</div>
                  </div>
                  <div class="d-flex align-center" style="gap: 48px; padding-right: 48px;">
                    <div class="text-white text-opacity-60">AFS Travelers</div>
                    <div class="text-white text-opacity-60">Tara Whalen Law</div>
                    <div class="text-white text-opacity-60">Mux Blank</div>
                    <div class="text-white text-opacity-60">BCS Bulbls</div>
                    <div class="text-white text-opacity-60">TTD Learning Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="5" class="d-none d-md-flex justify-center align-center fade-in-up">
          <!-- Hero image or illustration -->
          <v-img
            src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            max-width="500"
            class="rounded-xl elevation-10"
            style="border: 8px solid rgba(255,255,255,0.1);"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="accent"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      
      <!-- Scroll indicator -->
      <div class="text-center d-none d-md-block" style="position: absolute; bottom: 30px; left: 0; right: 0;">
        <v-btn
          icon="mdi-chevron-down"
          variant="text"
          color="white"
          size="large"
          @click="$emit('navigate', 'services')"
          class="animate-bounce"
        ></v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes scrollClients {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.client-scroller {
  animation: scrollClients 20s linear infinite;
}

.client-scroller:hover {
  animation-play-state: paused;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Make sure the scrollable container doesn't overflow on mobile */
@media (max-width: 600px) {
  .client-marquee-container {
    width: 100%;
    overflow: hidden;
  }
}
</style>