// Define Vue components for our website
const AppHeader = {
  props: {
    theme: String,
    menuItems: Array
  },
  template: `
    <v-app-bar app :elevation="2" :class="{ 'border-bottom': true, 'border-light': theme === 'light', 'border-dark': theme === 'dark' }">
      <v-container class="d-flex align-center px-4 py-0">
        <!-- Logo -->
        <a href="#" class="text-decoration-none">
          <div class="d-flex align-center">
            <v-avatar color="primary" size="36" class="mr-2">
              <span class="text-white font-weight-bold">V</span>
            </v-avatar>
            <span class="text-h6 font-weight-bold">
              <span class="text-primary">veralake</span>.digital
            </span>
          </div>
        </a>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            variant="text"
            :href="item.url"
            class="mx-1"
            @click.prevent="$emit('navigate', item.url.substring(1))"
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
  `
};

const AppNavDrawer = {
  props: {
    drawer: Boolean,
    menuItems: Array
  },
  emits: ['update:drawer', 'navigate', 'open-calendly'],
  computed: {
    drawerModel: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('update:drawer', value);
      }
    }
  },
  methods: {
    navigateTo(url) {
      this.$emit('navigate', url.substring(1));
      this.$emit('update:drawer', false);
    }
  },
  template: `
    <v-navigation-drawer v-model="drawerModel" temporary>
      <v-list>
        <v-list-item>
          <v-list-item-title class="text-h6">
            <v-avatar color="primary" size="36" class="mr-2">
              <span class="text-white font-weight-bold">V</span>
            </v-avatar>
            <span class="font-weight-bold">
              <span class="text-primary">veralake</span>.digital
            </span>
          </v-list-item-title>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :value="item.title"
          @click="navigateTo(item.url)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item>
          <v-btn
            block
            color="primary"
            @click="$emit('open-calendly')"
          >
            <v-icon start>mdi-calendar-clock</v-icon>
            Book a Call
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn
            block
            color="success"
            href="tel:+14706293981"
          >
            <v-icon start>mdi-phone</v-icon>
            Call Now
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  `
};

// Add more components here as needed

// Export the components to be used in main.js
window.AppComponents = {
  AppHeader,
  AppNavDrawer
};