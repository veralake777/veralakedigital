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
      painPoints: [
        {
          title: "Outdated Website",
          description: "Your current website looks outdated, loads slowly, and doesn't represent your brand well, potentially driving away potential customers."
        },
        {
          title: "Poor Mobile Experience",
          description: "Your website doesn't work well on mobile devices, causing frustration for the majority of users who browse on smartphones."
        },
        {
          title: "Low Conversion Rates",
          description: "Your website isn't effectively converting visitors into leads or customers due to poor user experience or unclear calls-to-action."
        }
      ]
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
      painPoints: [
        {
          title: "Missing Mobile Presence",
          description: "Your business lacks a mobile app presence, missing out on opportunities to engage with customers on their preferred devices."
        },
        {
          title: "Outdated Mobile App",
          description: "Your existing app has poor reviews, crashes frequently, or lacks the features and design quality users expect in 2025."
        },
        {
          title: "Platform Limitations",
          description: "Your current app only works on one platform (iOS or Android), limiting your reach to potential customers."
        }
      ]
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
      painPoints: [
        {
          title: "Low Search Rankings",
          description: "Your business is invisible in search results, making it difficult for potential customers to find you online."
        },
        {
          title: "Ineffective Ad Spend",
          description: "You're spending money on digital ads but not seeing meaningful returns or clear data on performance."
        },
        {
          title: "Inconsistent Social Presence",
          description: "Your social media accounts are inactive or inconsistent, missing opportunities to engage with your audience."
        }
      ]
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
      painPoints: [
        {
          title: "Inconsistent Brand Image",
          description: "Your brand looks different across various platforms and materials, creating confusion and reducing recognition."
        },
        {
          title: "Dated Visual Identity",
          description: "Your logo and visual identity feel outdated and don't effectively communicate your brand's current values and offerings."
        },
        {
          title: "Weak Brand Positioning",
          description: "Your brand fails to differentiate from competitors, making it difficult for customers to understand why they should choose you."
        }
      ]
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
      painPoints: [
        {
          title: "Data Blind Spots",
          description: "You're making business decisions without clear data, relying on gut feelings rather than actionable insights."
        },
        {
          title: "Overwhelming Information",
          description: "You have access to analytics but struggle to interpret the data or extract meaningful business insights."
        },
        {
          title: "Disconnected Data Sources",
          description: "Your data exists in multiple platforms and systems, making it impossible to see the complete customer journey."
        }
      ]
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
      painPoints: [
        {
          title: "Manual Process Bottlenecks",
          description: "Your team spends hours on repetitive tasks that could be automated, wasting valuable time and resources."
        },
        {
          title: "Disconnected Systems",
          description: "Your business tools don't talk to each other, requiring manual data entry and leading to errors and inefficiencies."
        },
        {
          title: "Inconsistent Follow-ups",
          description: "Your team struggles to consistently follow up with leads and customers, resulting in missed opportunities and revenue."
        }
      ]
    },
  ],
  projects: [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Web Development",
      title: "E-commerce Platform",
      description:
        "A fully responsive e-commerce platform with integrated payment systems and inventory management.",
      client: "Fashion Retailer",
      timeline: "12 weeks",
      technologies: ["Vue.js", "Node.js", "Stripe API", "MongoDB"],
      challenge: "Our client needed a modern e-commerce platform that could handle their growing product catalog while providing a seamless shopping experience across all devices.",
      solution: "We built a fully responsive e-commerce solution with an intuitive admin dashboard for inventory management. The platform features secure payment processing through Stripe, real-time inventory updates, and detailed analytics.",
      results: [
        "43% increase in mobile conversion rate",
        "28% reduction in cart abandonment",
        "Sales increased by 35% in the first quarter after launch"
      ],
      testimonial: "The new platform transformed our online business. The user experience is outstanding and the admin tools make managing our inventory effortless.",
      gallery: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        "https://images.unsplash.com/photo-1603322327760-9186c297e1f8"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      category: "Mobile App",
      title: "Health & Fitness App",
      description:
        "A feature-rich mobile application for tracking health metrics and workout routines.",
      client: "Wellness Startup",
      timeline: "16 weeks",
      technologies: ["React Native", "Firebase", "HealthKit API", "Google Fit API"],
      challenge: "Our client wanted to create a fitness app that would stand out in a crowded market by offering personalized workout plans and nutrition tracking in one integrated platform.",
      solution: "We developed a cross-platform mobile application with customizable workout routines, nutrition tracking, and progress visualization. The app syncs with wearable devices and includes social features for community support.",
      results: [
        "100,000+ downloads in the first month",
        "4.8/5 average rating on app stores",
        "Featured in the 'New Apps We Love' section on the App Store"
      ],
      testimonial: "Veralake Digital delivered beyond our expectations. The app has received amazing feedback from users and continues to grow rapidly.",
      gallery: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        "https://images.unsplash.com/photo-1550345332-09e3ac987658",
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Web Development",
      title: "Financial Dashboard",
      description:
        "An interactive dashboard providing real-time financial insights and analytics.",
      client: "Investment Firm",
      timeline: "10 weeks",
      technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Finance APIs"],
      challenge: "The client needed a comprehensive dashboard to visualize complex financial data and enable better decision-making for their investment team.",
      solution: "We created an interactive dashboard with real-time data visualization, customizable reports, and predictive analytics. The platform integrates with multiple financial data sources and provides instant insights through intuitive charts and graphs.",
      results: [
        "Decision-making time reduced by 40%",
        "Analytical errors decreased by 35%",
        "Team productivity improved by 28%"
      ],
      testimonial: "This dashboard has revolutionized how we analyze market data. The visualizations make complex information immediately understandable.",
      gallery: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      category: "Brand Identity",
      title: "Restaurant Rebranding",
      description:
        "Complete brand identity redesign for a chain of upscale restaurants.",
      client: "Upscale Restaurant Chain",
      timeline: "8 weeks",
      technologies: ["Adobe Creative Suite", "Brand Strategy", "Print & Digital Media"],
      challenge: "A restaurant chain with 15+ locations needed a complete brand refresh to appeal to a younger demographic without alienating their loyal customer base.",
      solution: "We developed a comprehensive rebranding strategy including a new logo, color palette, typography, menu design, website, and social media presence. The new brand identity maintained key heritage elements while introducing a more contemporary aesthetic.",
      results: [
        "Social media engagement increased by 67%",
        "Website traffic grew by 45%",
        "20% increase in younger demographic customers"
      ],
      testimonial: "The rebranding perfectly captured our vision of honoring our tradition while moving forward. Our customers love the new look and feel.",
      gallery: [
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
        "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf",
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1560472355-536de3962603",
      category: "Digital Marketing",
      title: "Product Launch Campaign",
      description:
        "Multi-channel marketing campaign for a new tech product launch.",
      client: "Tech Startup",
      timeline: "6 weeks",
      technologies: ["Social Media Advertising", "Email Marketing", "Content Marketing", "Analytics"],
      challenge: "A tech startup needed to build anticipation and drive pre-orders for their innovative new product with a limited marketing budget.",
      solution: "We designed a comprehensive launch strategy utilizing targeted social media campaigns, influencer partnerships, email marketing, and content creation. The campaign focused on demonstrating the product's unique value proposition across multiple channels.",
      results: [
        "Pre-order goal exceeded by 215%",
        "Over 1.5 million social media impressions",
        "Featured in 3 major tech publications"
      ],
      testimonial: "The campaign exceeded all our expectations. The strategy was perfectly executed, and the results speak for themselves.",
      gallery: [
        "https://images.unsplash.com/photo-1560472355-536de3962603",
        "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      category: "Web Development",
      title: "Educational Platform",
      description:
        "Online learning platform with interactive courses and progress tracking.",
      client: "Educational Institution",
      timeline: "14 weeks",
      technologies: ["Vue.js", "Node.js", "MongoDB", "WebRTC", "AWS"],
      challenge: "An educational institution needed to transition to a digital learning environment that would maintain engagement and track student progress effectively.",
      solution: "We developed a comprehensive learning platform with interactive courses, live virtual classrooms, progress tracking, and personalized learning paths. The solution included features for both educators and students, with robust analytics and reporting tools.",
      results: [
        "Student engagement increased by 38%",
        "Course completion rates improved by 45%",
        "Educator time saved on administrative tasks: 15 hours/week"
      ],
      testimonial: "This platform has transformed how we deliver education. The tools for both our educators and students have made learning more accessible and engaging than we thought possible.",
      gallery: [
        "https://images.unsplash.com/photo-1547658719-da2b51169166",
        "https://images.unsplash.com/photo-1588702547919-26089e690ecc",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
      ]
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
      drawer: false,
      showCookieConsent: false,
      isCalendlyModalOpen: false,
      isCalendlyLoaded: false,
      selectedBookingOption: null,
      currentView: 'main', // 'main', 'project-detail', or 'service-landing'
      currentProject: null, // Stores the currently viewed project
      currentService: null, // Stores the currently viewed service
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
    
    viewProjectDetails(project) {
      // Track the event
      this.trackEvent('view_project_details', 'portfolio', project.title);
      
      // Set the current project and change the view
      this.currentProject = project;
      this.currentView = 'project-detail';
      
      // Scroll to top
      window.scrollTo(0, 0);
    },
    
    backToMain() {
      this.currentView = 'main';
      this.currentProject = null;
      this.currentService = null;
      
      // If the user was previously on the portfolio section, scroll back to it
      setTimeout(() => {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    },
    
    viewServiceLanding(service) {
      // Track the event
      this.trackEvent('view_service_landing', 'services', service.title);
      
      // Set the current service and change the view
      this.currentService = service;
      this.currentView = 'service-landing';
      
      // Scroll to top
      window.scrollTo(0, 0);
    },
    
    getSolutionDescription(serviceTitle, feature) {
      // This method provides detailed descriptions for each feature based on the service
      const descriptions = {
        "Web Development": {
          "Responsive Design": "Our responsive websites adapt perfectly to any device, ensuring a seamless user experience that boosts engagement and conversions.",
          "E-commerce Solutions": "We build robust online stores with secure payment processing, inventory management, and a smooth checkout experience.",
          "CMS Integration": "Our content management systems make it easy for you to update your website without technical knowledge or developer assistance.",
          "Performance Optimization": "We optimize your site for lightning-fast loading speeds, improving user experience and search engine rankings."
        },
        "Mobile App Development": {
          "iOS & Android Apps": "We develop native applications for both major platforms, ensuring optimal performance and access to the full user base.",
          "Cross-platform Solutions": "Our cross-platform approach allows you to reach users on multiple devices with a single codebase, saving time and resources.",
          "UI/UX Design": "We create intuitive, visually appealing interfaces that delight users and encourage continued engagement with your app.",
          "App Store Optimization": "We implement proven strategies to improve your app's visibility and download rates in the app stores."
        },
        "Digital Marketing": {
          "SEO & Content Marketing": "We boost your organic visibility through strategic keyword optimization and compelling content that drives qualified traffic.",
          "Social Media Management": "We build and maintain your brand presence across relevant platforms, engaging with your audience and driving conversions.",
          "PPC Advertising": "Our targeted pay-per-click campaigns deliver immediate traffic and conversions with measurable ROI.",
          "Email Marketing": "We create personalized email campaigns that nurture leads, retain customers, and drive repeat business."
        },
        "Brand Identity": {
          "Logo Design": "We create distinctive, memorable logos that capture your brand essence and create instant recognition.",
          "Brand Guidelines": "We develop comprehensive guidelines to ensure consistent application of your visual identity across all touchpoints.",
          "Visual Identity": "We craft a cohesive visual system including colors, typography, and imagery that communicates your brand personality.",
          "Brand Messaging": "We define your brand voice, messaging hierarchy, and key communications to connect with your target audience."
        },
        "Analytics & Insights": {
          "Performance Tracking": "We implement robust tracking systems to monitor all key metrics and provide a clear picture of your digital performance.",
          "User Behavior Analysis": "We analyze how users interact with your digital properties to identify opportunities for improvement and optimization.",
          "Conversion Optimization": "We continuously test and refine your digital assets to increase conversion rates and maximize ROI.",
          "Custom Reporting": "We deliver clear, actionable reports tailored to your specific business goals and KPIs."
        },
        "Automation Services": {
          "Business Process Automation": "We streamline your operations by automating repetitive tasks, reducing errors and freeing your team to focus on strategic work.",
          "Marketing & Sales Automation": "Our automation solutions nurture leads, personalize customer journeys, and increase conversion rates without manual intervention.",
          "Custom Workflow Development": "We build tailored automation workflows that address your specific business challenges and integrate with your existing systems.",
          "Integration with Existing Systems": "We seamlessly connect your current tools and platforms to create a unified, efficient automation ecosystem."
        }
      };
      
      return descriptions[serviceTitle] && descriptions[serviceTitle][feature] 
        ? descriptions[serviceTitle][feature] 
        : 'We provide industry-leading solutions that help you achieve your business goals efficiently and effectively.';
    },
    
    getSolutionImage(serviceTitle) {
      // This method returns appropriate images for each service
      const images = {
        'Web Development': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        'Mobile App Development': 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
        'Digital Marketing': 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
        'Brand Identity': 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f',
        'Analytics & Insights': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        'Automation Services': 'https://images.unsplash.com/photo-1531482615713-2afd69097998'
      };
      
      return images[serviceTitle] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f';
    },
    
    getServiceTestimonial(serviceTitle) {
      // This method returns relevant testimonials for each service
      const testimonials = {
        'Web Development': {
          quote: "Veralake Digital transformed our outdated website into a modern, user-friendly platform that's significantly increased our online conversions. Their attention to detail and focus on performance has made a measurable impact on our business.",
          name: "Michael Chen",
          position: "Marketing Director, TechInnovate",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        'Mobile App Development': {
          quote: "The app Veralake developed for us has received outstanding feedback from users and dramatically improved our customer engagement. Their expertise in both iOS and Android development was invaluable.",
          name: "Sarah Johnson",
          position: "Product Manager, HealthConnect",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        'Digital Marketing': {
          quote: "Since working with Veralake on our digital marketing strategy, we've seen a 215% increase in qualified leads and a significant improvement in our conversion rates. Their data-driven approach delivers real results.",
          name: "David Rodriguez",
          position: "CEO, GrowthLabs",
          avatar: "https://randomuser.me/api/portraits/men/46.jpg"
        },
        'Brand Identity': {
          quote: "Veralake helped us rebrand during a critical growth phase, and the results exceeded our expectations. Our new identity resonates perfectly with our target audience while maintaining our core values.",
          name: "Emma Davis",
          position: "Creative Director, EvoLuxe",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        'Analytics & Insights': {
          quote: "The analytics implementation and custom dashboard Veralake created has completely transformed our decision-making process. We now have clear visibility into what's working and can optimize accordingly.",
          name: "James Wilson",
          position: "Data Strategist, InsightCorp",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        'Automation Services': {
          quote: "The automation solutions Veralake implemented have saved our team over 30 hours per week and dramatically reduced errors. The ROI was evident within the first month, and we continue to see improvements.",
          name: "Olivia Martinez",
          position: "Operations Manager, FlowWorks",
          avatar: "https://randomuser.me/api/portraits/women/23.jpg"
        }
      };
      
      return testimonials[serviceTitle] || {
        quote: "Working with Veralake Digital has been transformative for our business. Their expertise, professionalism, and results-oriented approach have helped us achieve and exceed our goals.",
        name: "Alex Johnson",
        position: "CEO, Forward Thinking",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      };
    },
    
    getServiceFAQs(serviceTitle) {
      // This method returns service-specific FAQs
      const faqs = {
        'Web Development': [
          {
            question: "How long does it typically take to develop a website?",
            answer: "The timeline depends on the complexity of your project. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline specific to your needs."
          },
          {
            question: "Will my website be mobile-friendly?",
            answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones to desktops."
          },
          {
            question: "Can I update the website myself after it's built?",
            answer: "Yes, we integrate user-friendly content management systems (CMS) that allow you to easily update content, add pages, and make basic changes without technical knowledge."
          },
          {
            question: "Do you provide website maintenance services?",
            answer: "Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. This includes regular updates, security monitoring, and technical support."
          },
          {
            question: "How do you approach search engine optimization (SEO)?",
            answer: "We build SEO best practices into every website from the ground up, including proper semantic HTML structure, optimized loading speeds, mobile responsiveness, and clean code. We also offer additional SEO services to further enhance your visibility."
          }
        ],
        'Mobile App Development': [
          {
            question: "Should I build a native app or a cross-platform app?",
            answer: "This depends on your specific needs. Native apps offer the best performance and access to device features but require separate development for iOS and Android. Cross-platform apps are more cost-effective and faster to market but may have some limitations. We'll help you determine the best approach based on your goals."
          },
          {
            question: "How much does it cost to develop a mobile app?",
            answer: "App development costs vary widely based on complexity, features, and platforms. During our discovery phase, we'll provide a detailed estimate based on your specific requirements."
          },
          {
            question: "How long does it take to develop a mobile app?",
            answer: "Typically, a quality mobile app takes 3-6 months to develop, depending on complexity. This includes planning, design, development, testing, and deployment phases."
          },
          {
            question: "Will you help with submitting my app to the app stores?",
            answer: "Yes, we handle the entire submission process for both the App Store and Google Play, ensuring your app meets all requirements and guidelines for approval."
          },
          {
            question: "Do you provide app maintenance and updates?",
            answer: "Yes, we offer ongoing maintenance and support to keep your app functioning smoothly, address any issues, and implement updates as operating systems and devices evolve."
          }
        ],
        'Digital Marketing': [
          {
            question: "How quickly will I see results from digital marketing efforts?",
            answer: "Some channels like PPC advertising can produce immediate results, while others like SEO and content marketing are long-term strategies that typically show significant results in 3-6 months. We'll set realistic expectations and provide regular updates on progress."
          },
          {
            question: "What metrics do you track to measure success?",
            answer: "We track key performance indicators (KPIs) aligned with your business goals, which may include website traffic, conversion rates, engagement metrics, lead generation, and ROI. We provide transparent reporting so you can see exactly how your campaigns are performing."
          },
          {
            question: "How much should I budget for digital marketing?",
            answer: "Your budget should align with your business goals and competitive landscape. During our consultation, we'll discuss your objectives and recommend an appropriate budget to achieve them, with options for different investment levels."
          },
          {
            question: "Do you specialize in specific industries?",
            answer: "While we have experience across many industries, we've developed particular expertise in B2B, professional services, e-commerce, and SaaS. However, our data-driven approach is effective across sectors."
          },
          {
            question: "How often will I receive reports on campaign performance?",
            answer: "We typically provide monthly comprehensive reports, but we can adjust the frequency based on your preferences. We also set up real-time dashboards for clients who want continuous access to performance data."
          }
        ],
        'Brand Identity': [
          {
            question: "What is included in a brand identity package?",
            answer: "Our comprehensive brand identity packages typically include logo design, color palette, typography, graphic elements, brand guidelines, and basic collateral designs. We can customize the package based on your specific needs."
          },
          {
            question: "How long does the branding process take?",
            answer: "A complete brand identity project typically takes 6-8 weeks, including discovery, concept development, refinement, and finalization. More complex projects may take longer."
          },
          {
            question: "How do you ensure the brand will resonate with our target audience?",
            answer: "We begin with thorough research to understand your audience, competitors, and industry. This insights-driven approach ensures we create a brand identity that connects with your specific target market."
          },
          {
            question: "Do you provide brand strategy along with visual identity?",
            answer: "Yes, our branding process includes strategic elements like brand positioning, messaging architecture, and value proposition development to ensure your visual identity is aligned with your business strategy."
          },
          {
            question: "What if I don't like the initial design concepts?",
            answer: "We include multiple revision rounds in our process. If the initial concepts don't resonate, we'll gather your feedback and refine our approach until we achieve a result you're completely satisfied with."
          }
        ],
        'Analytics & Insights': [
          {
            question: "What analytics platforms do you work with?",
            answer: "We primarily work with Google Analytics 4, but we also have expertise in Adobe Analytics, Mixpanel, Amplitude, and other platforms depending on your needs and existing infrastructure."
          },
          {
            question: "How do you ensure the data is accurate?",
            answer: "We implement thorough data quality checks, proper tracking configurations, and regular audits to ensure the data you're making decisions on is accurate and reliable."
          },
          {
            question: "Can you integrate data from multiple sources?",
            answer: "Yes, we can integrate data from various sources including your website, CRM, marketing platforms, and business systems to provide a comprehensive view of your performance."
          },
          {
            question: "Will you help us understand what the data means?",
            answer: "Absolutely. We don't just deliver numbers; we provide clear insights and actionable recommendations based on the data to help you make informed business decisions."
          },
          {
            question: "Do you create custom dashboards?",
            answer: "Yes, we create custom dashboards tailored to your specific KPIs and business objectives, making it easy to monitor performance at a glance."
          }
        ],
        'Automation Services': [
          {
            question: "What types of processes can be automated?",
            answer: "Many business processes can be automated, including lead nurturing, customer onboarding, data entry, reporting, inventory management, invoice processing, and customer service interactions, among others."
          },
          {
            question: "How long does it take to implement automation solutions?",
            answer: "Implementation timelines vary based on complexity. Simple automation workflows can be set up in a few weeks, while more complex integrations may take 2-3 months."
          },
          {
            question: "What platforms and tools do you use for automation?",
            answer: "We work with a variety of automation platforms including Zapier, Make (formerly Integromat), HubSpot, ActiveCampaign, and custom solutions using APIs. We'll recommend the best tools based on your specific needs and existing systems."
          },
          {
            question: "How much can I expect to save with automation?",
            answer: "Most clients see a 20-40% reduction in time spent on automated processes, plus improved accuracy and consistency. The exact ROI depends on your current processes and the specific automation implemented."
          },
          {
            question: "Will my team need special training to use the automated systems?",
            answer: "We provide comprehensive training and documentation for all automation solutions we implement. Most systems are designed to be user-friendly, but we ensure your team feels confident using them."
          }
        ]
      };
      
      return faqs[serviceTitle] || [
        {
          question: "What is your approach to this service?",
          answer: "We take a consultative, data-driven approach to understand your specific needs and goals before creating a customized solution that delivers measurable results."
        },
        {
          question: "How do you measure success?",
          answer: "We establish clear KPIs aligned with your business objectives at the beginning of our engagement and provide regular reporting on progress and results."
        },
        {
          question: "What is the typical timeframe for this service?",
          answer: "Timeframes vary depending on the scope and complexity of the project. During our initial consultation, we'll provide a more accurate timeline specific to your needs."
        },
        {
          question: "Do you offer ongoing support?",
          answer: "Yes, we offer various support and maintenance packages to ensure continued success after the initial implementation."
        },
        {
          question: "How much does this service cost?",
          answer: "We provide customized pricing based on your specific requirements and goals. Contact us for a free consultation and quote tailored to your needs."
        }
      ];
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
      <!-- Service Landing Page View -->
      <div v-if="currentView === 'service-landing' && currentService">
        <!-- Service Landing Navigation Bar -->
        <v-app-bar 
          app 
          :color="theme === 'light' ? 'white' : 'surface'" 
          elevation="0"
          height="80"
          class="border-bottom"
          :class="theme === 'light' ? 'border-light' : 'border-dark'"
        >
          <v-container class="d-flex align-center">
            <!-- Back Button -->
            <v-btn
              icon
              variant="text"
              class="mr-3"
              @click="backToMain"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            
            <!-- Logo -->
            <div class="d-flex align-center">
              <v-avatar
                color="primary"
                size="36"
                class="mr-2"
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
            <div class="d-none d-md-flex align-center">
              <v-btn
                class="text-none"
                variant="text"
                @click="toggleTheme"
              >
                <v-icon v-if="theme === 'light'">mdi-weather-night</v-icon>
                <v-icon v-else>mdi-weather-sunny</v-icon>
              </v-btn>
              <v-btn
                color="primary"
                class="ml-4 text-white"
                @click="openCalendlyModal"
              >
                <v-icon start>mdi-phone</v-icon>
                Call (470) 629-3981
              </v-btn>
            </div>
            
            <!-- Mobile Menu Button -->
            <v-app-bar-nav-icon
              class="d-flex d-md-none"
              @click="drawer = true"
            ></v-app-bar-nav-icon>
          </v-container>
        </v-app-bar>
        
        <!-- Service Landing Main Content -->
        <v-main>
          <!-- Hero Section -->
          <section class="py-10" :style="{ background: 'var(--gradient-primary)' }">
            <v-container>
              <v-row align="center" justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center text-white">
                  <v-avatar :color="currentService.color" size="88" class="mb-6">
                    <v-icon size="x-large" color="white">{{ currentService.icon }}</v-icon>
                  </v-avatar>
                  <h1 class="text-h2 font-weight-bold mb-4">{{ currentService.title }}</h1>
                  <p class="text-h6 mb-8">{{ currentService.description }}</p>
                  <div class="d-flex flex-column flex-sm-row justify-center">
                    <v-btn
                      size="x-large"
                      color="white"
                      class="text-primary font-weight-bold px-8 mb-4 mb-sm-0 mr-sm-4"
                      @click="openCalendlyModal"
                    >
                      <v-icon start>mdi-calendar</v-icon>
                      Schedule Free Consultation
                    </v-btn>
                    <v-btn
                      size="x-large"
                      variant="outlined"
                      color="white"
                      class="font-weight-bold px-8"
                      href="tel:+14706293981"
                    >
                      <v-icon start>mdi-phone</v-icon>
                      Call Now
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- Pain Points Section -->
          <section class="py-12">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center mb-10">
                  <h2 class="text-h3 font-weight-bold mb-4">Common Challenges</h2>
                  <p class="text-subtitle-1">Are you experiencing any of these pain points with your {{ currentService.title.toLowerCase() }}?</p>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col 
                  cols="12" sm="6" md="4"
                  v-for="(pain, index) in [
                    {
                      icon: 'mdi-alert-circle',
                      title: currentService.painPoints && currentService.painPoints[0] ? currentService.painPoints[0].title : 'Outdated Solutions',
                      description: currentService.painPoints && currentService.painPoints[0] ? currentService.painPoints[0].description : 'Your current approach isn\\'t delivering the results you need in today\\'s rapidly evolving digital landscape.'
                    },
                    {
                      icon: 'mdi-chart-line-variant',
                      title: currentService.painPoints && currentService.painPoints[1] ? currentService.painPoints[1].title : 'Poor Performance',
                      description: currentService.painPoints && currentService.painPoints[1] ? currentService.painPoints[1].description : 'You\\'re not seeing the conversion rates, engagement, or ROI that you expected from your investment.'
                    },
                    {
                      icon: 'mdi-account-question',
                      title: currentService.painPoints && currentService.painPoints[2] ? currentService.painPoints[2].title : 'Lack of Expertise',
                      description: currentService.painPoints && currentService.painPoints[2] ? currentService.painPoints[2].description : 'Your team lacks the specialized knowledge required to implement effective ' + currentService.title.toLowerCase() + ' strategies.'
                    }
                  ]"
                  :key="index"
                  class="mb-6"
                >
                  <v-card height="100%" class="pa-6">
                    <div class="d-flex align-center mb-4">
                      <v-avatar :color="currentService.color" class="mr-4">
                        <v-icon color="white">{{ pain.icon }}</v-icon>
                      </v-avatar>
                      <h3 class="text-h6 font-weight-bold">{{ pain.title }}</h3>
                    </div>
                    <p class="text-body-1">{{ pain.description }}</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- Solution Section -->
          <section class="py-12 bg-secondary">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center text-white mb-10">
                  <h2 class="text-h3 font-weight-bold mb-4">Our Solution</h2>
                  <p class="text-subtitle-1">Here's how our {{ currentService.title }} service can transform your business</p>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col cols="12" md="6">
                  <div class="d-flex flex-column h-100 justify-center">
                    <v-list class="bg-transparent pa-0">
                      <v-list-item 
                        v-for="(feature, index) in currentService.features" 
                        :key="index"
                        class="px-0 mb-6"
                      >
                        <template v-slot:prepend>
                          <v-avatar :color="currentService.color" size="48" class="mr-4">
                            <v-icon color="white">mdi-check</v-icon>
                          </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6 text-white font-weight-bold">{{ feature }}</v-list-item-title>
                        <v-list-item-subtitle class="text-white-lighten-2 mt-2">
                          {{ getSolutionDescription(currentService.title, feature) }}
                        </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </div>
                </v-col>
                
                <v-col cols="12" md="6" class="d-flex align-center">
                  <v-img
                    :src="getSolutionImage(currentService.title)"
                    max-height="500"
                    contain
                    class="rounded-lg"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- Why Choose Us Section -->
          <section class="py-12">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center mb-10">
                  <h2 class="text-h3 font-weight-bold mb-4">Why Choose Us</h2>
                  <p class="text-subtitle-1">What sets our {{ currentService.title }} services apart</p>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col 
                  cols="12" sm="6" md="4"
                  v-for="(reason, index) in [
                    {
                      icon: 'mdi-account-group',
                      title: 'Experienced Team',
                      description: 'Our specialists have years of experience delivering exceptional results for businesses like yours.'
                    },
                    {
                      icon: 'mdi-tools',
                      title: 'Tailored Approach',
                      description: 'We customize our solutions to address your specific challenges and meet your unique business goals.'
                    },
                    {
                      icon: 'mdi-chart-bar',
                      title: 'Measurable Results',
                      description: 'We focus on delivering tangible outcomes that you can measure, track, and build upon.'
                    },
                    {
                      icon: 'mdi-handshake',
                      title: 'Transparent Partnership',
                      description: 'You'll always know what we're doing, why we're doing it, and the results we're achieving together.'
                    },
                    {
                      icon: 'mdi-update',
                      title: 'Continuous Improvement',
                      description: 'We constantly refine our approach based on performance data to maximize your ROI.'
                    },
                    {
                      icon: 'mdi-clock-time-four',
                      title: 'Timely Delivery',
                      description: 'We respect your timeline and work efficiently to deliver high-quality results on schedule.'
                    }
                  ]"
                  :key="index"
                  class="mb-6"
                >
                  <v-card height="100%" class="pa-5 d-flex flex-column">
                    <div class="d-flex align-center mb-4">
                      <v-avatar :color="currentService.color" class="mr-3" size="36">
                        <v-icon color="white" size="small">{{ reason.icon }}</v-icon>
                      </v-avatar>
                      <h3 class="text-h6 font-weight-bold">{{ reason.title }}</h3>
                    </div>
                    <p class="text-body-2 flex-grow-1">{{ reason.description }}</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- Testimonial Section -->
          <section class="py-12 bg-grey-lighten-4">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center mb-10">
                  <h2 class="text-h3 font-weight-bold mb-4">What Our Clients Say</h2>
                  <p class="text-subtitle-1">Real results from real businesses</p>
                </v-col>
              </v-row>
              
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                  <v-card class="pa-6">
                    <v-card-text class="text-center">
                      <v-icon color="amber" size="x-large" class="mb-6">mdi-format-quote-open</v-icon>
                      <p class="text-h6 font-italic mb-6">{{ getServiceTestimonial(currentService.title).quote }}</p>
                      <v-avatar size="80" class="mb-3">
                        <v-img :src="getServiceTestimonial(currentService.title).avatar"></v-img>
                      </v-avatar>
                      <p class="text-h6 font-weight-bold mb-1">{{ getServiceTestimonial(currentService.title).name }}</p>
                      <p class="text-subtitle-1">{{ getServiceTestimonial(currentService.title).position }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- Process Section -->
          <section class="py-12">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center mb-10">
                  <h2 class="text-h3 font-weight-bold mb-4">Our Process</h2>
                  <p class="text-subtitle-1">How we'll work together to achieve your goals</p>
                </v-col>
              </v-row>
              
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                  <v-timeline align="start">
                    <v-timeline-item
                      v-for="(step, index) in [
                        {
                          title: 'Discovery & Analysis',
                          description: 'We begin by understanding your business, goals, and current challenges through in-depth research and analysis.'
                        },
                        {
                          title: 'Strategy Development',
                          description: 'Based on our findings, we create a customized strategy tailored to your specific needs and objectives.'
                        },
                        {
                          title: 'Implementation',
                          description: 'Our team executes the strategy with precision, applying best practices and innovative approaches.'
                        },
                        {
                          title: 'Monitoring & Optimization',
                          description: 'We continuously track performance and make data-driven adjustments to maximize results.'
                        },
                        {
                          title: 'Reporting & Review',
                          description: 'You'll receive regular reports with clear insights and recommendations for ongoing improvement.'
                        }
                      ]"
                      :key="index"
                      :dot-color="currentService.color"
                      size="large"
                    >
                      <template v-slot:opposite>
                        <div class="text-h6 font-weight-bold">Step {{ index + 1 }}</div>
                      </template>
                      <v-card>
                        <v-card-title>{{ step.title }}</v-card-title>
                        <v-card-text>{{ step.description }}</v-card-text>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- FAQ Section -->
          <section class="py-12 bg-grey-lighten-4">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center mb-10">
                  <h2 class="text-h3 font-weight-bold mb-4">Frequently Asked Questions</h2>
                  <p class="text-subtitle-1">Answers to common questions about our {{ currentService.title }} services</p>
                </v-col>
              </v-row>
              
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                  <v-expansion-panels>
                    <v-expansion-panel
                      v-for="(faq, index) in getServiceFAQs(currentService.title)"
                      :key="index"
                    >
                      <v-expansion-panel-title>
                        <div class="text-subtitle-1 font-weight-bold">{{ faq.question }}</div>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <p class="text-body-1">{{ faq.answer }}</p>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- CTA Section -->
          <section class="py-16" :style="{ background: 'var(--gradient-primary)' }">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center text-white">
                  <h2 class="text-h3 font-weight-bold mb-4">Ready to transform your {{ currentService.title.toLowerCase() }}?</h2>
                  <p class="text-h6 mb-8">Schedule a free consultation today to discuss your specific needs.</p>
                  <div class="d-flex flex-column flex-sm-row justify-center">
                    <v-btn
                      size="x-large"
                      color="white"
                      class="text-primary font-weight-bold px-8 mb-4 mb-sm-0 mr-sm-4"
                      @click="openCalendlyModal"
                    >
                      <v-icon start>mdi-calendar</v-icon>
                      Schedule Free Consultation
                    </v-btn>
                    <v-btn
                      size="x-large"
                      variant="outlined"
                      color="white"
                      class="font-weight-bold px-8"
                      href="tel:+14706293981"
                    >
                      <v-icon start>mdi-phone</v-icon>
                      Call (470) 629-3981
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- Contact Form Section -->
          <section class="py-12">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8" class="text-center mb-10">
                  <h2 class="text-h3 font-weight-bold mb-4">Get in Touch</h2>
                  <p class="text-subtitle-1">Fill out the form below and I'll get back to you within 24 hours</p>
                </v-col>
              </v-row>
              
              <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                  <v-card class="pa-6">
                    <v-form @submit.prevent="trackEvent('contact_submit', 'contact', currentService.title)">
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="First Name"
                            variant="outlined"
                            density="comfortable"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Last Name"
                            variant="outlined"
                            density="comfortable"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      
                      <v-text-field
                        label="Email"
                        variant="outlined"
                        density="comfortable"
                        type="email"
                        required
                      ></v-text-field>
                      
                      <v-text-field
                        label="Phone"
                        variant="outlined"
                        density="comfortable"
                        required
                      ></v-text-field>
                      
                      <v-text-field
                        label="Company"
                        variant="outlined"
                        density="comfortable"
                      ></v-text-field>
                      
                      <v-textarea
                        label="Message"
                        variant="outlined"
                        density="comfortable"
                        rows="4"
                        required
                      ></v-textarea>
                      
                      <v-btn
                        type="submit"
                        color="primary"
                        size="large"
                        block
                        class="mt-4 text-white"
                      >
                        Send Message
                      </v-btn>
                    </v-form>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </section>
        </v-main>
      </div>
      
      <!-- Project Detail View -->
      <div v-if="currentView === 'project-detail' && currentProject">
        <!-- Project Detail Navigation Bar -->
        <v-app-bar 
          app 
          :color="theme === 'light' ? 'white' : 'surface'" 
          elevation="0"
          height="80"
          class="border-bottom"
          :class="theme === 'light' ? 'border-light' : 'border-dark'"
        >
          <v-container class="d-flex align-center">
            <!-- Back Button -->
            <v-btn
              icon
              variant="text"
              class="mr-3"
              @click="backToMain"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            
            <!-- Logo -->
            <div class="d-flex align-center">
              <v-avatar
                color="primary"
                size="36"
                class="mr-2"
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
            <div class="d-none d-md-flex align-center">
              <v-btn
                class="text-none"
                variant="text"
                @click="toggleTheme"
              >
                <v-icon v-if="theme === 'light'">mdi-weather-night</v-icon>
                <v-icon v-else>mdi-weather-sunny</v-icon>
              </v-btn>
              <v-btn
                color="primary"
                class="ml-4 text-white"
                @click="openCalendlyModal"
              >
                <v-icon start>mdi-calendar</v-icon>
                Book a Call
              </v-btn>
            </div>
            
            <!-- Mobile Menu Button -->
            <v-app-bar-nav-icon
              class="d-flex d-md-none"
              @click="drawer = true"
            ></v-app-bar-nav-icon>
          </v-container>
        </v-app-bar>
        
        <!-- Project Detail Main Content -->
        <v-main>
          <!-- Hero Section -->
          <section class="py-10 bg-primary">
            <v-container>
              <v-row align="center">
                <v-col cols="12" md="8" class="text-white">
                  <v-chip color="white" class="text-primary font-weight-bold mb-4">
                    {{ currentProject.category }}
                  </v-chip>
                  <h1 class="text-h2 font-weight-bold mb-4">{{ currentProject.title }}</h1>
                  <p class="text-h6 mb-6">{{ currentProject.description }}</p>
                  <div class="d-flex flex-wrap">
                    <div class="mr-8 mb-4">
                      <div class="text-caption text-white-lighten-2 mb-1">CLIENT</div>
                      <div class="text-subtitle-1">{{ currentProject.client }}</div>
                    </div>
                    <div class="mr-8 mb-4">
                      <div class="text-caption text-white-lighten-2 mb-1">TIMELINE</div>
                      <div class="text-subtitle-1">{{ currentProject.timeline }}</div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- Main Content -->
          <section class="py-12">
            <v-container>
              <v-row>
                <!-- Left Content -->
                <v-col cols="12" md="8">
                  <!-- Main Image -->
                  <v-img
                    :src="currentProject.image"
                    height="500"
                    cover
                    class="rounded-lg mb-10"
                  ></v-img>
                  
                  <!-- Project Details -->
                  <h2 class="text-h4 font-weight-bold mb-6">Project Overview</h2>
                  
                  <div class="mb-10">
                    <h3 class="text-h5 font-weight-bold mb-3">The Challenge</h3>
                    <p class="text-body-1">{{ currentProject.challenge }}</p>
                  </div>
                  
                  <div class="mb-10">
                    <h3 class="text-h5 font-weight-bold mb-3">Our Solution</h3>
                    <p class="text-body-1">{{ currentProject.solution }}</p>
                  </div>
                  
                  <div class="mb-10">
                    <h3 class="text-h5 font-weight-bold mb-3">Technologies Used</h3>
                    <div class="d-flex flex-wrap">
                      <v-chip
                        v-for="tech in currentProject.technologies"
                        :key="tech"
                        class="mr-2 mb-2"
                        color="primary"
                        variant="outlined"
                      >
                        {{ tech }}
                      </v-chip>
                    </div>
                  </div>
                  
                  <div class="mb-10">
                    <h3 class="text-h5 font-weight-bold mb-3">Results & Impact</h3>
                    <v-list>
                      <v-list-item
                        v-for="(result, index) in currentProject.results"
                        :key="index"
                        class="px-0"
                      >
                        <template v-slot:prepend>
                          <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>{{ result }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </div>
                  
                  <!-- Image Gallery -->
                  <h3 class="text-h5 font-weight-bold mb-3">Project Gallery</h3>
                  <v-row>
                    <v-col 
                      v-for="(image, index) in currentProject.gallery"
                      :key="index"
                      cols="12" sm="6"
                    >
                      <v-img
                        :src="image"
                        height="250"
                        cover
                        class="rounded-lg"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-col>
                
                <!-- Right Sidebar -->
                <v-col cols="12" md="4">
                  <v-card class="mb-8 pa-6">
                    <v-card-title class="text-h6 font-weight-bold mb-4">Client Testimonial</v-card-title>
                    <v-card-text>
                      <v-icon color="amber" class="mb-2">mdi-format-quote-open</v-icon>
                      <p class="text-body-1 font-italic mb-4">{{ currentProject.testimonial }}</p>
                      <div class="d-flex align-center">
                        <v-avatar color="primary" class="mr-3">
                          <v-icon color="white">mdi-account</v-icon>
                        </v-avatar>
                        <div>
                          <p class="text-subtitle-2 font-weight-bold mb-0">{{ currentProject.client }}</p>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                  
                  <v-card class="mb-8 pa-6">
                    <v-card-title class="text-h6 font-weight-bold mb-4">Similar Projects</v-card-title>
                    <v-card-text>
                      <div
                        v-for="(project, index) in projects.filter(p => p.category === currentProject.category && p.title !== currentProject.title).slice(0, 2)"
                        :key="index"
                        class="d-flex align-center mb-4"
                        @click="viewProjectDetails(project)"
                        style="cursor: pointer;"
                      >
                        <v-avatar rounded size="60" class="mr-3">
                          <v-img :src="project.image" cover></v-img>
                        </v-avatar>
                        <div>
                          <p class="text-subtitle-2 font-weight-bold mb-0">{{ project.title }}</p>
                          <p class="text-caption">{{ project.category }}</p>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                  
                  <v-card class="pa-6">
                    <v-card-title class="text-h6 font-weight-bold mb-4">Ready to Start Your Project?</v-card-title>
                    <v-card-text>
                      <p class="text-body-2 mb-4">Let's discuss how we can help you achieve similar results for your business.</p>
                      <v-btn
                        color="primary"
                        size="large"
                        block
                        class="text-white mb-3"
                        @click="openCalendlyModal"
                      >
                        Schedule a Consultation
                      </v-btn>
                      <v-btn
                        variant="outlined"
                        color="primary"
                        size="large"
                        block
                        @click="backToMain"
                      >
                        View More Projects
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </section>
          
          <!-- CTA Section -->
          <section class="py-10 bg-secondary">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" class="text-center text-white">
                  <h2 class="text-h3 font-weight-bold mb-4">Ready to transform your digital presence?</h2>
                  <p class="text-h6 mb-6">Let's create something amazing together.</p>
                  <v-btn
                    color="primary"
                    size="large"
                    class="mr-4 text-white"
                    @click="openCalendlyModal"
                  >
                    Book a Free Consultation
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    color="white"
                    size="large"
                    @click="backToMain"
                  >
                    View More Projects
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </section>
        </v-main>
      </div>
      
      <!-- Main Website View -->
      <div v-if="currentView === 'main'">
        <!-- Modern Navigation Bar -->
        <v-app-bar 
        app 
        :color="theme === 'light' ? 'white' : 'surface'" 
        elevation="0"
        height="80"
        class="border-bottom"
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
            <!-- Book a Call Button for Mobile -->
            <v-btn 
              color="primary" 
              variant="flat"
              size="small"
              density="comfortable"
              class="mr-2 text-white rounded-pill"
              @click="openCalendlyModal"
            >
              <v-icon size="small">mdi-calendar-clock</v-icon>
            </v-btn>
            
            <!-- Contact Button for Mobile -->
            <v-menu
              transition="slide-y-transition"
              location="bottom"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  variant="tonal"
                  size="small"
                  density="comfortable"
                  class="mr-2 rounded-pill"
                  v-bind="props"
                >
                  <v-icon size="small">mdi-phone</v-icon>
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
                      @click="trackEvent('phone_call', 'contact', 'navbar_mobile')"
                    >
                      <v-icon start>mdi-phone</v-icon>
                      Call Now
                    </v-btn>
                    <v-btn
                      block
                      color="primary"
                      variant="outlined"
                      href="sms:+14706293981"
                      @click="trackEvent('text_message', 'contact', 'navbar_mobile')"
                    >
                      <v-icon start>mdi-message</v-icon>
                      Send Text
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-menu>
            
            <!-- Theme Toggle for Mobile -->
            <v-btn 
              icon 
              variant="text" 
              size="small" 
              class="mr-2" 
              @click="toggleTheme"
            >
              <v-icon v-if="theme === 'light'">mdi-weather-night</v-icon>
              <v-icon v-else>mdi-weather-sunny</v-icon>
            </v-btn>
            
            <!-- Menu Toggle (Mobile Only) -->
            <v-btn 
              icon 
              :color="drawer ? 'primary' : ''" 
              variant="text"
              @click="drawer = !drawer"
            >
              <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
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
      </style>
      
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
                          
                          <!-- Client Marquee Effect -->
                          <div class="client-marquee-container">
                            <div class="position-relative" style="overflow: hidden; height: 100px;">
                              <div ref="clientScroller" class="client-scroller d-flex" style="animation: scrollClients 20s linear infinite;">
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
                                
                                <!-- Duplicate set for seamless scrolling -->
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
                      
                      <div class="d-flex flex-column flex-sm-row gap-3">
                        <v-btn 
                          :color="service.color" 
                          class="text-white mt-auto px-6"
                          variant="flat"
                          rounded="pill"
                          elevation="2"
                          @click="viewServiceLanding(service)"
                        >
                          Learn More <v-icon end class="ml-1">mdi-arrow-right</v-icon>
                        </v-btn>
                        
                        <v-btn 
                          :color="service.color" 
                          class="text-white mt-auto px-6"
                          rounded="pill"
                          elevation="2"
                          variant="outlined"
                          @click="openCalendlyModal"
                        >
                          Request Service
                        </v-btn>
                      </div>
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
                          @click="viewProjectDetails(project)"
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
