// https://nuxt.com/docs/api/configuration/nuxt-config
// import type {Plugin} from 'vite'

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
            target: 'safari13',
        },
    },
})


// function FixSafariEntryPlugin(): Plugin {
//     let entryFile: string | null = null
//
//     return {
//         name: 'fix-safari-entry',
//         enforce: 'post',
//         apply: 'build', // выполняется только при сборке (не в dev)
//         // Найти имя entry чанка после того, как bundle сформирован
//         generateBundle(_options: any, bundle: Record<string, any>) {
//             for (const [fileName, chunk] of Object.entries(bundle)) {
//                 if (chunk && chunk.type === 'chunk' && (chunk as any).isEntry) {
//                     // относительный путь от текущего чанка к entry (в простом виде)
//                     entryFile = `./${fileName}`
//                     this.warn?.(`[fix-safari-entry] found entry -> ${entryFile}`)
//                     break
//                 }
//             }
//             if (!entryFile) {
//                 this.warn?.('[fix-safari-entry] no entry file found, skipping')
//                 return
//             }
//
//             // 2) Регексы: from "#entry" и import "#entry"
//             const fromPattern = /from\s*(['"])#entry\1/g
//             const importPattern = /import\s*(['"])#entry\1/g
//
//             // 3) Пройтись по всем чанкам и заменить
//             for (const [fileName, chunk] of Object.entries(bundle)) {
//                 // работаем только с JS chunk'ами, у которых есть поле code (строка)
//                 if (chunk && chunk.type === 'chunk' && typeof chunk.code === 'string') {
//                     if (chunk.code.includes('#entry')) {
//                         const original = chunk.code
//                         let replaced = original
//                             .replace(fromPattern, `from "${entryFile}"`)
//                             .replace(importPattern, `import "${entryFile}"`)
//
//                         // Если что-то поменялось — сохраните в bundle
//                         if (replaced !== original) {
//                             (bundle[fileName] as any).code = replaced
//                             this.warn?.(`[fix-safari-entry] patched ${fileName}`)
//                         }
//                     }
//                 }
//             }
//         },

// renderChunk выполняется для каждого чанка — здесь делаем замену
// renderChunk(code: string) {
//     console.log('entryFile', entryFile);
//     console.log('code', code.includes('#entry'));
//     console.log(code.slice(100));
//     if (!entryFile) return null
//     if (code.includes('#entry')) {
//         // заменяем импорты вида: from "#entry" -> from "./entry.abcdef.js"
//         const replaced = code.replace(/from\s*['"]#entry['"]/g, `from "${entryFile}"`)
//         return replaced
//     }
//     return null
// }
//     }
// }