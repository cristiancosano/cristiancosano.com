// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/styles/global.scss",
    ],
    modules: [
        'nuxt-icon',
        '@vueuse/nuxt',
    ],
    components: [
        '~/components',
        { path: 'components/home-section', prefix: 'HomeSection' },
    ],
})
