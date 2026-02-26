<script setup lang="ts">
import siteConfig from '../../site-config.json'

const { $posthog } = useNuxtApp()

const testModeParam: string = siteConfig.lemonSqueezyTestMode ? '?test=true' : ''
const checkoutUrl: string = `https://${siteConfig.lemonSqueezyStoreId}.lemonsqueezy.com/buy/${siteConfig.lemonSqueezyProductId}${testModeParam}`

function trackCta() {
  $posthog()?.capture('cta_click', { label: siteConfig.ctaLabel, url: checkoutUrl })
}

function trackCheckout() {
  $posthog()?.capture('checkout_start', { product: siteConfig.lemonSqueezyProductId })
}
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-6">
    <main class="max-w-xl w-full text-center space-y-8">
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
        {{ siteConfig.title }}
      </h1>

      <p class="text-lg sm:text-xl text-gray-600 leading-relaxed">
        {{ siteConfig.pitch }}
      </p>

      <div class="space-y-4">
        <p class="text-3xl font-semibold text-gray-900">
          {{ siteConfig.price }}
        </p>

        <a
          :href="checkoutUrl"
          class="lemonsqueezy-button inline-block bg-black text-white font-medium text-lg px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors"
          @click="trackCta(); trackCheckout()"
        >
          {{ siteConfig.ctaLabel }}
        </a>

        <p class="text-sm text-gray-400">
          {{ siteConfig.reassurance }}
        </p>
      </div>
    </main>
  </div>
</template>
