import AOS from "aos";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.AOS = new AOS.init()
})