type Theme = 'light' | 'dark'

const THEME_KEY = 'colorTheme'

export function useColorTheme() {
    const theme = useState<Theme>('colorTheme', () => 'light');

    const applyTheme = (t: Theme) => {
        document.documentElement.setAttribute('data-theme', t)
        theme.value = t
    }

    const toggleTheme = () => {
        const themeToApply = theme.value === 'dark' ? 'light' : 'dark';
        applyTheme(themeToApply);
        localStorage.setItem(THEME_KEY, themeToApply);
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
