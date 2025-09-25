type Theme = 'light' | 'dark'

const THEME_KEY = 'colorTheme'

export function useColorTheme() {
    const theme = useState<Theme>('colorTheme', () => 'light');

    const applyTheme = (t: Theme) => {
        document.documentElement.setAttribute('data-theme', t)
        localStorage.setItem(THEME_KEY, t)
        theme.value = t
    }

    const toggleTheme = () => {
        applyTheme(theme.value === 'dark' ? 'light' : 'dark')
    }

    onMounted(() => {
        const saved = localStorage.getItem(THEME_KEY) as Theme | null
        if (saved === 'light' || saved === 'dark') {
            applyTheme(saved)
            return
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark')
            return
        }

        applyTheme('light')
    })

    return {
        theme,
        toggleTheme,
        setTheme: applyTheme,
    }
}
