// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: process.env.BASE_URL,
    },
  },
  css: [
    '~~/styles/main.scss',
  ],
  modules: [
    '@nuxt/devtools',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  components: true,
  vite: {
    plugins: [],
  },
  unocss: {
    preflight: true,
  },
})
