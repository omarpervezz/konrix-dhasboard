export function setSwitchFromConfig(themeCustomizer) {
    sessionStorage.setItem('__CONFIG__', JSON.stringify(themeCustomizer.config));

    document.querySelectorAll('#theme-customization input[type=radio]').forEach(function (radio) {
        radio.checked = false;
    });

    const config = themeCustomizer.config;
    if (config) {
        const layoutDirectionSwitch = document.querySelector('input[type=radio][name=dir][value=' + config.direction + ']');
        const layoutModeSwitch = document.querySelector('input[type=radio][name=data-mode][value=' + config.theme + ']');
        const layoutWidthSwitch = document.querySelector('input[type=radio][name=data-layout-width][value=' + config.layout.width + ']');
        const layoutPositionSwitch = document.querySelector('input[type=radio][name=data-layout-position][value=' + config.layout.position + ']');
        const topbarColorSwitch = document.querySelector('input[type=radio][name=data-topbar-color][value=' + config.topbar.color + ']');
        const menuColorSwitch = document.querySelector('input[type=radio][name=data-menu-color][value=' + config.menu.color + ']');
        const sidenavViewSwitch = document.querySelector('input[type=radio][name=data-sidenav-view][value=' + config.sidenav.view + ']');

        if (layoutDirectionSwitch) layoutDirectionSwitch.checked = true;
        if (layoutModeSwitch) layoutModeSwitch.checked = true;
        if (layoutWidthSwitch) layoutWidthSwitch.checked = true;
        if (layoutPositionSwitch) layoutPositionSwitch.checked = true;
        if (topbarColorSwitch) topbarColorSwitch.checked = true;
        if (menuColorSwitch) menuColorSwitch.checked = true;
        if (sidenavViewSwitch) sidenavViewSwitch.checked = true;
    }
}
