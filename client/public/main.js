// Create Vue application data
const appData = {
  menuItems: [
    { title: "Home", url: "#home" },
    { title: "Services", url: "#services" },
    { title: "Portfolio", url: "#portfolio" },
    { title: "Testimonials", url: "#testimonials" },
    { title: "Blog", url: "#blog" },
    { title: "Contact", url: "#contact" },
  ],
  services: [
    {
      icon: "mdi-web",
      color: "primary",
      title: "Web Development",
      description:
        "Custom websites and web applications designed to engage users and drive conversions.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: "mdi-cellphone",
      color: "success",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android Apps",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
      ],
    },
    {
      icon: "mdi-trending-up",
      color: "accent",
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that increase visibility and drive targeted traffic.",
      features: [
        "SEO & Content Marketing",
        "Social Media Management",
        "PPC Advertising",
        "Email Marketing",
      ],
    },
    {
      icon: "mdi-palette",
      color: "info",
      title: "Brand Identity",
      description:
        "Comprehensive branding solutions that communicate your unique value proposition.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Messaging",
      ],
    },
    {
      icon: "mdi-chart-line",
      color: "warning",
      title: "Analytics & Insights",
      description:
        "Data-driven insights that help you understand your customers and optimize your digital presence.",
      features: [
        "Performance Tracking",
        "User Behavior Analysis",
        "Conversion Optimization",
        "Custom Reporting",
      ],
    },
    {
      icon: "mdi-robot",
      color: "error",
      title: "Automation Services",
      description:
        "Custom automation solutions that streamline workflows and increase operational efficiency.",
      features: [
        "Business Process Automation",
        "Marketing & Sales Automation",
        "Custom Workflow Development",
        "Integration with Existing Systems",
      ],
    },
  ],
  projects: [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Web Development",
      title: "E-commerce Platform",
      description:
        "A fully responsive e-commerce platform with integrated payment systems and inventory management.",
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      category: "Mobile App",
      title: "Health & Fitness App",
      description:
        "A feature-rich mobile application for tracking health metrics and workout routines.",
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Web Development",
      title: "Financial Dashboard",
      description:
        "An interactive dashboard providing real-time financial insights and analytics.",
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      category: "Brand Identity",
      title: "Restaurant Rebranding",
      description:
        "Complete brand identity redesign for a chain of upscale restaurants.",
    },
    {
      image: "https://images.unsplash.com/photo-1560472355-536de3962603",
      category: "Digital Marketing",
      title: "Product Launch Campaign",
      description:
        "Multi-channel marketing campaign for a new tech product launch.",
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      category: "Web Development",
      title: "Educational Platform",
      description:
        "Interactive learning platform with courses, quizzes, and progress tracking.",
    },
  ],
  testimonials: [
    {
      quote:
        "Working with Veralake Digital transformed our online presence completely. Their strategic approach and attention to detail exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CEO, InnovateTech",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      quote:
        "The Veralake team delivered our mobile app on time and on budget. Their expertise in UX design made a significant difference in user adoption.",
      name: "Michael Chen",
      position: "Product Manager, NexGen",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      quote:
        "Our e-commerce sales increased by 87% after Veralake redesigned our website and implemented their digital marketing strategy.",
      name: "Emma Davis",
      position: "Marketing Director, StyleHouse",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      quote:
        "The team at Veralake Digital has been instrumental in our digital transformation journey. Their technical expertise is matched by their business acumen.",
      name: "James Wilson",
      position: "CTO, Elevate Solutions",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ],
  blogPosts: [
    {
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      category: "Digital Marketing",
      date: "May 15, 2023",
      readTime: "5 min read",
      title: "10 SEO Strategies That Actually Work in 2023",
      excerpt:
        "Discover the most effective SEO techniques that are driving results in today's digital landscape.",
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      category: "Web Development",
      date: "April 28, 2023",
      readTime: "7 min read",
      title: "The Future of Web Development: Trends to Watch",
      excerpt:
        "Explore emerging technologies and methodologies that are shaping the future of web development.",
    },
    {
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e",
      category: "UI/UX Design",
      date: "April 10, 2023",
      readTime: "6 min read",
      title: "Creating User-Centered Experiences That Convert",
      excerpt:
        "Learn how to design digital experiences that not only delight users but also drive business results.",
    },
  ],
  faqItems: [
    {
      question: "What services does Veralake Digital offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, mobile app development, digital marketing, brand identity design, UI/UX design, automation services, and analytics implementation.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline specific to your project.",
    },
    {
      question: "Do you work with clients remotely?",
      answer:
        "Yes, we have successfully completed projects with clients from around the world. We use collaborative tools and regular video conferences to ensure smooth communication regardless of location.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer both fixed-price and time-and-materials pricing models depending on the nature of your project. We provide detailed proposals after understanding your specific requirements during our discovery phase.",
    },
    {
      question:
        "Do you provide ongoing support after the project is completed?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. These can include regular updates, security monitoring, content updates, and performance optimization.",
    },
  ],
};

