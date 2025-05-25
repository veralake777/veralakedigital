// Google Analytics initialization
function initGA() {
  const measurementId = 'G-PLACEHOLDER'; // This will be replaced with your actual measurement ID
  
  // Check if cookies are accepted
  const cookiesAccepted = localStorage.getItem('cookies-accepted');
  if (cookiesAccepted !== 'true') {
    return;
  }
  
  // Create and add Google Analytics script
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', measurementId);
  
  // Add Google Analytics script to the head
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

// Track page views
function trackPageView(path) {
  if (!window.gtag) return;
  window.gtag('config', 'G-PLACEHOLDER', {
    page_path: path
  });
}

// Track events
function trackEvent(action, category, label, value) {
  if (!window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
}

// Data for the application
const appData = {
  menuItems: [
    { title: 'Home', url: '#home' },
    { title: 'Services', url: '#services' },
    { title: 'Portfolio', url: '#portfolio' },
    { title: 'Testimonials', url: '#testimonials' },
    { title: 'Blog', url: '#blog' },
    { title: 'Contact', url: '#contact' }
  ],
  services: [
    {
      icon: 'mdi-web',
      color: 'primary',
      title: 'Web Development',
      description: 'Custom websites and web applications designed to engage users and drive conversions.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
    },
    {
      icon: 'mdi-cellphone',
      color: 'success',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: 'mdi-trending-up',
      color: 'accent',
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that increase visibility and drive targeted traffic.',
      features: ['SEO & Content Marketing', 'Social Media Management', 'PPC Advertising', 'Email Marketing']
    },
    {
      icon: 'mdi-palette',
      color: 'info',
      title: 'Brand Identity',
      description: 'Comprehensive branding solutions that communicate your unique value proposition.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Messaging']
    },
    {
      icon: 'mdi-chart-line',
      color: 'warning',
      title: 'Analytics & Insights',
      description: 'Data-driven insights that help you understand your customers and optimize your digital presence.',
      features: ['Performance Tracking', 'User Behavior Analysis', 'Conversion Optimization', 'Custom Reporting']
    },
    {
      icon: 'mdi-cloud',
      color: 'error',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and solutions that provide reliability and security.',
      features: ['Cloud Migration', 'AWS & Azure Services', 'Database Management', 'DevOps Integration']
    }
  ],
  projects: [
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      category: 'Web Development',
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with integrated payment systems and inventory management.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      category: 'Mobile App',
      title: 'Health & Fitness App',
      description: 'A feature-rich mobile application for tracking health metrics and workout routines.'
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      category: 'Web Development',
      title: 'Financial Dashboard',
      description: 'An interactive dashboard providing real-time financial insights and analytics.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
      category: 'Brand Identity',
      title: 'Restaurant Rebranding',
      description: 'Complete brand identity redesign for a chain of upscale restaurants.'
    },
    {
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603',
      category: 'Digital Marketing',
      title: 'Product Launch Campaign',
      description: 'Multi-channel marketing campaign for a new tech product launch.'
    },
    {
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      category: 'Web Development',
      title: 'Educational Platform',
      description: 'Interactive learning platform with courses, quizzes, and progress tracking.'
    }
  ],
  testimonials: [
    {
      quote: "Working with Veralake Digital transformed our online presence completely. Their strategic approach and attention to detail exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CEO, InnovateTech",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "The Veralake team delivered our mobile app on time and on budget. Their expertise in UX design made a significant difference in user adoption.",
      name: "Michael Chen",
      position: "Product Manager, NexGen",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "Our e-commerce sales increased by 87% after Veralake redesigned our website and implemented their digital marketing strategy.",
      name: "Emma Davis",
      position: "Marketing Director, StyleHouse",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      quote: "The team at Veralake Digital has been instrumental in our digital transformation journey. Their technical expertise is matched by their business acumen.",
      name: "James Wilson",
      position: "CTO, Elevate Solutions",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ],
  blogPosts: [
    {
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      category: "Digital Marketing",
      date: "May 15, 2023",
      readTime: "5 min read",
      title: "10 SEO Strategies That Actually Work in 2023",
      excerpt: "Discover the most effective SEO techniques that are driving results in today's digital landscape."
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      category: "Web Development",
      date: "April 28, 2023",
      readTime: "7 min read",
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Explore emerging technologies and methodologies that are shaping the future of web development."
    },
    {
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e",
      category: "UI/UX Design",
      date: "April 10, 2023",
      readTime: "6 min read",
      title: "Creating User-Centered Experiences That Convert",
      excerpt: "Learn how to design digital experiences that not only delight users but also drive business results."
    }
  ],
  faqItems: [
    {
      question: "What services does Veralake Digital offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, digital marketing, brand identity design, UI/UX design, cloud solutions, and analytics implementation."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline specific to your project."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes, we have successfully completed projects with clients from around the world. We use collaborative tools and regular video conferences to ensure smooth communication regardless of location."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer both fixed-price and time-and-materials pricing models depending on the nature of your project. We provide detailed proposals after understanding your specific requirements during our discovery phase."
    },
    {
      question: "Do you provide ongoing support after the project is completed?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. These can include regular updates, security monitoring, content updates, and performance optimization."
    }
  ]
};

// Create Vue application
const { createApp } = Vue;
const { createVuetify } = Vuetify;

// Create Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1E88E5',   // Blue
          secondary: '#37474F',  // Dark gray-blue
          accent: '#FF6E40',    // Orange
          error: '#F44336',     // Red
          info: '#00BCD4',      // Cyan
          success: '#4CAF50',   // Green
          warning: '#FFC107'    // Amber
        }
      },
      dark: {
        colors: {
          primary: '#42A5F5',   // Lighter blue
          secondary: '#78909C',  // Lighter gray-blue
          accent: '#FF9E80',    // Lighter orange
          error: '#EF5350',     // Lighter red
          info: '#26C6DA',      // Lighter cyan
          success: '#66BB6A',   // Lighter green
          warning: '#FFCA28'    // Lighter amber
        }
      }
    }
  }
});

