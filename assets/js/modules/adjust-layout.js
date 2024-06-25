export function adjustLayout(themeCustomizer) {
    if (window.innerWidth <= 1140) {
        themeCustomizer.changeSidenavView('mobile', false);
    } else {
        themeCustomizer.changeSidenavView(themeCustomizer.config.sidenav.view);
    }
}
