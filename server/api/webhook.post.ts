import siteConfig from '../../site-config.json'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!siteConfig.webhookUrl) {
    return { ok: true, forwarded: false }
  }

  await $fetch(siteConfig.webhookUrl, {
    method: 'POST',
    body: {
      ...body,
      source: siteConfig.title,
      timestamp: new Date().toISOString()
    }
  })

  return { ok: true, forwarded: true }
})
