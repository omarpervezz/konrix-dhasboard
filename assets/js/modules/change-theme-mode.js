export function changeThemeMode(themeCustomizer, color) {
    themeCustomizer.config.theme = color;
    themeCustomizer.html.setAttribute('data-mode', color);
    themeCustomizer.setSwitchFromConfig();
}

