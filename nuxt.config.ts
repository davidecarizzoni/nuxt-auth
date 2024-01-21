// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
})
