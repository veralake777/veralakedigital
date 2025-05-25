<template>
  <section id="faq" class="py-16">
    <v-container>
      <v-row class="mb-10">
        <v-col cols="12" md="8" offset-md="2" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-subtitle-1">
            Find answers to common questions about our services and processes.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="10" offset-md="1">
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
              v-for="(item, i) in faqItems"
              :key="i"
              elevation="1"
              class="mb-4"
            >
              <v-expansion-panel-title class="text-subtitle-1 font-weight-medium">
                {{ item.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-body-1">
                {{ item.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col cols="12" class="text-center">
          <p class="text-h6 mb-4">Still have questions?</p>
          <v-btn
            color="primary"
            size="large"
            @click="$emit('open-calendly')"
          >
            <v-icon start>mdi-calendar-clock</v-icon>
            Schedule a Call
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  props: {
    faqItems: {
      type: Array,
      required: true
    }
  }
}
</script>