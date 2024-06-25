export function changeSidenavView(themeCustomizer, view, save = true) {
    themeCustomizer.html.setAttribute('data-sidenav-view', view);
    if (save) {
        themeCustomizer.config.sidenav.view = view;
        themeCustomizer.setSwitchFromConfig();
    }
}
