// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/styles/global.scss",
    ],
    modules: [
        '@nuxt/image-edge',
        'nuxt-icon',
        '@vueuse/nuxt',
    ],
    components: [
        '~/components',
        { path: 'components/home-section', prefix: 'HomeSection' },
    ],
    image: {
        none: {}
    },
})
