import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "nuxt-toast"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    cognitoLiveKey: process.env.COGNITO_LIVE_KEY,
    cognitoSecretKey: process.env.COGNITO_SECRET_KEY,
    cognitoBaseUrl: process.env.COGNITO_BASE_URL || "https://api.cognitohq.com",
    public: {
      apiBase: process.env.API_BASE || "https://counseling-merchandise-departmental-phone.trycloudflare.com",
      cognitoPublishableKey: process.env.COGNITO_PUBLISHABLE_KEY,
      cognitoBaseUrl: process.env.COGNITO_BASE_URL || "https://api.cognitohq.com",
    },
  },
});
