// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  dir : {
    public : '/assets/public/'
  },
  css :[
    "~/assets/styles/base.scss"
  ],
  typescript : {
    typeCheck : true,
  },
  googleFonts : {
    families : {
      "PT Sans" : {
        wght : [400, 700]
      }
    }
  },
  components : false,
  modules: ["@nuxt/eslint", "@nuxtjs/google-fonts", "nuxt-swiper"]
})