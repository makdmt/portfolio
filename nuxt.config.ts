// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    ssr: true,
    app: {
        baseURL: '/portfolio/',
        buildAssetsDir: 'assets/',
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title: 'Дмитрий Макаров. Портфолио',
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.png'}
            ]
        },
    },
    nitro: {
        preset: 'static',
        prerender: {
            routes: ['/']
        }
    },
    vite: {
        build: {
            target: ['es2020'],
        }
    }
})
