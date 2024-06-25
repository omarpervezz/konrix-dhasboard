export function changeThemeDirection(themeCustomizer, direction) {
    themeCustomizer.config.direction = direction;
    themeCustomizer.html.setAttribute('dir', direction);
    themeCustomizer.setSwitchFromConfig();
}
