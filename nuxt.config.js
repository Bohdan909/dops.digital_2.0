import StylelintWebpackPlugin from 'stylelint-webpack-plugin'

export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'dops.digital_2.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{
    src: '~/assets/scss/main.scss',
    lang: 'scss'
  }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/main',
    {
      src: '~plugins/vue-secure-html',
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-lazy-load', {
      directiveOnly: true
    }]
  ],

  styleResources: {
    scss: [
      '@/assets/scss/utils/vars.scss',
      '@/assets/scss/utils/mixins.scss'
    ]
  },

  server: {
    port: 8000
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config) {
      config.plugins.push(
        new StylelintWebpackPlugin({
          syntax: 'scss'
        })
      )
    }
  },

  loading: {
    color: '#0077d9',
    height: '4px',
    duration: 500
  },

  transition: {
    name: 'fade-page',
    mode: 'out-in'
  }
}
