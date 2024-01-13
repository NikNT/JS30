const switcher = document.querySelector('.theme_switcher');
const defaultTheme = localStorage.getItem('theme') || 'light-theme';
setTheme(defaultTheme);

switcher.addEventListener('change', (e) => {
    setTheme(e.target.value);
});

function setTheme(theme) {
    theme = theme || 'light-theme';
    document.documentElement.className = theme;

    localStorage.setItem('theme', theme);
    switcher.value = theme;
}
