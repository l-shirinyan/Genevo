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
    cognitoLiveKey: "live_key_10c5d65bfe439498eb593cdfd53b0b62",
    cognitoSecretKey:
      "f152a6df494896f4e699ed29df4163b3b5dab641115b2236822c6e03586aae82",
    cognitoBaseUrl: "https://api.cognitohq.com",
    public: {
      apiBase: "https://orbit-stupid-periodic-stadium.trycloudflare.com",
      cognitoPublishableKey:
        "live_publishable_key_88ec4da92855501b3fed834bbbde5a79",
      cognitoBaseUrl: "https://api.cognitohq.com",
    },
  }
});
