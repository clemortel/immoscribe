import posthog from 'posthog-js'
import siteConfig from '../../site-config.json'

export default defineNuxtPlugin(() => {
  if (!siteConfig.posthogKey) return

  const ph = posthog.init(siteConfig.posthogKey, {
    api_host: siteConfig.posthogHost || 'https://us.i.posthog.com',
    capture_pageview: true,
    capture_pageleave: true,
  })

  return {
    provide: {
      posthog: () => ph,
    },
  }
})
