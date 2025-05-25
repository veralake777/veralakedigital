import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track page view
    trackEvent('view', 'page', 'home');

    // Load Vue application
    if (containerRef.current) {
      // Create an iframe to host the Vue application
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100vh';
      iframe.style.border = 'none';
      
      // Set the content to a simple HTML page that loads the Vue application
      iframe.srcdoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
          <meta name="description" content="Veralake Digital Agency - Transforming businesses through strategic digital solutions">
          <title>Veralake Digital | Modern Solutions for Growing Businesses</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/vuetify@3.3.0/dist/vuetify.min.css" rel="stylesheet">
          <style>
            :root {
              --primary: 207 90% 54%;
              --secondary: 200 13% 26%;
              --accent: 14 100% 57%;
              --light: 210 10% 98%;
              --dark: 240 15% 15%;
              --success: 122 39% 49%;
              --error: 0 73% 58%;
            }
            body {
              font-family: 'Inter', sans-serif;
              margin: 0;
              padding: 0;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Poppins', sans-serif;
            }
          </style>
        </head>
        <body>
          <div id="app">
            <!-- Veralake Digital Agency -->
            <v-app :theme="theme">
              <!-- Navigation -->
              <v-app-bar app color="white" elevation="1">
                <v-container class="d-flex align-center">
                  <v-app-bar-title class="text-primary font-weight-bold">
                    Veralake Digital
                  </v-app-bar-title>
                  <v-spacer></v-spacer>
                  <v-btn v-for="item in menuItems" :key="item.title" text class="ml-2">
                    {{ item.title }}
                  </v-btn>
                  <v-btn color="primary" class="ml-4">Contact Us</v-btn>
                  <v-btn icon @click="toggleTheme" class="ml-2">
                    <v-icon>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
                  </v-btn>
                </v-container>
              </v-app-bar>

              <v-main>
                <!-- Hero Section -->
                <v-container fluid class="pa-0">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-sheet color="primary" class="py-12 px-6 text-center">
                        <v-container>
                          <h1 class="text-h2 font-weight-bold text-white mb-4">
                            Transform Your Digital Presence
                          </h1>
                          <p class="text-h6 text-white mb-8">
                            We help businesses grow through innovative digital solutions
                          </p>
                          <v-btn size="large" color="white" class="text-primary mr-4">
                            Get Started
                          </v-btn>
                          <v-btn size="large" variant="outlined" color="white">
                            Our Services
                          </v-btn>
                        </v-container>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>

                <!-- Services Section -->
                <v-container class="py-12">
                  <v-row>
                    <v-col cols="12" class="text-center mb-8">
                      <h2 class="text-h4 font-weight-bold">Our Services</h2>
                      <p class="text-subtitle-1 mt-2">
                        Comprehensive digital solutions to help your business thrive
                      </p>
                    </v-col>

                    <v-col v-for="service in services" :key="service.title" cols="12" md="4">
                      <v-card height="100%" class="pa-4 d-flex flex-column">
                        <v-icon size="x-large" :color="service.color" class="mb-4">
                          {{ service.icon }}
                        </v-icon>
                        <h3 class="text-h5 font-weight-bold mb-2">{{ service.title }}</h3>
                        <p class="text-body-1 mb-4">{{ service.description }}</p>
                        <v-spacer></v-spacer>
                        <v-btn variant="text" color="primary" class="mt-2 align-self-start">
                          Learn More <v-icon end>mdi-arrow-right</v-icon>
                        </v-btn>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>

                <!-- Portfolio Section -->
                <v-container fluid class="bg-grey-lighten-4 py-12">
                  <v-container>
                    <v-row>
                      <v-col cols="12" class="text-center mb-8">
                        <h2 class="text-h4 font-weight-bold">Our Work</h2>
                        <p class="text-subtitle-1 mt-2">
                          Check out some of our recent projects
                        </p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col v-for="(project, i) in projects" :key="i" cols="12" sm="6" lg="4">
                        <v-card class="mx-auto" max-width="400">
                          <v-img height="200" cover :src="project.image"></v-img>
                          <v-card-item>
                            <v-card-title>{{ project.title }}</v-card-title>
                            <v-card-subtitle>{{ project.category }}</v-card-subtitle>
                          </v-card-item>
                          <v-card-text>
                            {{ project.description }}
                          </v-card-text>
                          <v-card-actions>
                            <v-btn color="primary" variant="text">View Details</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>

                <!-- Testimonial Section -->
                <v-container class="py-12">
                  <v-row>
                    <v-col cols="12" class="text-center mb-8">
                      <h2 class="text-h4 font-weight-bold">What Our Clients Say</h2>
                      <p class="text-subtitle-1 mt-2">
                        Hear from businesses that we've helped transform
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="12" md="4">
                      <v-card class="pa-4 h-100">
                        <v-card-text>
                          <v-icon color="amber" class="mb-4">mdi-format-quote-open</v-icon>
                          <p class="text-body-1 font-italic mb-4">{{ testimonial.quote }}</p>
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

                <!-- Contact Section -->
                <v-container fluid class="bg-primary py-12">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6" class="text-white">
                        <h2 class="text-h4 font-weight-bold mb-4">Ready to Transform Your Business?</h2>
                        <p class="text-body-1 mb-6">
                          Let's discuss how we can help you achieve your digital goals. Fill out the form
                          and we'll get back to you within 24 hours.
                        </p>
                        <div class="d-flex align-center mb-4">
                          <v-icon color="white" class="mr-3">mdi-email</v-icon>
                          <span>info@veralake.digital</span>
                        </div>
                        <div class="d-flex align-center mb-4">
                          <v-icon color="white" class="mr-3">mdi-phone</v-icon>
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div class="d-flex align-center">
                          <v-icon color="white" class="mr-3">mdi-map-marker</v-icon>
                          <span>123 Innovation Drive, San Francisco, CA 94107</span>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-card class="pa-4">
                          <v-card-title class="text-h5 font-weight-bold mb-4">
                            Get in Touch
                          </v-card-title>
                          <v-form>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="First Name"
                                  variant="outlined"
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  label="Last Name"
                                  variant="outlined"
                                  required
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-text-field
                              label="Email"
                              variant="outlined"
                              required
                              type="email"
                            ></v-text-field>
                            <v-text-field
                              label="Phone"
                              variant="outlined"
                            ></v-text-field>
                            <v-select
                              label="Service You're Interested In"
                              variant="outlined"
                              :items="services.map(s => s.title)"
                            ></v-select>
                            <v-textarea
                              label="Message"
                              variant="outlined"
                              rows="3"
                            ></v-textarea>
                            <v-btn
                              color="primary"
                              size="large"
                              block
                              class="mt-4"
                            >
                              Submit
                            </v-btn>
                          </v-form>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>

                <!-- Footer -->
                <v-footer class="bg-secondary">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="4" class="text-white">
                        <h3 class="text-h6 font-weight-bold mb-4">Veralake Digital</h3>
                        <p class="text-body-2">
                          Innovative digital solutions that help businesses grow and thrive in today's
                          competitive landscape.
                        </p>
                      </v-col>
                      <v-col cols="12" md="2" class="text-white">
                        <h4 class="text-subtitle-1 font-weight-bold mb-4">Services</h4>
                        <v-list class="bg-transparent pa-0">
                          <v-list-item
                            v-for="service in services"
                            :key="service.title"
                            :title="service.title"
                            class="text-white px-0"
                            density="compact"
                          ></v-list-item>
                        </v-list>
                      </v-col>
                      <v-col cols="12" md="2" class="text-white">
                        <h4 class="text-subtitle-1 font-weight-bold mb-4">Company</h4>
                        <v-list class="bg-transparent pa-0">
                          <v-list-item
                            v-for="item in ['About', 'Portfolio', 'Careers', 'Blog']"
                            :key="item"
                            :title="item"
                            class="text-white px-0"
                            density="compact"
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
                          <v-btn color="primary">Subscribe</v-btn>
                        </div>
                      </v-col>
                    </v-row>
                    <v-divider class="border-opacity-25 mt-6 mb-4"></v-divider>
                    <div class="d-flex flex-wrap justify-space-between align-center">
                      <div class="text-body-2 text-white">
                        &copy; {{ new Date().getFullYear() }} Veralake Digital. All Rights Reserved.
                      </div>
                      <div>
                        <v-btn
                          v-for="icon in ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']"
                          :key="icon"
                          icon
                          variant="text"
                          color="white"
                          class="ml-2"
                        >
                          <v-icon>{{ icon }}</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-container>
                </v-footer>
              </v-main>
            </v-app>
          </div>

          <!-- Vue, Vuetify, and App scripts -->
          <script src="https://cdn.jsdelivr.net/npm/vue@3.3.0/dist/vue.global.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/vuetify@3.3.0/dist/vuetify.min.js"></script>
          <script>
            // Google Analytics
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${window.gaId || 'G-PLACEHOLDER'}');
            
            const { createApp } = Vue;
            const { createVuetify } = Vuetify;

            const vuetify = createVuetify();

            createApp({
              data() {
                return {
                  theme: 'light',
                  menuItems: [
                    { title: 'Home', url: '#' },
                    { title: 'Services', url: '#services' },
                    { title: 'Portfolio', url: '#portfolio' },
                    { title: 'About', url: '#about' },
                    { title: 'Blog', url: '#blog' }
                  ],
                  services: [
                    {
                      icon: 'mdi-monitor-dashboard',
                      color: 'primary',
                      title: 'Web Development',
                      description: 'Custom websites and web applications designed to engage users and drive conversions.'
                    },
                    {
                      icon: 'mdi-cellphone-link',
                      color: 'success',
                      title: 'Mobile App Development',
                      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
                    },
                    {
                      icon: 'mdi-trending-up',
                      color: 'accent',
                      title: 'Digital Marketing',
                      description: 'Strategic marketing campaigns that increase visibility and drive targeted traffic.'
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
                    }
                  ]
                }
              },
              methods: {
                toggleTheme() {
                  this.theme = this.theme === 'light' ? 'dark' : 'light';
                  localStorage.setItem('theme', this.theme);
                }
              },
              mounted() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  this.theme = savedTheme;
                }
                
                // Add GA measurement ID from parent window if available
                if (window.parent && window.parent.gaId) {
                  window.gaId = window.parent.gaId;
                  gtag('config', window.gaId);
                }
              }
            }).use(vuetify).mount('#app');
          </script>
        </body>
        </html>
      `;
      
      // Add the iframe to the container
      containerRef.current.appendChild(iframe);
      
      // Pass Google Analytics ID to the iframe
      const gaScript = document.createElement('script');
      gaScript.textContent = `window.gaId = '${import.meta.env.VITE_GA_MEASUREMENT_ID}';`;
      document.head.appendChild(gaScript);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }}></div>
  );
}