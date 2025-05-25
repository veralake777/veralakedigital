<template>
  <header :class="['app-header', {'header-scrolled': isScrolled}]">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="/images/veralake-logo.svg" alt="Veralake Digital" />
        </router-link>
      </div>
      
      <nav class="desktop-nav">
        <ul class="nav-links">
          <li v-for="item in menuItems" :key="item.url">
            <a href="#" @click.prevent="navigate(item.url)">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <button class="theme-toggle" @click="toggleTheme">
          <i :class="['mdi', darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night']"></i>
        </button>
        <button class="consultation-btn" @click="openCalendly">
          Free Consultation
        </button>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <i :class="['mdi', mobileMenuOpen ? 'mdi-close' : 'mdi-menu']"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    darkMode: {
      type: Boolean,
      default: false
    },
    isScrolled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    navigate(url) {
      this.$emit('navigate', url)
    },
    toggleTheme() {
      this.$emit('toggle-theme')
    },
    openCalendly() {
      this.$emit('open-calendly')
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      this.$emit('toggle-mobile-menu', this.mobileMenuOpen)
    }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  background-color: transparent;
}

.header-scrolled {
  background-color: var(--background-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.logo img {
  height: 40px;
}

.desktop-nav {
  display: none;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.header-actions {
  display: flex;
  align-items: center;
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
}

.consultation-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: none;
}

.mobile-menu-btn {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
  
  .consultation-btn {
    display: block;
  }
  
  .mobile-menu-btn {
    display: none;
  }
}
</style>