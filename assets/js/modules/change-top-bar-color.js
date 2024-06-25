export function changeTopbarColor(themeCustomizer, color) {
    themeCustomizer.config.topbar.color = color;
    themeCustomizer.html.setAttribute('data-topbar-color', color);
    themeCustomizer.setSwitchFromConfig();
}
