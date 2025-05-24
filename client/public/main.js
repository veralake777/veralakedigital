// Create Vue application data
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

// Create Vuetify instance
const vuetify = Vuetify.createVuetify({
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

// Initialize Vue app
const app = Vue.createApp({
  data() {
    return {
      theme: 'light',
      drawer: false,
      showCookieConsent: false,
      isCalendlyModalOpen: false,
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
      
      // Reload analytics after accepting cookies
      fetch('/api/ga-id')
        .then(response => response.json())
        .then(data => {
          if (data.measurementId) {
            gtag('config', data.measurementId);
          }
        });
    },
    
    declineCookies() {
      localStorage.setItem('cookies-accepted', 'false');
      this.showCookieConsent = false;
    },
    
    openCalendlyModal() {
      this.isCalendlyModalOpen = true;
      
      // Track event in Google Analytics
      if (localStorage.getItem('cookies-accepted') === 'true') {
        gtag('event', 'open_calendly', {
          'event_category': 'engagement',
          'event_label': 'booking'
        });
      }
    },
    
    closeCalendlyModal() {
      this.isCalendlyModalOpen = false;
    },
    
    trackEvent(action, category, label) {
      if (localStorage.getItem('cookies-accepted') === 'true') {
        gtag('event', action, {
          'event_category': category,
          'event_label': label
        });
      }
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
    }
    
    // Setup scroll event listener for active section tracking
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    
    // Track initial page view if cookies are accepted
    if (cookiesAccepted === 'true') {
      fetch('/api/ga-id')
        .then(response => response.json())
        .then(data => {
          if (data.measurementId) {
            gtag('config', data.measurementId, {
              'page_path': window.location.pathname
            });
          }
        });
    }
  },
  
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  
  template: `
    <v-app :theme="theme">
      <!-- Navigation -->
      <v-app-bar app :color="theme === 'light' ? 'white' : 'secondary'" elevation="1">
        <v-container class="d-flex align-center">
          <v-app-bar-title class="text-primary font-weight-bold">
            Veralake Digital
          </v-app-bar-title>
          <v-spacer></v-spacer>
          
          <!-- Desktop Navigation -->
          <div class="hidden-sm-and-down">
            <v-btn 
              v-for="item in menuItems" 
              :key="item.title" 
              text 
              class="ml-2"
              :class="{ 'text-primary': activeSection === item.url.substring(1) }"
              @click="scrollToSection(item.url.substring(1))"
            >
              {{ item.title }}
            </v-btn>
            <v-btn color="primary" class="ml-4" @click="openCalendlyModal">Book a Call</v-btn>
            <v-btn icon @click="toggleTheme" class="ml-2">
              <v-icon>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
            </v-btn>
          </div>
          
          <!-- Mobile Navigation Toggle -->
          <div class="hidden-md-and-up">
            <v-btn icon @click="drawer = !drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-app-bar>
      
      <!-- Mobile Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="scrollToSection(item.url.substring(1))"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-divider class="my-2"></v-divider>
          <v-list-item @click="openCalendlyModal">
            <v-list-item-title>Book a Call</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toggleTheme">
            <v-list-item-title>
              {{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <!-- Hero Section -->
        <section id="home" class="pt-16">
          <v-container fluid class="pa-0">
            <v-row no-gutters>
              <v-col cols="12">
                <v-sheet color="primary" class="py-16 px-6 text-center">
                  <v-container>
                    <h1 class="text-h2 font-weight-bold text-white mb-4">
                      Transform Your Digital Presence
                    </h1>
                    <p class="text-h6 text-white mb-8">
                      We help businesses grow through innovative digital solutions that deliver measurable results
                    </p>
                    <v-btn 
                      size="large" 
                      color="white" 
                      class="text-primary mr-4" 
                      @click="scrollToSection('services')"
                    >
                      Our Services
                    </v-btn>
                    <v-btn 
                      size="large" 
                      variant="outlined" 
                      color="white"
                      @click="openCalendlyModal"
                    >
                      Book a Free Consultation
                    </v-btn>
                  </v-container>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Services Section -->
        <section id="services" class="py-16">
          <v-container>
            <v-row>
              <v-col cols="12" class="text-center mb-10">
                <h2 class="text-h3 font-weight-bold mb-3">Our Services</h2>
                <p class="text-subtitle-1 mx-auto" style="max-width: 700px;">
                  Comprehensive digital solutions to help your business thrive in today's competitive landscape
                </p>
              </v-col>

              <v-col 
                v-for="service in services" 
                :key="service.title" 
                cols="12" sm="6" lg="4"
                class="mb-6"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card 
                    v-bind="props"
                    height="100%" 
                    class="pa-6 d-flex flex-column"
                    :elevation="isHovering ? 8 : 2"
                    :class="{ 'bg-primary text-white': isHovering }"
                  >
                    <v-icon 
                      size="x-large" 
                      :color="isHovering ? 'white' : service.color" 
                      class="mb-4"
                    >
                      {{ service.icon }}
                    </v-icon>
                    <h3 class="text-h5 font-weight-bold mb-2">{{ service.title }}</h3>
                    <p class="text-body-1 mb-4">{{ service.description }}</p>
                    <v-list class="bg-transparent pa-0">
                      <v-list-item 
                        v-for="feature in service.features" 
                        :key="feature"
                        :class="{ 'text-white': isHovering }"
                        density="compact"
                        class="px-0"
                      >
                        <template v-slot:prepend>
                          <v-icon 
                            :color="isHovering ? 'white' : 'success'"
                            size="small"
                          >
                            mdi-check-circle
                          </v-icon>
                        </template>
                        {{ feature }}
                      </v-list-item>
                    </v-list>
                    <v-spacer></v-spacer>
                    <v-btn 
                      variant="text" 
                      :color="isHovering ? 'white' : 'primary'" 
                      class="mt-4 align-self-start px-0"
                      @click="openCalendlyModal"
                    >
                      Learn More <v-icon end>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="py-16 bg-grey-lighten-4">
          <v-container>
            <v-row>
              <v-col cols="12" class="text-center mb-10">
                <h2 class="text-h3 font-weight-bold mb-3">Our Work</h2>
                <p class="text-subtitle-1 mx-auto" style="max-width: 700px;">
                  Check out some of our recent projects that delivered exceptional results for our clients
                </p>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col 
                v-for="(project, i) in projects" 
                :key="i" 
                cols="12" sm="6" lg="4"
                class="mb-6"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card 
                    v-bind="props"
                    class="mx-auto overflow-hidden" 
                    max-width="400"
                    :elevation="isHovering ? 8 : 2"
                  >
                    <v-img 
                      height="250" 
                      cover 
                      :src="project.image"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </v-row>
                      </template>
                      <div 
                        v-if="isHovering"
                        class="d-flex flex-column justify-center align-center text-white fill-height"
                        style="background-color: rgba(0,0,0,0.7);"
                      >
                        <v-btn 
                          variant="outlined" 
                          color="white"
                          @click="trackEvent('view_project', 'portfolio', project.title)"
                        >
                          View Details
                        </v-btn>
                      </div>
                    </v-img>
                    <v-card-item>
                      <v-chip 
                        color="primary" 
                        size="small" 
                        class="mb-2"
                      >
                        {{ project.category }}
                      </v-chip>
                      <v-card-title class="px-0 text-h6">{{ project.title }}</v-card-title>
                    </v-card-item>
                    <v-card-text>
                      {{ project.description }}
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Testimonial Section -->
        <section id="testimonials" class="py-16">
          <v-container>
            <v-row>
              <v-col cols="12" class="text-center mb-10">
                <h2 class="text-h3 font-weight-bold mb-3">What Our Clients Say</h2>
                <p class="text-subtitle-1 mx-auto" style="max-width: 700px;">
                  Hear from businesses that we've helped transform with our digital solutions
                </p>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col 
                v-for="(testimonial, i) in testimonials" 
                :key="i" 
                cols="12" md="6" lg="3"
                class="mb-6"
              >
                <v-card class="pa-6 h-100" elevation="3">
                  <v-card-text>
                    <v-icon color="amber" class="mb-4" size="large">mdi-format-quote-open</v-icon>
                    <p class="text-body-1 font-italic mb-6">{{ testimonial.quote }}</p>
                    <v-divider class="mb-4"></v-divider>
                    <div class="d-flex align-center">
                      <v-avatar size="48" class="mr-4">
                        <v-img :src="testimonial.avatar"></v-img>
                      </v-avatar>
                      <div>
                        <p class="text-subtitle-1 font-weight-bold mb-0">{{ testimonial.name }}</p>
                        <p class="text-caption">{{ testimonial.position }}</p>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Blog Section -->
        <section id="blog" class="py-16 bg-grey-lighten-4">
          <v-container>
            <v-row>
              <v-col cols="12" class="text-center mb-10">
                <h2 class="text-h3 font-weight-bold mb-3">Latest Insights</h2>
                <p class="text-subtitle-1 mx-auto" style="max-width: 700px;">
                  Explore our latest articles and stay updated with digital trends
                </p>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col 
                v-for="(post, i) in blogPosts" 
                :key="i" 
                cols="12" md="4"
                class="mb-6"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card 
                    v-bind="props"
                    class="h-100" 
                    :elevation="isHovering ? 8 : 2"
                  >
                    <v-img 
                      height="200" 
                      cover 
                      :src="post.image"
                      class="align-end"
                    >
                      <v-chip 
                        color="primary" 
                        class="ma-2"
                      >
                        {{ post.category }}
                      </v-chip>
                    </v-img>
                    <v-card-item>
                      <div class="d-flex align-center mb-2">
                        <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
                        <span class="text-caption mr-3">{{ post.date }}</span>
                        <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
                        <span class="text-caption">{{ post.readTime }}</span>
                      </div>
                      <v-card-title class="px-0 text-h6">{{ post.title }}</v-card-title>
                    </v-card-item>
                    <v-card-text>
                      {{ post.excerpt }}
                    </v-card-text>
                    <v-card-actions>
                      <v-btn 
                        variant="text" 
                        color="primary"
                        @click="trackEvent('read_blog', 'blog', post.title)"
                      >
                        Read More <v-icon end>mdi-arrow-right</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- FAQ Section -->
        <section class="py-16">
          <v-container>
            <v-row>
              <v-col cols="12" class="text-center mb-10">
                <h2 class="text-h3 font-weight-bold mb-3">Frequently Asked Questions</h2>
                <p class="text-subtitle-1 mx-auto" style="max-width: 700px;">
                  Find answers to common questions about our services and process
                </p>
              </v-col>
              
              <v-col cols="12" md="8" class="mx-auto">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel
                    v-for="(faq, i) in faqItems"
                    :key="i"
                    elevation="0"
                    class="mb-2"
                  >
                    <v-expansion-panel-title class="text-h6">
                      {{ faq.question }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="text-body-1">
                      {{ faq.answer }}
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-16 bg-primary">
          <v-container>
            <v-row>
              <v-col cols="12" md="6" class="text-white">
                <h2 class="text-h3 font-weight-bold mb-6">Ready to Transform Your Business?</h2>
                <p class="text-body-1 mb-8">
                  Let's discuss how we can help you achieve your digital goals. Fill out the form
                  and we'll get back to you within 24 hours, or schedule a call directly using our booking system.
                </p>
                <div class="d-flex align-center mb-4">
                  <v-icon color="white" class="mr-3">mdi-email</v-icon>
                  <span>info@veralake.digital</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="white" class="mr-3">mdi-phone</v-icon>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div class="d-flex align-center mb-8">
                  <v-icon color="white" class="mr-3">mdi-map-marker</v-icon>
                  <span>123 Innovation Drive, San Francisco, CA 94107</span>
                </div>
                
                <v-btn 
                  color="white" 
                  class="text-primary mr-4"
                  size="large"
                  @click="openCalendlyModal"
                >
                  <v-icon start>mdi-calendar</v-icon>
                  Schedule a Call
                </v-btn>
              </v-col>
              
              <v-col cols="12" md="6">
                <v-card class="pa-6">
                  <v-card-title class="text-h5 font-weight-bold mb-6">
                    Get in Touch
                  </v-card-title>
                  <v-form @submit.prevent="trackEvent('contact_submit', 'contact', 'contact_form')">
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="First Name"
                          variant="outlined"
                          required
                          density="comfortable"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Last Name"
                          variant="outlined"
                          required
                          density="comfortable"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field
                      label="Email"
                      variant="outlined"
                      required
                      type="email"
                      density="comfortable"
                    ></v-text-field>
                    <v-text-field
                      label="Phone"
                      variant="outlined"
                      density="comfortable"
                    ></v-text-field>
                    <v-select
                      label="Service You're Interested In"
                      variant="outlined"
                      :items="services.map(s => s.title)"
                      density="comfortable"
                    ></v-select>
                    <v-textarea
                      label="Message"
                      variant="outlined"
                      rows="3"
                      density="comfortable"
                    ></v-textarea>
                    <v-btn
                      color="primary"
                      size="large"
                      block
                      class="mt-4"
                      type="submit"
                    >
                      Submit
                    </v-btn>
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Footer -->
        <v-footer class="bg-secondary py-10">
          <v-container>
            <v-row>
              <v-col cols="12" md="4" class="text-white">
                <h3 class="text-h6 font-weight-bold mb-4">Veralake Digital</h3>
                <p class="text-body-2 mb-4">
                  Innovative digital solutions that help businesses grow and thrive in today's
                  competitive landscape.
                </p>
                <div class="d-flex">
                  <v-btn 
                    v-for="icon in ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']"
                    :key="icon"
                    icon
                    variant="text"
                    color="white"
                    class="ml-0 mr-2"
                    @click="trackEvent('social_click', 'footer', icon)"
                  >
                    <v-icon>{{ icon }}</v-icon>
                  </v-btn>
                </div>
              </v-col>
              
              <v-col cols="12" md="2" class="text-white">
                <h4 class="text-subtitle-1 font-weight-bold mb-4">Services</h4>
                <v-list class="bg-transparent pa-0">
                  <v-list-item
                    v-for="(service, i) in services.slice(0, 4)"
                    :key="i"
                    :title="service.title"
                    class="text-white px-0"
                    density="compact"
                    @click="scrollToSection('services')"
                  ></v-list-item>
                </v-list>
              </v-col>
              
              <v-col cols="12" md="2" class="text-white">
                <h4 class="text-subtitle-1 font-weight-bold mb-4">Company</h4>
                <v-list class="bg-transparent pa-0">
                  <v-list-item
                    v-for="(item, url) in {'About': 'home', 'Portfolio': 'portfolio', 'Blog': 'blog', 'Contact': 'contact'}"
                    :key="item"
                    :title="item"
                    class="text-white px-0"
                    density="compact"
                    @click="scrollToSection(url)"
                  ></v-list-item>
                </v-list>
              </v-col>
              
              <v-col cols="12" md="4" class="text-white">
                <h4 class="text-subtitle-1 font-weight-bold mb-4">Stay Connected</h4>
                <p class="text-body-2 mb-4">
                  Subscribe to our newsletter for the latest industry insights and news.
                </p>
                <div class="d-flex">
                  <v-text-field
                    label="Email"
                    variant="outlined"
                    density="compact"
                    bg-color="white"
                    class="mr-2"
                  ></v-text-field>
                  <v-btn 
                    color="primary"
                    @click="trackEvent('newsletter_signup', 'footer', 'newsletter')"
                  >
                    Subscribe
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            
            <v-divider class="border-opacity-25 mt-6 mb-4"></v-divider>
            
            <div class="d-flex flex-wrap justify-space-between align-center">
              <div class="text-body-2 text-white">
                &copy; {{ new Date().getFullYear() }} Veralake Digital. All Rights Reserved.
              </div>
              <div class="text-body-2 text-white">
                <a href="#" class="text-white text-decoration-none mr-4">Privacy Policy</a>
                <a href="#" class="text-white text-decoration-none">Terms of Service</a>
              </div>
            </div>
          </v-container>
        </v-footer>
      </v-main>
      
      <!-- Calendly Modal -->
      <v-dialog v-model="isCalendlyModalOpen" width="800" persistent>
        <v-card>
          <v-card-title class="text-h5 bg-primary text-white pa-4">
            <span>Schedule a Consultation</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="closeCalendlyModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="pa-0">
            <div class="calendly-inline-widget">
              <!-- Placeholder for actual Calendly embed -->
              <div class="d-flex flex-column align-center justify-center" style="height:600px;">
                <v-icon size="large" color="primary" class="mb-4">mdi-calendar-clock</v-icon>
                <h3 class="text-h5 mb-2">Book Your Free Consultation</h3>
                <p class="text-body-1 text-center mx-4 mb-6">
                  Select a convenient time for a 30-minute strategy call with our team.
                </p>
                <v-btn color="primary" size="large">
                  Open Booking Calendar
                </v-btn>
                <p class="text-caption mt-4 text-center">
                  This would typically open the Calendly scheduling interface
                </p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
      
      <!-- Cookie Consent Banner -->
      <v-snackbar
        v-model="showCookieConsent"
        :timeout="-1"
        location="bottom"
        class="bg-secondary"
      >
        <div class="d-flex flex-column flex-sm-row align-sm-center">
          <div class="mr-4 mb-2 mb-sm-0 text-white">
            We use cookies to enhance your experience and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies.
          </div>
          <div class="d-flex flex-nowrap">
            <v-btn color="primary" variant="flat" class="mr-2" @click="acceptCookies">
              Accept
            </v-btn>
            <v-btn color="white" variant="outlined" @click="declineCookies">
              Decline
            </v-btn>
          </div>
        </div>
      </v-snackbar>
      
      <!-- Back to Top Button -->
      <v-btn
        icon
        color="primary"
        size="large"
        style="position: fixed; bottom: 20px; right: 20px; z-index: 99;"
        @click="scrollToSection('home')"
        elevation="3"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-app>
  `
});

// Mount the app
app.use(vuetify).mount('#app');