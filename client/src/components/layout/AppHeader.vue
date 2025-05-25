<template>
  <v-app-bar app :elevation="2" :class="{ 'border-bottom': true, 'border-light': theme === 'light', 'border-dark': theme === 'dark' }">
    <v-container class="d-flex align-center px-4 py-0">
      <!-- Logo -->
      <router-link to="/" class="text-decoration-none">
        <div class="d-flex align-center">
          <v-avatar color="primary" size="36" class="mr-2">
            <span class="text-white font-weight-bold">V</span>
          </v-avatar>
          <span class="text-h6 font-weight-bold">
            <span class="text-primary">veralake</span>.digital
          </span>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <!-- Desktop Navigation -->
      <div class="d-none d-md-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          variant="text"
          :to="item.url"
          class="mx-1"
          @click="$emit('navigate', item.url.substring(1))"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- Right section with theme toggle and call to action -->
      <div class="d-flex align-center">
        <v-btn
          icon
          variant="text"
          @click="$emit('toggle-theme')"
          class="mr-1"
        >
          <v-icon>
            {{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
          </v-icon>
        </v-btn>

        <v-btn
          color="primary"
          class="ml-2 d-none d-md-flex"
          @click="$emit('open-calendly')"
        >
          <v-icon start>mdi-calendar-clock</v-icon>
          Book a Call
        </v-btn>

        <!-- Mobile menu button -->
        <v-app-bar-nav-icon
          class="d-flex d-md-none"
          @click="$emit('toggle-drawer')"
        ></v-app-bar-nav-icon>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    theme: {
      type: String,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.border-bottom {
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.border-light {
  border-color: rgba(0, 0, 0, 0.1);
}

.border-dark {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>