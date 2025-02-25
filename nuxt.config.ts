import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxtjs/supabase'
  ],
  supabase: {
    redirect: false,
    url: 'https://uhbbrxudznbrtbcffzmc.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYmJyeHVkem5icnRiY2Zmem1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NDAzNTIsImV4cCI6MjA1NjAxNjM1Mn0.tguSbbKaUFM6EHtZU2nWEY0BYiF0cQeWu6PYvorOJ8w'
  }
})