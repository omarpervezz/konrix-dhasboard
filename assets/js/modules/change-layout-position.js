export function changeLayoutPosition(themeCustomizer, position, save = true) {
    themeCustomizer.html.setAttribute('data-layout-position', position);
    if (save) {
        themeCustomizer.config.layout.position = position;
        themeCustomizer.setSwitchFromConfig();
    }
}
