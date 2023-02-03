export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/global.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  experimental: {
    payloadExtraction: false,
  },
  app: {
    baseURL: "./",
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "My App",
      link: [
        {
          href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
          rel: "stylesheet",
        },
      ],
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    server_name: "filadelfia",
    // Keys within public are also exposed client-side
  },
});
