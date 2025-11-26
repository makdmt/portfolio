type Theme = 'light' | 'dark'

const THEME_KEY = 'colorTheme'

export function useColorTheme() {
    const theme = useState<Theme>('colorTheme');

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
        // data-theme attributes sets by inlined script;
        let initialThemeValue = document.documentElement.getAttribute('data-theme') as Theme;
        initialThemeValue = initialThemeValue === 'dark' ? 'dark' : 'light'
        theme.value = initialThemeValue;
    })

    return {
        theme,
        toggleTheme,
        setTheme: applyTheme,
    }
}
