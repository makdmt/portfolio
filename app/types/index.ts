export type PreviewFormat = 'mobile' | 'desktop';

export type Technologies = 'PWA' | 'React' | 'Vue' | 'Formatjs' | 'Node' | 'Express' | 'Firebase' | 'Tilda';

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