// Create Vuetify instance with modern color palette
const vuetify = Vuetify.createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#FF5864", // Vibrant coral/red
          secondary: "#202738", // Dark blue
          accent: "#83DECF", // Mint/teal
          background: "#F5F7FA", // Off-white
          surface: "#FFFFFF", // White
          error: "#EB5757", // Red
          info: "#64D2DE", // Cyan
          success: "#3FC380", // Green
          warning: "#FFBA49", // Amber
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#FF7A8B", // Lighter coral/red
          secondary: "#344267", // Lighter dark blue
          accent: "#9CEEE1", // Lighter mint/teal
          background: "#121929", // Very dark blue
          surface: "#202738", // Dark blue
          error: "#FF8A8A", // Lighter red
          info: "#87E5F2", // Lighter cyan
          success: "#65D89B", // Lighter green
          warning: "#FFCF75", // Lighter amber
        },
      },
    },
    variations: {
      colors: ["primary", "secondary", "accent"],
      lighten: 3,
      darken: 3,
    },
  },
});

// Initialize Vue app
const app = Vue.createApp({
  data() {
    return {
      theme: "light",
      drawer: false, // Menu closed by default
      showCookieConsent: false,
      isCalendlyModalOpen: false,
      isCalendlyLoaded: false,
      selectedBookingOption: null,
      bookingOptions: [
        {
          id: "strategy",
          name: "Marketing Strategy Session",
          url: "https://calendly.com/veralake-digital/marketing-strategy",
          duration: "15 min",
          description:
            "Quick session to discuss your marketing strategy needs and challenges.",
        },
        {
          id: "analytics",
          name: "Free Analytics Setup Call",
          url: "https://calendly.com/veralake-digital/analytics-setup",
          duration: "30 min",
          description:
            "Discuss how to set up analytics for your business and extract valuable insights.",
        },
        {
          id: "consultation",
          name: "Marketing Consultation",
          url: "https://calendly.com/veralake-digital/consultation",
          duration: "30 min",
          description:
            "In-depth consultation about your marketing and digital presence.",
        },
        {
          id: "meeting",
          name: "30 Minute Meeting",
          url: "https://calendly.com/veralake-digital/30min",
          duration: "30 min",
          description:
            "General meeting to discuss your business needs and how we can help.",
        },
      ],
      activeSection: "home",
      ...appData,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify?.display?.xs || false;
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        this.drawer = false;
      }
    },

    acceptCookies() {
      localStorage.setItem("cookies-accepted", "true");
      this.showCookieConsent = false;

      // Reload analytics after accepting cookies
      fetch("/api/ga-id")
        .then((response) => response.json())
        .then((data) => {
          if (data.measurementId) {
            gtag("config", data.measurementId);
          }
        });
    },

    declineCookies() {
      localStorage.setItem("cookies-accepted", "false");
      this.showCookieConsent = false;
    },

    openCalendlyModal(optionId) {
      this.isCalendlyModalOpen = true;

      // Set the selected booking option if specified
      if (optionId) {
        const option = this.bookingOptions.find((opt) => opt.id === optionId);
        this.selectedBookingOption = option || this.bookingOptions[0];
      } else {
        // Default to first option if none specified
        this.selectedBookingOption = this.bookingOptions[0];
      }

      // Track event in Google Analytics
      if (localStorage.getItem("cookies-accepted") === "true") {
        gtag("event", "open_calendly", {
          event_category: "engagement",
          event_label: this.selectedBookingOption?.id || "booking",
        });
      }

      // Load the Calendly widget after a short delay
      setTimeout(() => {
        // Load Calendly script if not already loaded
        if (!window.Calendly) {
          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          script.onload = () => this.initCalendly();
          document.head.appendChild(script);
        } else {
          this.initCalendly();
        }
      }, 300);
    },

    selectBookingOption(option) {
      this.selectedBookingOption = option;
      this.isCalendlyLoaded = false;
      this.initCalendly();

      // Track option selection in Google Analytics
      if (localStorage.getItem("cookies-accepted") === "true") {
        gtag("event", "select_booking_type", {
          event_category: "booking",
          event_label: option.id,
        });
      }
    },

    goToCalendly(option) {
      this.selectedBookingOption = option;

      // Track in Google Analytics
      if (localStorage.getItem("cookies-accepted") === "true") {
        gtag("event", "calendly_booking", {
          event_category: "conversion",
          event_label: option.id,
        });
      }

      // Open Calendly in a new tab
      window.open(option.url, "_blank");

      // Close the modal
      this.closeCalendlyModal();
    },

    initCalendly() {
      // Get the container element
      const container = document.querySelector(".calendly-inline-widget");
      if (!container) return;

      // Only proceed if we have a booking option selected
      if (!this.selectedBookingOption) return;

      // Clear any existing content
      container.innerHTML = "";

      // Set container height
      container.style.height = "630px";
      container.style.minWidth = "320px";

      // Initialize Calendly widget with the selected booking option
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: this.selectedBookingOption.url,
          parentElement: container,
        });

        this.isCalendlyLoaded = true;
      }
    },

    closeCalendlyModal() {
      this.isCalendlyModalOpen = false;
    },

    trackEvent(action, category, label) {
      if (localStorage.getItem("cookies-accepted") === "true") {
        gtag("event", action, {
          event_category: category,
          event_label: label,
        });
      }
    },

    handleScroll() {
      const sections = [
        "home",
        "services",
        "portfolio",
        "testimonials",
        "blog",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    },

    // Calculate position for the navigation indicator
    getNavIndicatorPosition() {
      // If there's no active section, don't show the indicator
      if (!this.activeSection) return { display: "none" };

      // Find the active menu item in the DOM
      const activeItem = document.querySelector(
        `.hidden-sm-and-down .v-btn.nav-active`,
      );
      if (!activeItem) return { display: "none" };

      // Get the bounding rectangle of the active item
      const rect = activeItem.getBoundingClientRect();

      // Calculate the offset from the left of the page
      const parentRect = activeItem
        .closest(".v-container")
        .getBoundingClientRect();
      const offsetLeft = rect.left - parentRect.left;

      // Return the style object for the indicator
      return {
        display: "block",
        width: `${rect.width - 16}px`,
        left: `${offsetLeft + 8}px`,
      };
    },
  },

  mounted() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.theme = savedTheme;
    }

    // Check if cookies have been accepted
    const cookiesAccepted = localStorage.getItem("cookies-accepted");
    if (!cookiesAccepted) {
      this.showCookieConsent = true;
    }

    // Setup scroll event listener for active section tracking
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();

    // Track initial page view if cookies are accepted
    if (cookiesAccepted === "true") {
      fetch("/api/ga-id")
        .then((response) => response.json())
        .then((data) => {
          if (data.measurementId) {
            gtag("config", data.measurementId, {
              page_path: window.location.pathname,
            });
          }
        });
    }
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  template: `
    <v-app :theme="theme">
      <!-- Modern Navigation Bar -->
      <v-app-bar 
        :color="theme === 'light' ? 'white' : 'surface'" 
        elevation="1"
        height="72"
        class="border-bottom mobile-nav-fix"
        :class="theme === 'light' ? 'border-light' : 'border-dark'"
      >
        <v-container class="d-flex align-center">
          <!-- Logo -->
          <div class="d-flex align-center">
            <v-avatar
              color="primary"
              size="42"
              class="mr-3"
              style="font-family: 'Space Grotesk', sans-serif;"
            >
              <span class="text-white font-weight-bold text-h6">V</span>
            </v-avatar>
            <v-app-bar-title>
              <span class="text-primary font-weight-bold text-h6 text-lowercase">veralake</span>
              <span class="font-weight-bold text-lowercase">.digital</span>
            </v-app-bar-title>
          </div>
          
          <v-spacer></v-spacer>
          
          <!-- Desktop Navigation -->
          <div class="hidden-sm-and-down d-flex align-center">
            <v-btn 
              v-for="item in menuItems" 
              :key="item.title" 
              variant="text"
              class="font-weight-medium mx-1"
              :class="{ 
                'nav-active': activeSection === item.url.substring(1),
                'text-primary': activeSection === item.url.substring(1)
              }"
              rounded="lg"
              @click="scrollToSection(item.url.substring(1))"
            >
              {{ item.title }}
            </v-btn>
            
            <!-- Book a Call Button -->
            <v-btn 
              color="primary" 
              class="ml-4 font-weight-bold" 
              rounded="pill" 
              elevation="1"
              @click="openCalendlyModal"
            >
              <v-icon start>mdi-calendar-clock</v-icon>
              Book a Call
            </v-btn>
            
            <!-- Phone Contact Menu -->
            <v-menu
              transition="slide-y-transition"
              location="bottom"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  variant="tonal"
                  class="ml-2 rounded-pill"
                  v-bind="props"
                >
                  <v-icon>mdi-phone</v-icon>
                </v-btn>
              </template>
              <v-card min-width="200">
                <v-card-text class="pa-4">
                  <div class="d-flex flex-column gap-2">
                    <v-btn
                      block
                      color="primary"
                      variant="flat"
                      href="tel:+14706293981"
                      class="mb-2"
                      @click="trackEvent('phone_call', 'contact', 'navbar')"
                    >
                      <v-icon start>mdi-phone</v-icon>
                      Call Now
                    </v-btn>
                    <v-btn
                      block
                      color="primary"
                      variant="outlined"
                      href="sms:+14706293981"
                      @click="trackEvent('text_message', 'contact', 'navbar')"
                    >
                      <v-icon start>mdi-message</v-icon>
                      Send Text
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-menu>
            
            <!-- Theme Toggle -->
            <v-btn 
              icon 
              variant="text" 
              class="ml-2" 
              @click="toggleTheme"
              :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
            >
              <v-icon v-if="theme === 'light'">mdi-weather-night</v-icon>
              <v-icon v-else>mdi-weather-sunny</v-icon>
            </v-btn>
          </div>
          
          <!-- Mobile Navigation Toggle -->
          <div class="d-flex d-md-none align-center">
            <!-- Mobile Menu Toggle -->
            <v-btn 
              icon 
              color="primary"
              variant="tonal"
              size="large"
              class="mobile-menu-btn"
              @click="drawer = !drawer"
            >
              <v-icon size="large">mdi-menu</v-icon>
            </v-btn>
          </div>
        </v-container>
        
        <!-- Animated indicator for active nav item (desktop only) -->
        <div class="nav-indicator-container d-none d-md-block">
          <div 
            class="nav-indicator" 
            :style="getNavIndicatorPosition()"
          ></div>
        </div>
      </v-app-bar>
      
      <style>
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
        
        .nav-indicator-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          overflow: hidden;
        }
        
        .nav-indicator {
          position: absolute;
          bottom: 0;
          height: 3px;
          background-color: #FF5864;
          transition: all 0.3s ease;
          border-radius: 3px 3px 0 0;
        }
        
        .nav-active {
          position: relative;
        }
        
        /* Mobile fixes */
        @media (max-width: 768px) {
          .v-navigation-drawer {
            top: 0 !important;
            height: 100% !important;
            z-index: 2000 !important;
          }
          
          .mobile-menu-btn {
            font-size: 24px !important;
          }
          
          .v-application {
            padding-top: 0 !important;
          }
          
          /* Fix spacing */
          #home {
            padding-top: 72px !important; 
          }
          
          /* Make sure elements don't get cut off */
          .client-marquee-container {
            padding: 0 16px;
            margin: 0 -16px;
            overflow-x: hidden;
          }
        }
      </style>
      
      <!-- Mobile Navigation Menu -->
      <div id="mobileDrawer" 
           class="mobile-nav-overlay" 
           v-if="drawer" 
           @click="drawer = false"
      ></div>
      
      <!-- Custom Mobile Navigation -->
      <div id="mobileMenu" 
           class="mobile-menu" 
           :class="{ 'open': drawer }"
           v-cloak
      >
        <div class="mobile-menu-header">
          <div class="d-flex align-center px-4 py-3">
            <v-avatar color="primary" size="36" class="mr-3">
              <span class="text-white font-weight-bold">V</span>
            </v-avatar>
            <div>
              <span class="text-primary font-weight-bold text-h6 text-lowercase">veralake</span>
              <span class="font-weight-bold text-lowercase">.digital</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon @click="drawer = false" color="primary">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-divider></v-divider>
        </div>
        
        <div class="mobile-menu-content">
          <v-list>
            <v-list-item 
              v-for="item in menuItems" 
              :key="item.title"
              @click="scrollToSection(item.url.substring(1)); drawer = false;"
              class="mobile-nav-item"
            >
              <v-list-item-title class="mobile-nav-title">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
          
          <v-divider class="my-3"></v-divider>
          
          <div class="px-4 py-2">
            <v-btn 
              color="primary" 
              block 
              class="mb-3"
              @click="openCalendlyModal(); drawer = false;"
            >
              <v-icon start>mdi-calendar-clock</v-icon>
              Book a Call
            </v-btn>
            
            <v-btn 
              color="success" 
              block 
              class="mb-3"
              href="tel:+14706293981"
              @click="trackEvent('phone_call', 'contact', 'drawer')"
            >
              <v-icon start>mdi-phone</v-icon>
              Call Now
            </v-btn>
            
            <v-btn 
              :color="theme === 'light' ? 'grey-darken-3' : 'grey-lighten-3'" 
              block
              variant="outlined"
              @click="toggleTheme"
            >
              <v-icon start>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
              {{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
            </v-btn>
          </div>
        </div>
      </div>
      
      <style>
        [v-cloak] {
          display: none;
        }
        
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1999;
          display: block;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 85%;
          max-width: 300px;
          height: 100%;
          background: #fff;
          z-index: 2000;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }
        
        .mobile-menu.open {
          transform: translateX(0);
        }
        
        .dark .mobile-menu {
          background: #202738;
        }
        
        .mobile-menu-content {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0;
        }
        
        .mobile-nav-item {
          padding: 12px 24px;
          cursor: pointer;
        }
        
        .mobile-nav-item:hover {
          background: rgba(255, 88, 100, 0.1);
        }
        
        .mobile-nav-title {
          font-size: 16px;
          font-weight: 500;
        }
      </style>

      <v-main>
        <!-- Hero Section - Modern & Eye-catching -->
        <section id="home" class="pt-0">
          <v-container fluid class="pa-0">
            <v-row no-gutters>
              <v-col cols="12">
                <v-sheet 
                  height="100vh" 
                  max-height="800px" 
                  class="d-flex align-center position-relative overflow-hidden"
                  :style="{ 
                    background: theme === 'light' 
                      ? 'linear-gradient(135deg, rgba(255, 88, 100, 0.97) 0%, rgba(249, 58, 111, 0.97) 100%)' 
                      : 'linear-gradient(135deg, rgba(32, 39, 56, 0.97) 0%, rgba(18, 25, 41, 0.97) 100%)'
                  }"
                >
                  <!-- Background elements for visual interest -->
                  <div class="position-absolute" style="top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 0;">
                    <div style="position: absolute; top: -10%; right: -10%; width: 50%; height: 50%; border-radius: 50%; background: rgba(131, 222, 207, 0.2);"></div>
                    <div style="position: absolute; bottom: -20%; left: -10%; width: 70%; height: 70%; border-radius: 50%; background: rgba(131, 222, 207, 0.1);"></div>
                    <div style="position: absolute; top: 40%; right: 20%; width: 200px; height: 200px; background: rgba(255, 255, 255, 0.05);"></div>
                    <div style="position: absolute; top: 70%; left: 30%; width: 150px; height: 150px; background: rgba(255, 255, 255, 0.05);"></div>
                  </div>
                  
                  <v-container class="position-relative" style="z-index: 1;">
                    <v-row class="align-center">
                      <v-col cols="12" md="7" class="text-center text-md-left fade-in-up">
                        <div class="mb-4">
                          <span class="text-white text-overline font-weight-bold" style="letter-spacing: 2px;">DIGITAL INNOVATION AGENCY</span>
                        </div>
                        <h1 class="text-h2 text-md-h1 font-weight-bold text-white mb-4" style="line-height: 1.2;">
                          Transform Your <span class="text-accent">Digital</span> Presence
                        </h1>
                        <p class="text-h6 text-white mb-8 opacity-80" style="max-width: 600px; margin: 0 auto; margin-bottom: 2rem; line-height: 1.6;">
                          We help ambitious businesses grow through innovative digital solutions that deliver measurable results and exceptional user experiences.
                        </p>
                        <div class="d-flex flex-column flex-sm-row justify-center justify-md-start">
                          <v-btn 
                            size="x-large" 
                            color="accent" 
                            class="text-secondary font-weight-bold px-8 py-3 mr-sm-4 mb-4 mb-sm-0" 
                            elevation="4"
                            rounded="pill"
                            @click="scrollToSection('services')"
                          >
                            <v-icon start>mdi-lightbulb-on</v-icon>
                            Explore Services
                          </v-btn>
                          <v-btn 
                            size="x-large" 
                            variant="outlined" 
                            color="white"
                            class="font-weight-bold px-8 py-3"
                            rounded="pill"
                            @click="openCalendlyModal"
                          >
                            <v-icon start>mdi-calendar-clock</v-icon>
                            Free Consultation
                          </v-btn>
                        </div>
                        
                        <!-- Client Showcase -->
                        <div class="mt-16 mb-16" style="position: relative; z-index: 5;">
                          <h3 class="text-white text-h5 font-weight-bold mb-6">BRANDS I'VE HELPED</h3>
                          
                          <!-- Client Marquee Effect (Responsive) -->
                          <div class="client-marquee-container">
                            <div class="position-relative" style="overflow: hidden;">
                              <!-- Desktop version -->
                              <div ref="clientScroller" class="client-scroller d-none d-md-flex" style="animation: scrollClients 20s linear infinite; height: 100px;">
                                <!-- First set of clients -->
                                <v-card 
                                  v-for="(client, index) in [
                                    {name: 'AFS Travelers', icon: 'mdi-airplane', color: 'info'},
                                    {name: 'Tara Whalen Law', icon: 'mdi-scale-balance', color: 'success'},
                                    {name: 'Mux Blank', icon: 'mdi-music', color: 'warning'},
                                    {name: 'BCS Bulbls', icon: 'mdi-lightbulb', color: 'accent'},
                                    {name: 'TTD Learning Solutions', icon: 'mdi-school', color: 'error'}
                                  ]" 
                                  :key="'first-' + index"
                                  class="rounded-lg py-3 px-4 d-flex align-center mx-3" 
                                  color="white"
                                  elevation="3"
                                  width="200"
                                  min-width="200"
                                  @click="trackEvent('client_click', 'reference', client.name)"
                                  ripple
                                  hover
                                >
                                  <v-avatar :color="client.color" class="mr-3" size="42">
                                    <v-icon color="white" size="medium">{{ client.icon }}</v-icon>
                                  </v-avatar>
                                  <span class="font-weight-bold text-primary text-body-1">{{ client.name }}</span>
                                </v-card>
                                
                                <!-- Duplicate set for seamless scrolling (desktop) -->
                                <v-card 
                                  v-for="(client, index) in [
                                    {name: 'AFS Travelers', icon: 'mdi-airplane', color: 'info'},
                                    {name: 'Tara Whalen Law', icon: 'mdi-scale-balance', color: 'success'},
                                    {name: 'Mux Blank', icon: 'mdi-music', color: 'warning'},
                                    {name: 'BCS Bulbls', icon: 'mdi-lightbulb', color: 'accent'},
                                    {name: 'TTD Learning Solutions', icon: 'mdi-school', color: 'error'}
                                  ]" 
                                  :key="'second-' + index"
                                  class="rounded-lg py-3 px-4 d-flex align-center mx-3" 
                                  color="white"
                                  elevation="3"
                                  width="200"
                                  min-width="200"
                                  @click="trackEvent('client_click', 'reference', client.name)"
                                  ripple
                                  hover
                                >
                                  <v-avatar :color="client.color" class="mr-3" size="42">
                                    <v-icon color="white" size="medium">{{ client.icon }}</v-icon>
                                  </v-avatar>
                                  <span class="font-weight-bold text-primary text-body-1">{{ client.name }}</span>
                                </v-card>
                              </div>
                              
                              <!-- Mobile version with single stacked cards -->
                              <div class="d-md-none px-4">
                                <v-slide-group
                                  show-arrows
                                  class="mb-4"
                                >
                                  <v-slide-group-item
                                    v-for="(client, index) in [
                                      {name: 'AFS Travelers', icon: 'mdi-airplane', color: 'info'},
                                      {name: 'Tara Whalen Law', icon: 'mdi-scale-balance', color: 'success'},
                                      {name: 'Mux Blank', icon: 'mdi-music', color: 'warning'},
                                      {name: 'BCS Bulbls', icon: 'mdi-lightbulb', color: 'accent'},
                                      {name: 'TTD Learning Solutions', icon: 'mdi-school', color: 'error'}
                                    ]"
                                    :key="index"
                                  >
                                    <div class="pa-2">
                                      <v-card 
                                        class="rounded-lg py-2 px-3 d-flex align-center" 
                                        color="white"
                                        elevation="2"
                                        width="180"
                                        @click="trackEvent('client_click', 'reference', client.name)"
                                      >
                                        <v-avatar :color="client.color" class="mr-2" size="32">
                                          <v-icon color="white" size="small">{{ client.icon }}</v-icon>
                                        </v-avatar>
                                        <span class="font-weight-bold text-primary text-body-2">{{ client.name }}</span>
                                      </v-card>
                                    </div>
                                  </v-slide-group-item>
                                </v-slide-group>
                                
                                <!-- Mobile swipe indicator -->
                                <div class="text-center mb-2">
                                  <span class="text-caption text-white d-flex align-center justify-center">
                                    <v-icon size="small" color="white" class="mr-1">mdi-gesture-swipe-horizontal</v-icon>
                                    Swipe to see more
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <style>
                            @keyframes scrollClients {
                              0% {
                                transform: translateX(0);
                              }
                              100% {
                                transform: translateX(-100%);
                              }
                            }
                            .client-scroller {
                              animation: scrollClients 20s linear infinite;
                            }
                            .client-scroller:hover {
                              animation-play-state: paused;
                            }
                            /* Make sure the scrollable container doesn't overflow on mobile */
                            @media (max-width: 600px) {
                              .client-marquee-container {
                                width: 100%;
                                overflow: hidden;
                              }
                            }
                          </style>
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
                        @click="scrollToSection('services')"
                        class="animate-bounce"
                        style="animation: bounce 2s infinite;"
                      ></v-btn>
                    </div>
                  </v-container>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
          
          <!-- Floating stats section -->
          <v-container class="stats-container" style="margin-top: 80px; position: relative; z-index: 1;">
            <v-card
              class="rounded-xl mx-auto"
              max-width="1200"
              elevation="10"
              :color="theme === 'light' ? 'surface' : 'surface'"
            >
              <v-row no-gutters>
                <v-col 
                  v-for="(stat, i) in [
                    {icon: 'mdi-account-group', value: '100+', label: 'Satisfied Clients'},
                    {icon: 'mdi-check-decagram', value: '95%', label: 'Client Retention'},
                    {icon: 'mdi-lightning-bolt', value: '150+', label: 'Projects Completed'},
                    {icon: 'mdi-chart-line', value: '3X', label: 'Average ROI'}
                  ]"
                  :key="i"
                  cols="6" sm="6" md="3"
                  class="text-center py-6 px-4"
                  :class="{'border-right': i < 3}"
                >
                  <v-icon size="x-large" color="primary" class="mb-3">{{ stat.icon }}</v-icon>
                  <h3 class="text-h4 font-weight-bold mb-1">{{ stat.value }}</h3>
                  <p class="text-body-2">{{ stat.label }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
          
          <style>
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-10px);
              }
              60% {
                transform: translateY(-5px);
              }
            }
            .border-right {
              border-right: 1px solid rgba(var(--secondary), 0.1);
            }
            @media (max-width: 768px) {
              .border-right:nth-child(odd) {
                border-right: 1px solid rgba(var(--secondary), 0.1);
              }
              .border-right:nth-child(even) {
                border-right: none;
              }
            }
          </style>
        </section>

        <!-- Services Section - Modern & Engaging -->
        <section id="services" class="py-16 mt-8">
          <v-container>
            <!-- Section Header -->
            <v-row class="mb-12">
              <v-col cols="12" md="6" class="d-flex flex-column justify-center">
                <div>
                  <span class="text-overline font-weight-bold text-primary" style="letter-spacing: 2px;">OUR EXPERTISE</span>
                  <h2 class="text-h3 text-md-h2 font-weight-bold mt-2 mb-4">
                    Innovative <span class="text-primary">Digital Services</span> That Drive Growth
                  </h2>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <p class="text-body-1" style="line-height: 1.8;">
                  At veralake.digital, we deliver comprehensive digital solutions tailored to your unique needs. Our team of experts combines creativity, technology, and strategic thinking to help your business thrive in today's competitive landscape.
                </p>
              </v-col>
            </v-row>
            
            <!-- Services Grid -->
            <v-row>
              <v-col 
                v-for="(service, index) in services" 
                :key="service.title" 
                cols="12" sm="6" lg="4"
                class="mb-8"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card 
                    v-bind="props"
                    height="100%" 
                    class="d-flex flex-column"
                    rounded="lg"
                    :elevation="isHovering ? 12 : 3"
                    style="overflow: hidden; transition: all 0.3s ease;"
                    :style="isHovering ? 'transform: translateY(-10px);' : ''"
                  >
                    <!-- Card header with gradient background -->
                    <div 
                      class="service-card-header pa-6"
                      :style="{
                        background: isHovering 
                          ? 'var(--gradient-primary)' 
                          : theme === 'light' 
                            ? 'white' 
                            : 'var(--gradient-dark)',
                        borderBottom: isHovering 
                          ? 'none' 
                          : '2px solid ' + (index % 3 === 0 ? '#FF5864' : index % 3 === 1 ? '#83DECF' : '#FFBA49')
                      }"
                    >
                      <div class="d-flex align-center mb-4">
                        <v-avatar
                          :color="isHovering ? 'white' : service.color"
                          :class="isHovering ? 'text-primary' : 'text-white'"
                          size="56"
                          class="mr-4"
                        >
                          <v-icon size="28">{{ service.icon }}</v-icon>
                        </v-avatar>
                        <h3 
                          class="text-h5 font-weight-bold mb-0"
                          :class="isHovering ? 'text-white' : ''"
                        >
                          {{ service.title }}
                        </h3>
                      </div>
                      <p 
                        class="text-body-1 mb-0"
                        :class="isHovering ? 'text-white' : ''"
                      >
                        {{ service.description }}
                      </p>
                    </div>
                    
                    <!-- Card content -->
                    <div 
                      class="pa-6 flex-grow-1 d-flex flex-column"
                      :style="{ background: isHovering ? 'rgba(var(--primary), 0.03)' : '' }"
                    >
                      <h4 class="text-subtitle-1 font-weight-bold mb-4">Key Features:</h4>
                      <v-list class="bg-transparent pa-0 mb-6 flex-grow-1">
                        <v-list-item 
                          v-for="feature in service.features" 
                          :key="feature"
                          density="compact"
                          class="px-0 mb-2"
                        >
                          <template v-slot:prepend>
                            <v-icon 
                              :color="service.color"
                              size="small"
                              class="mr-2"
                            >
                              mdi-check-circle
                            </v-icon>
                          </template>
                          <v-list-item-title>{{ feature }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                      
                      <v-divider class="mb-4"></v-divider>
                      
                      <v-btn 
                        :color="service.color" 
                        class="text-white mt-auto px-6"
                        rounded="pill"
                        elevation="2"
                        @click="openCalendlyModal"
                      >
                        Request Service <v-icon end class="ml-1">mdi-arrow-right</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
            
            <!-- CTA Banner -->
            <v-row class="mt-8">
              <v-col cols="12">
                <v-card
                  class="text-center pa-8 rounded-xl"
                  :style="{
                    background: 'var(--gradient-primary)',
                    color: 'white'
                  }"
                  elevation="10"
                >
                  <h3 class="text-h4 font-weight-bold mb-4">Not Sure Which Service You Need?</h3>
                  <p class="text-body-1 mb-8 mx-auto" style="max-width: 700px; opacity: 0.9;">
                    Our team of experts will help you determine the right solution for your business. 
                    Schedule a free consultation and let's discuss your specific needs.
                  </p>
                  <v-btn
                    color="white"
                    size="x-large"
                    class="text-primary px-8"
                    rounded="pill"
                    elevation="3"
                    @click="openCalendlyModal"
                  >
                    <v-icon start>mdi-calendar-check</v-icon>
                    Book Your Free Consultation
                  </v-btn>
                </v-card>
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
        <v-card class="rounded-lg overflow-hidden">
          <v-card-title class="text-h5 bg-primary text-white pa-4 d-flex align-center">
            <v-icon start class="mr-2">mdi-calendar-clock</v-icon>
            <span>Schedule a Consultation</span>
            <v-spacer></v-spacer>
            <v-btn icon variant="text" color="white" @click="closeCalendlyModal" aria-label="Close dialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          
          <!-- Simple Modal Content -->
          <v-card-text class="pa-4">
            <div class="text-center mb-8">
              <h3 class="text-h5 font-weight-bold mb-3">Choose Your Consultation Type</h3>
              <p class="text-body-1">Select the type of consultation that best fits your needs</p>
            </div>
            
            <v-row>
              <!-- Marketing Strategy Session -->
              <v-col cols="12" sm="6" class="mb-4">
                <v-card class="h-100" elevation="2">
                  <v-card-item :class="{'bg-primary text-white': selectedBookingOption?.id === 'strategy'}">
                    <template v-slot:prepend>
                      <v-avatar color="primary" class="text-white">
                        <v-icon>mdi-chart-line</v-icon>
                      </v-avatar>
                    </template>
                    <v-card-title>Marketing Strategy Session</v-card-title>
                    <v-card-subtitle :class="{'text-white': selectedBookingOption?.id === 'strategy'}">
                      15 min • One-on-One
                    </v-card-subtitle>
                  </v-card-item>
                  <v-card-text class="pt-4">
                    <p class="text-body-2 mb-4">
                      Quick session to discuss your marketing strategy needs and challenges.
                    </p>
                    <v-btn 
                      block 
                      color="primary" 
                      @click="goToCalendly(bookingOptions[0])"
                      variant="flat"
                    >
                      <v-icon start>mdi-calendar</v-icon>
                      Schedule Now
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <!-- Free Analytics Setup Call -->
              <v-col cols="12" sm="6" class="mb-4">
                <v-card class="h-100" elevation="2">
                  <v-card-item :class="{'bg-info text-white': selectedBookingOption?.id === 'analytics'}">
                    <template v-slot:prepend>
                      <v-avatar color="info" class="text-white">
                        <v-icon>mdi-google-analytics</v-icon>
                      </v-avatar>
                    </template>
                    <v-card-title>Free Analytics Setup Call</v-card-title>
                    <v-card-subtitle :class="{'text-white': selectedBookingOption?.id === 'analytics'}">
                      30 min • One-on-One
                    </v-card-subtitle>
                  </v-card-item>
                  <v-card-text class="pt-4">
                    <p class="text-body-2 mb-4">
                      Discuss how to set up analytics for your business and extract valuable insights.
                    </p>
                    <v-btn 
                      block 
                      color="info" 
                      @click="goToCalendly(bookingOptions[1])"
                      variant="flat"
                    >
                      <v-icon start>mdi-calendar</v-icon>
                      Schedule Now
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <!-- Marketing Consultation -->
              <v-col cols="12" sm="6" class="mb-4">
                <v-card class="h-100" elevation="2">
                  <v-card-item :class="{'bg-accent text-white': selectedBookingOption?.id === 'consultation'}">
                    <template v-slot:prepend>
                      <v-avatar color="accent" class="text-white">
                        <v-icon>mdi-briefcase</v-icon>
                      </v-avatar>
                    </template>
                    <v-card-title>Marketing Consultation</v-card-title>
                    <v-card-subtitle :class="{'text-white': selectedBookingOption?.id === 'consultation'}">
                      30 min • One-on-One
                    </v-card-subtitle>
                  </v-card-item>
                  <v-card-text class="pt-4">
                    <p class="text-body-2 mb-4">
                      In-depth consultation about your marketing and digital presence.
                    </p>
                    <v-btn 
                      block 
                      color="accent" 
                      @click="goToCalendly(bookingOptions[2])"
                      variant="flat"
                    >
                      <v-icon start>mdi-calendar</v-icon>
                      Schedule Now
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <!-- 30 Minute Meeting -->
              <v-col cols="12" sm="6" class="mb-4">
                <v-card class="h-100" elevation="2">
                  <v-card-item :class="{'bg-secondary text-white': selectedBookingOption?.id === 'meeting'}">
                    <template v-slot:prepend>
                      <v-avatar color="secondary" class="text-white">
                        <v-icon>mdi-calendar-clock</v-icon>
                      </v-avatar>
                    </template>
                    <v-card-title>30 Minute Meeting</v-card-title>
                    <v-card-subtitle :class="{'text-white': selectedBookingOption?.id === 'meeting'}">
                      30 min • One-on-One
                    </v-card-subtitle>
                  </v-card-item>
                  <v-card-text class="pt-4">
                    <p class="text-body-2 mb-4">
                      General meeting to discuss your business needs and how we can help.
                    </p>
                    <v-btn 
                      block 
                      color="secondary" 
                      @click="goToCalendly(bookingOptions[3])"
                      variant="flat"
                    >
                      <v-icon start>mdi-calendar</v-icon>
                      Schedule Now
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            
            <!-- Direct Calendly Link -->
            <div class="text-center mt-6 pt-2" style="border-top: 1px solid rgba(var(--primary), 0.1);">
              <p class="text-body-2 mb-2">Prefer to book directly on Calendly?</p>
              <v-btn
                variant="outlined"
                color="primary"
                size="small"
                href="https://calendly.com/veralake-digital"
                target="_blank"
                rel="noopener noreferrer"
                @click="trackEvent('open_calendly_external', 'booking', 'external_link')"
              >
                <v-icon start size="small">mdi-open-in-new</v-icon>
                Open Calendly
              </v-btn>
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
  `,
});

// Mount the app
app.use(vuetify).mount("#app");
