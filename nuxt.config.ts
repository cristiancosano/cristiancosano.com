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
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    },
})
