<template>
  <section id="blog" class="py-16 bg-grey-lighten-4">
    <v-container>
      <v-row class="mb-10">
        <v-col cols="12" md="8" offset-md="2" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">Latest Insights</h2>
          <p class="text-subtitle-1">
            Stay up-to-date with the latest trends and insights in digital marketing and web development.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col 
          v-for="(post, index) in blogPosts"
          :key="index"
          cols="12" md="4"
          class="mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              class="transition-swing h-100"
            >
              <v-img
                :src="post.image"
                height="200"
                cover
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              
              <v-card-item>
                <div class="d-flex align-center mb-2">
                  <v-chip size="small" color="primary" class="mr-2">{{ post.category }}</v-chip>
                  <div class="text-caption text-grey">{{ post.date }} • {{ post.readTime }}</div>
                </div>
                <v-card-title class="px-0 text-h5 font-weight-bold">{{ post.title }}</v-card-title>
                <v-card-text class="px-0 text-body-1">
                  {{ post.excerpt }}
                </v-card-text>
              </v-card-item>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  variant="text"
                  color="primary"
                >
                  Read More
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      
      <v-row class="mt-6">
        <v-col cols="12" class="text-center">
          <v-btn
            color="primary"
            variant="outlined"
            size="large"
          >
            View All Articles
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
  props: {
    blogPosts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>