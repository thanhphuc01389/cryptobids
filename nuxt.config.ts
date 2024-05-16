import { fileURLToPath } from 'node:url';
import { META_COMMON } from './common/meta';

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/device'],
  devtools: { enabled: true },
  typescript: { strict: true },
  css: ['@styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "./styles/mixin.scss" as *;' },
      },
    },
  },
  alias: {
    '@apis': fileURLToPath(new URL('./apis/', import.meta.url)),
    '@assets': fileURLToPath(new URL('./assets/', import.meta.url)),
    '@common': fileURLToPath(new URL('./common/', import.meta.url)),
    '@components': fileURLToPath(new URL('./components/', import.meta.url)),
    '@containers': fileURLToPath(new URL('./containers/', import.meta.url)),
    '@interface': fileURLToPath(new URL('./interface/', import.meta.url)),
    '@layouts': fileURLToPath(new URL('./layouts/', import.meta.url)),
    '@pages': fileURLToPath(new URL('./pages/', import.meta.url)),
    '@plugins': fileURLToPath(new URL('./plugins/', import.meta.url)),
    '@router': fileURLToPath(new URL('./router/', import.meta.url)),
    '@store': fileURLToPath(new URL('./store/', import.meta.url)),
    '@styles': fileURLToPath(new URL('./styles/', import.meta.url)),
    '@utils': fileURLToPath(new URL('./utils/', import.meta.url)),
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: '',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'keyword',
          content: META_COMMON.site_keyword,
        },
      ],
      link: [
        // Icons
        {
          rel: 'shortcut icon',
          href: '/logo.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '192X192',
          href: '/logo.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32X32',
          href: '/logo.png',
        },
        // Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
        },
        // import js cdn
        {
          rel: 'preload',
          href: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
          as: 'script',
        },
        {
          rel: 'preload',
          href: 'https://use.typekit.net/ysq3cep.js',
          as: 'script',
        },
        {
          rel: 'preload',
          href: 'https://www.google.com/recaptcha/api.js',
          as: 'script',
        },
        {
          rel: 'preload',
          href: 'https://assets-global.website-files.com/6489bb0b0efa4fc40c2cbb3f/js/webflow.3de0fe0eb.js',
          as: 'script',
        },
      ],
    },
  },
});
