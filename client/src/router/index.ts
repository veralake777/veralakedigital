import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Veralake Digital | Modern Solutions for Growing Businesses'
    }
  },
  // Redirect any non-existing routes to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Handle anchor links
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // Return to saved position if available
    if (savedPosition) {
      return savedPosition
    }
    // Default scroll to top
    return { top: 0 }
  }
})

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Veralake Digital'
  next()
})

export default router
