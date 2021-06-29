export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-tailwind-css-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  tailwindcss: {
    config: {
      mode: 'jit',
      // theme: {
      //   colors: {
      //     'like-green': '#28646e',
      //     'like-cyan': '#50e3c2',
      //     'like-cyan-light': '#aaf1e7',
      //     'like-cyan-pale': '#d7ecec',
      //     'grey-4a': '#4a4a4a',
      //     'grey-9b': '#9b9b9b',
      //     'grey-f7': '#f7f7f7',
      //     'white': '#fff',
      //   },
      //   spacing: {
      //     '0': '0',
      //     '4': '4px',
      //     '8': '8px',
      //     '12': '12px',
      //     '16': '16px',
      //     '24': '24px',
      //     '32': '32px',
      //     '48': '48px',
      //   },
      // },
    },
  },
}
