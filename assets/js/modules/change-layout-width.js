export function changeLayoutWidth(themeCustomizer, width, save = true) {
    themeCustomizer.html.setAttribute('data-layout-width', width);
    if (save) {
        themeCustomizer.config.layout.width = width;
        themeCustomizer.setSwitchFromConfig();
    }
}
