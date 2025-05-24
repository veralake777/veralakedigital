<template>
  <section id="faq" class="py-20 bg-light">
    <v-container>
      <div class="text-center mb-16">
        <div class="text-accent font-weight-medium mb-2">QUESTIONS & ANSWERS</div>
        <h2 class="text-h3 font-weight-bold mb-4 font-poppins">Frequently Asked Questions</h2>
        <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 760px">
          Find answers to common questions about our services, process, and how we help businesses grow.
        </p>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <v-expansion-panels v-model="openPanel">
          <v-expansion-panel
            v-for="(item, i) in faqItems"
            :key="i"
            class="mb-6 rounded-xl"
            elevation="2"
          >
            <v-expansion-panel-title class="py-4 font-poppins font-weight-bold">
              {{ item.question }}
              <template v-slot:actions="{ expanded }">
                <v-icon :icon="expanded ? 'mdi-minus' : 'mdi-plus'"></v-icon>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-medium-emphasis py-4">
              {{ item.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      
      <div class="text-center mt-12">
        <p class="text-medium-emphasis mb-6">Still have questions? We're here to help!</p>
        <div class="d-flex flex-column flex-sm-row justify-center gap-4">
          <v-btn
            color="primary"
            size="large"
            rounded="pill"
            class="font-weight-medium text-white px-8"
            @click="openCalendlyModal"
          >
            Schedule a Consultation
          </v-btn>
          <v-btn
            color="accent"
            size="large"
            rounded="pill"
            class="font-weight-medium text-white px-8"
            href="#contact"
          >
            Contact Us
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'

const openPanel = ref(0)
const openCalendlyModal = inject('openCalendlyModal') as () => void

const faqItems = [
  {
    question: 'What services does Veralake Digital Agency offer?',
    answer: 'Veralake offers a comprehensive range of digital services including web design and development, digital marketing and SEO, brand identity design, mobile app development, analytics and optimization, social media management, content creation, and e-commerce solutions. We tailor our services to meet the specific needs and goals of each client.'
  },
  {
    question: 'How does your process work when taking on a new project?',
    answer: 'Our process typically involves the following steps: 1) Discovery - We learn about your business, goals, and target audience. 2) Strategy - We develop a tailored plan based on your objectives. 3) Design & Development - We create and implement the solution. 4) Testing - We ensure everything works flawlessly. 5) Launch - We deploy your project. 6) Ongoing Support - We provide maintenance and optimization to ensure continued success.'
  },
  {
    question: 'How much does it cost to work with Veralake?',
    answer: 'Our pricing varies based on the scope, complexity, and requirements of each project. We offer customized solutions tailored to your specific needs and budget. We believe in transparent pricing with no hidden fees. To get a detailed quote for your project, we recommend scheduling a free consultation with our team.'
  },
  {
    question: 'How long does it take to complete a typical project?',
    answer: 'Project timelines depend on the complexity and scope of work. A basic website might take 4-6 weeks, while a comprehensive digital marketing campaign or custom web application could take 2-4 months. During our initial consultation, we\'ll provide a realistic timeline based on your specific project requirements and goals.'
  },
  {
    question: 'How do you measure the success of your digital marketing efforts?',
    answer: 'We establish clear KPIs (Key Performance Indicators) at the beginning of each project based on your business objectives. Depending on your goals, we might track metrics such as website traffic, conversion rates, lead generation, engagement, click-through rates, and ROI. We provide regular reports and analyses to show the impact of our work and continuously optimize our strategies for maximum results.'
  }
]
</script>

<style scoped>
.bg-light {
  background-color: #F5F7FA;
}

:deep(.v-theme--dark) .bg-light {
  background-color: rgba(30, 30, 45, 0.95);
}

.max-w-3xl {
  max-width: 48rem;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
