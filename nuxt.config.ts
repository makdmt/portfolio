// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title: 'Дмитрий Макаров. Портфолио',
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
            ]
        },
    },
})
