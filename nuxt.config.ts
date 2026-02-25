import siteConfig from './site-config.json'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  routeRules: {
    '/': { prerender: true }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: siteConfig.title,
      meta: [
        { name: 'description', content: siteConfig.metaDescription },
        { property: 'og:title', content: siteConfig.title },
        { property: 'og:description', content: siteConfig.metaDescription },
        { property: 'og:image', content: siteConfig.ogImage },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteConfig.title },
        { name: 'twitter:description', content: siteConfig.metaDescription },
        { name: 'twitter:image', content: siteConfig.ogImage }
      ],
      script: [
        { src: 'https://assets.lemonsqueezy.com/lemon.js', defer: true }
      ]
    }
  }
})
