export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', ['@nuxtjs/supabase', { redirect: false }]],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      supabaseKey: process.env.SUPABASE_KEY,
      supabaseUrl: process.env.SUPABASE_URL,
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en-US'
      }
    }
  }
})