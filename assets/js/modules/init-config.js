export function initConfig(themeCustomizer) {
    themeCustomizer.defaultConfig = JSON.parse(JSON.stringify(window.defaultConfig));
    themeCustomizer.config = JSON.parse(JSON.stringify(window.config));
    themeCustomizer.setSwitchFromConfig();
}