// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_presets.scss" as *;'
        }
      }
    }
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  css: [
    '~/assets/scss/main.scss',
    'aos/dist/aos.css'
  ],
})
