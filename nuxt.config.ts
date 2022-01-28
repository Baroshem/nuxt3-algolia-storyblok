import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['#app'] // Temporary workaround for issues in Storyblok module
  },
  buildModules: [
    ['@nuxt-modules/algolia', {
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      applicationId: process.env.ALGOLIA_APP_ID,
    }],
    ['@storyblok/nuxt', {
      accessToken: process.env.STORYBLOK_ACCESS_TOKEN
    }]
  ],
})
