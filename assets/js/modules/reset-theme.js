export function resetTheme(themeCustomizer) {
    themeCustomizer.config = JSON.parse(JSON.stringify(window.defaultConfig));
    themeCustomizer.changeThemeDirection(themeCustomizer.config.direction);
    themeCustomizer.changeThemeMode(themeCustomizer.config.theme);
    themeCustomizer.changeLayoutWidth(themeCustomizer.config.layout.width);
    themeCustomizer.changeLayoutPosition(themeCustomizer.config.layout.position);
    themeCustomizer.changeTopbarColor(themeCustomizer.config.topbar.color);
    themeCustomizer.changeMenuColor(themeCustomizer.config.menu.color);
    themeCustomizer.changeSidenavView(themeCustomizer.config.sidenav.view);
    themeCustomizer.adjustLayout();
}
