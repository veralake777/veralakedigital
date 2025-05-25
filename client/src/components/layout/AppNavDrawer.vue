<template>
  <div class="nav-drawer-backdrop" 
       v-if="isOpen" 
       @click="close">
    <div class="nav-drawer" 
         @click.stop 
         :class="{ 'open': isOpen }">
      <div class="drawer-header">
        <div class="logo">
          <img src="/images/veralake-logo.svg" alt="Veralake Digital" />
        </div>
        <button class="close-btn" @click="close">
          <i class="mdi mdi-close"></i>
        </button>
      </div>
      
      <nav class="drawer-nav">
        <ul class="drawer-nav-links">
          <li v-for="item in menuItems" :key="item.url">
            <a href="#" @click.prevent="navigate(item.url)">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      
      <div class="drawer-actions">
        <button class="theme-toggle" @click="toggleTheme">
          <i :class="['mdi', darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night']"></i>
          <span>{{ darkMode ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
        <button class="consultation-btn" @click="openCalendly">
          Free Consultation
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavDrawer',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    navigate(url) {
      this.$emit('navigate', url)
      this.close()
    },
    toggleTheme() {
      this.$emit('toggle-theme')
    },
    openCalendly() {
      this.$emit('open-calendly')
      this.close()
    }
  }
}
</script>

<style scoped>
.nav-drawer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  display: flex;
  justify-content: flex-end;
}

.nav-drawer {
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: var(--background-color);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.nav-drawer.open {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.drawer-header .logo img {
  height: 32px;
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
}

.drawer-nav {
  flex: 1;
  padding: 1rem 0;
}

.drawer-nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.drawer-nav-links li {
  margin: 0;
}

.drawer-nav-links a {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.drawer-nav-links a:hover {
  background-color: var(--hover-color);
}

.drawer-actions {
  padding: 1rem;
  border-top: 1px solid var(--border-color);
}

.theme-toggle {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--text-color);
  width: 100%;
  padding: 0.75rem 0;
  cursor: pointer;
  text-align: left;
}

.theme-toggle i {
  margin-right: 0.5rem;
  font-size: 1.25rem;
}

.consultation-btn {
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
}
</style>