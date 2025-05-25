<template>
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
</template>

<script>
export default {
  name: 'AppNavDrawer',
  props: {
    drawer: {
      type: Boolean,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    }
  },
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
  }
}
</script>