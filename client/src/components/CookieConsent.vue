<template>
  <v-slide-y-transition>
    <div class="cookie-consent">
      <v-container>
        <div class="d-flex flex-column flex-md-row align-md-center justify-space-between">
          <div class="mb-4 mb-md-0 mr-md-8">
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-cookie</v-icon>
              <h3 class="font-weight-bold">Cookie Consent</h3>
            </div>
            <p class="text-body-2 text-medium-emphasis">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div class="d-flex flex-wrap gap-2">
            <v-btn
              variant="tonal"
              @click="$emit('settings')"
              size="small"
            >
              Cookie Settings
            </v-btn>
            <v-btn
              variant="tonal"
              @click="$emit('decline')"
              size="small"
            >
              Decline All
            </v-btn>
            <v-btn
              color="primary"
              @click="$emit('accept')"
              size="small"
            >
              Accept All
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </v-slide-y-transition>
</template>

<script setup lang="ts">
defineEmits(['accept', 'decline', 'settings'])
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
}

:deep(.v-theme--dark) .cookie-consent {
  background-color: rgba(30, 30, 45, 0.9);
}
</style>
