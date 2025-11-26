export type PreviewFormat = 'mobile' | 'desktop';

export type Technologies = 'PWA' | 'React' | 'Vue' | 'Nuxt' | 'Formatjs' | 'Node' | 'Express' | 'Firebase' | 'Tilda' | 'MongoDb' | 'Antdv';

export type Project = {
    title: string,
    description: string,
    previewFormat: PreviewFormat,
    srcHigh: string,
    srcLow?: string,
    waitSoon?: boolean,
    technologies?: Technologies[],
    url?: string
}