// Add debugging console messages
console.log('Vue app initialization starting');

// Initialize Vue app
const app = createApp({
  data() {
    console.log('Vue data function executing');
    return {
      theme: 'light',
      drawer: false,
      showCookieConsent: false,
      isCalendlyModalOpen: false,
      isServiceDetailOpen: false,
      selectedService: null,
      activeSection: 'home',
      ...appData
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify?.display?.xs || false;
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
    },
    
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.drawer = false;
      }
    },
    
    acceptCookies() {
      localStorage.setItem('cookies-accepted', 'true');
      this.showCookieConsent = false;
      initGA();
    },
    
    declineCookies() {
      localStorage.setItem('cookies-accepted', 'false');
      this.showCookieConsent = false;
    },
    
    openServiceDetails(service) {
      // This method creates a service landing page experience
      this.selectedService = service;
      this.isServiceDetailOpen = true;
      
      // Track the event
      trackEvent('view_service_details', 'services', service.title);
    },
    
    openCalendlyModal() {
      this.isCalendlyModalOpen = true;
    },
    
    closeCalendlyModal() {
      this.isCalendlyModalOpen = false;
    },
    
    trackEvent(action, category, label) {
      trackEvent(action, category, label);
    },
    
    handleScroll() {
      const sections = ['home', 'services', 'portfolio', 'testimonials', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  },
  
  mounted() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
    }
    
    // Check if cookies have been accepted
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      this.showCookieConsent = true;
    } else if (cookiesAccepted === 'true') {
      initGA();
    }
    
    // Setup scroll event listener for active section tracking
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    
    // Track initial page view
    if (cookiesAccepted === 'true') {
      trackPageView(window.location.pathname);
    }
  },
  
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
});

// Mount the app
app.use(vuetify).mount('#app');

// After app mounted, fetch the actual Google Analytics ID
fetch('/api/ga-id')
  .then(response => response.json())
  .then(data => {
    if (data.measurementId) {
      // Replace placeholder with actual ID
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.textContent.includes('G-PLACEHOLDER')) {
          script.textContent = script.textContent.replace(/G-PLACEHOLDER/g, data.measurementId);
        }
      });
      
      // Re-initialize GA if cookies were accepted
      if (localStorage.getItem('cookies-accepted') === 'true') {
        initGA();
      }
    }
  })
  .catch(error => {
    console.error('Error fetching Google Analytics ID:', error);
  });