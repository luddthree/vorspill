// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],

  app: {
    head: {
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8921164054573762',
          async: true,
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      // apiBase: 'https://ofl.vang.li',
      apiBase: 'http://127.0.0.1:8000',
      gtagId: "G-XBCERVVBG8",
    }
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-02-20',
})