export function changeMenuColor(themeCustomizer, color) {
    themeCustomizer.config.menu.color = color;
    themeCustomizer.html.setAttribute('data-menu-color', color);
    themeCustomizer.setSwitchFromConfig();
}
