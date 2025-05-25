// Import components (this will be handled by our script tag inclusions)
// All components are defined in components.js

// Initialize Vue Application
const app = Vue.createApp({
  components: {
    AppHeader,
    AppNavDrawer,
    HeroSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    BlogSection,
    FaqSection,
    ContactSection
  },
  data() {
    return {
      menuItems: [
        { title: "Home", url: "#hero" },
        { title: "Services", url: "#services" },
        { title: "Work", url: "#portfolio" },
        { title: "Testimonials", url: "#testimonials" },
        { title: "Blog", url: "#blog" },
        { title: "FAQ", url: "#faq" },
        { title: "Contact", url: "#contact" },
      ],
      services: [
        {
          icon: "mdi-web",
          title: "Web Development",
          description: "Custom websites built to engage your audience and drive conversions.",
          features: [
            "Responsive design for all devices",
            "SEO optimized for better rankings",
            "Fast loading and performance",
            "User-friendly interfaces"
          ]
        },
        {
          icon: "mdi-cellphone-link",
          title: "Mobile Apps",
          description: "Native and cross-platform mobile applications for iOS and Android.",
          features: [
            "Intuitive user experience",
            "Seamless offline functionality",
            "Push notification integration",
            "App store optimization"
          ]
        },
        {
          icon: "mdi-cart-outline",
          title: "E-Commerce",
          description: "Online stores that drive sales and provide great shopping experiences.",
          features: [
            "Secure payment processing",
            "Inventory management",
            "Customer account portals",
            "Analytics and reporting"
          ]
        },
        {
          icon: "mdi-chart-line",
          title: "Digital Marketing",
          description: "Data-driven marketing strategies to grow your online presence.",
          features: [
            "Search engine optimization",
            "Social media campaigns",
            "Email marketing",
            "Content creation"
          ]
        },
        {
          icon: "mdi-palette",
          title: "UI/UX Design",
          description: "Beautiful, functional designs that engage and convert visitors.",
          features: [
            "User research and testing",
            "Wireframing and prototyping",
            "Visual design and branding",
            "Conversion rate optimization"
          ]
        },
        {
          icon: "mdi-server-network",
          title: "Cloud Solutions",
          description: "Scalable cloud infrastructure and DevOps for reliable applications.",
          features: [
            "AWS, Azure, and Google Cloud",
            "Serverless architecture",
            "Continuous integration/deployment",
            "Performance monitoring"
          ]
        }
      ],
      projects: [
        {
          image: "https://placehold.co/600x400/4f46e5/ffffff?text=AFS+Travelers",
          category: "Web Development",
          title: "AFS Travelers Portal",
          description: "A custom booking platform for travel enthusiasts with integrated payment processing and user accounts."
        },
        {
          image: "https://placehold.co/600x400/4f46e5/ffffff?text=Tara+Whalen+Law",
          category: "Mobile App",
          title: "Tara Whalen Law",
          description: "Legal consultation booking app with document upload and secure client communications."
        },
        {
          image: "https://placehold.co/600x400/4f46e5/ffffff?text=Mux+Blank",
          category: "E-Commerce",
          title: "Mux Blank Store",
          description: "Fashion e-commerce platform with advanced filtering, wishlist functionality, and integrated marketing tools."
        },
        {
          image: "https://placehold.co/600x400/4f46e5/ffffff?text=BCS+Bulbls",
          category: "UI/UX Design",
          title: "BCS Bulbls Dashboard",
          description: "Analytics dashboard redesign with improved data visualization and user experience."
        },
        {
          image: "https://placehold.co/600x400/4f46e5/ffffff?text=TTD+Learning",
          category: "Digital Marketing",
          title: "TTD Learning Platform",
          description: "Content marketing strategy and implementation for an online education platform."
        }
      ],
      testimonials: [
        {
          quote: "Working with Veralake Digital transformed our business. Their team delivered a website that not only looks great but also converts visitors into customers consistently.",
          name: "Sarah Johnson",
          position: "CEO, AFS Travelers",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
          quote: "The mobile app Veralake built for our law firm has significantly streamlined our client consultation process. It's intuitive, secure, and our clients love it.",
          name: "Michael Whalen",
          position: "Partner, Tara Whalen Law",
          avatar: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
          quote: "Their attention to detail and technical expertise is unmatched. Our e-commerce platform has seen a 40% increase in sales since launching the new site.",
          name: "David Chen",
          position: "Founder, Mux Blank",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
          quote: "Veralake's digital marketing strategies helped us reach our target audience effectively. Their data-driven approach delivered measurable results within months.",
          name: "Lisa Thomas",
          position: "Marketing Director, TTD Learning",
          avatar: "https://randomuser.me/api/portraits/women/45.jpg"
        }
      ],
      blogPosts: [
        {
          image: "https://placehold.co/400x250/4f46e5/ffffff?text=Web+Design+Trends",
          category: "Web Development",
          date: "May 15, 2025",
          readTime: "5 min read",
          title: "7 Web Design Trends That Will Dominate in 2025",
          excerpt: "Discover the cutting-edge design trends that are shaping the digital landscape this year and how to implement them in your website."
        },
        {
          image: "https://placehold.co/400x250/4f46e5/ffffff?text=Content+Strategy",
          category: "Digital Marketing",
          date: "May 8, 2025",
          readTime: "8 min read",
          title: "How to Create a Content Strategy That Drives Results",
          excerpt: "Learn the essential components of a successful content marketing strategy and how to measure its impact on your business goals."
        },
        {
          image: "https://placehold.co/400x250/4f46e5/ffffff?text=E-commerce+Tips",
          category: "E-Commerce",
          date: "April 30, 2025",
          readTime: "6 min read",
          title: "Optimizing Your E-commerce Checkout for Maximum Conversions",
          excerpt: "Practical tips to reduce cart abandonment and create a frictionless checkout experience that boosts your conversion rates."
        }
      ],
      faqItems: [
        {
          question: "What services does Veralake Digital offer?",
          answer: "We provide comprehensive digital solutions including web development, mobile app development, e-commerce, UI/UX design, digital marketing, and cloud solutions. Our team can handle projects of any size, from simple websites to complex enterprise applications."
        },
        {
          question: "How long does it take to build a website?",
          answer: "The timeline varies depending on the complexity of the project. A simple informational website might take 2-4 weeks, while a complex e-commerce platform or custom web application could take 2-4 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
        },
        {
          question: "What is your development process?",
          answer: "Our process includes discovery (understanding your goals and requirements), planning (creating wireframes and project roadmap), design (creating visual mockups), development (building the actual product), testing (ensuring everything works perfectly), launch, and ongoing support and maintenance."
        },
        {
          question: "Do you offer website maintenance services?",
          answer: "Yes, we offer ongoing maintenance and support packages to keep your digital products secure, up-to-date, and performing optimally. These can include regular updates, security monitoring, performance optimization, content updates, and technical support."
        },
        {
          question: "How much does a website or app cost?",
          answer: "The cost depends on the scope and complexity of your project. We provide custom quotes based on your specific requirements after an initial consultation. We're transparent about our pricing and work with you to find solutions that fit your budget while meeting your business goals."
        },
        {
          question: "What technologies do you use?",
          answer: "We use modern, industry-standard technologies that provide the best performance, security, and scalability. This includes frameworks like Vue.js, React, Angular, Node.js, Laravel, and platforms like WordPress, Shopify, and custom solutions. We select the technology stack based on what's most appropriate for your specific project."
        }
      ],
      darkMode: false,
      isScrolled: false,
      mobileMenuOpen: false,
      showCalendly: false,
      calendlyService: '',
      notification: {
        show: false,
        message: '',
        color: 'success',
        timer: null
      },
      showCookieConsent: false
    };
  },
  methods: {
    scrollToSection(sectionId) {
      this.closeMobileMenu();
      
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        this.trackEvent('navigation', 'scroll', sectionId);
      }
    },
    
    toggleTheme() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
      document.documentElement.classList.toggle('dark', this.darkMode);
      this.trackEvent('theme', 'toggle', this.darkMode ? 'dark' : 'light');
    },
    
    toggleMobileMenu(isOpen) {
      this.mobileMenuOpen = isOpen;
      document.body.style.overflow = isOpen ? 'hidden' : '';
    },
    
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    
    openCalendlyModal(service = '') {
      this.calendlyService = service;
      this.showCalendly = true;
      document.body.style.overflow = 'hidden';
      this.trackEvent('calendly', 'open', service || 'general');
      
      this.$nextTick(() => {
        this.initCalendly();
      });
    },
    
    closeCalendlyModal() {
      this.showCalendly = false;
      document.body.style.overflow = '';
      this.trackEvent('calendly', 'close');
      
      // Clean up Calendly embed
      const calendlyEmbed = document.getElementById('calendly-embed');
      if (calendlyEmbed) {
        calendlyEmbed.innerHTML = '';
      }
    },
    
    initCalendly() {
      const calendlyEmbed = document.getElementById('calendly-embed');
      if (!calendlyEmbed) return;
      
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        if (window.Calendly) {
          calendlyEmbed.innerHTML = '';
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/veralake/consultation',
            parentElement: calendlyEmbed,
            prefill: {
              customAnswers: {
                a1: this.calendlyService
              }
            }
          });
        }
      };
    },
    
    showNotification(message, color = 'success') {
      // Clear any existing timer
      if (this.notification.timer) {
        clearTimeout(this.notification.timer);
      }
      
      this.notification = {
        show: true,
        message,
        color,
        timer: setTimeout(() => {
          this.hideNotification();
        }, 5000)
      };
    },
    
    hideNotification() {
      this.notification.show = false;
      if (this.notification.timer) {
        clearTimeout(this.notification.timer);
        this.notification.timer = null;
      }
    },
    
    acceptCookies() {
      this.showCookieConsent = false;
      localStorage.setItem('cookiesAccepted', 'true');
      this.trackEvent('cookies', 'accept');
      
      // Initialize analytics after consent
      this.initAnalytics();
    },
    
    declineCookies() {
      this.showCookieConsent = false;
      localStorage.setItem('cookiesAccepted', 'false');
      this.trackEvent('cookies', 'decline');
    },
    
    initAnalytics() {
      const hasAcceptedCookies = localStorage.getItem('cookiesAccepted') === 'true';
      if (hasAcceptedCookies) {
        this.initGA();
      }
    },
    
    trackEvent(action, category, label) {
      const hasAcceptedCookies = localStorage.getItem('cookiesAccepted') === 'true';
      if (hasAcceptedCookies && typeof window.gtag === 'function') {
        window.gtag('event', action, {
          'event_category': category,
          'event_label': label
        });
      }
    },
    
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    
    initGA() {
      // Get Google Analytics Measurement ID from the API
      fetch('/api/ga-id')
        .then(response => response.json())
        .then(data => {
          const measurementId = data.measurementId;
          
          if (!measurementId) {
            console.warn('Google Analytics Measurement ID is missing. Analytics will not be initialized.');
            return;
          }
          
          // Add Google Analytics script to the head
          const script1 = document.createElement('script');
          script1.async = true;
          script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
          document.head.appendChild(script1);
          
          // Initialize gtag
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', measurementId);
          
          window.gtag = gtag;
        })
        .catch(error => {
          console.error('Failed to initialize Google Analytics:', error);
        });
    }
  },
  mounted() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      this.darkMode = true;
      document.documentElement.classList.add('dark');
    }
    
    // Check for cookie consent
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === null) {
      this.showCookieConsent = true;
    } else if (cookiesAccepted === 'true') {
      // Initialize analytics if cookies were previously accepted
      this.initAnalytics();
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', this.handleScroll);
    
    // Initialize scroll position
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    
    // Clear notification timer if it exists
    if (this.notification.timer) {
      clearTimeout(this.notification.timer);
    }
  }
});

// Mount the Vue application
app.mount('#app');