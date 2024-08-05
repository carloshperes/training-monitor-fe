// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  app: {
    pageTransition: { name: 'layout', mode: 'out-in' }
  },
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      // Adicione a URL da api de backend
      apiUrl: 'http://localhost:8000/',
    }
  },
})