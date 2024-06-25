export function initSwitchListener(themeCustomizer) {
    document.querySelectorAll('input[name=dir]').forEach(function (element) {
        element.addEventListener('change', function () {
            themeCustomizer.changeThemeDirection(element.value);
        });
    });

    document.querySelectorAll('input[name=data-mode]').forEach(function (element) {
        element.addEventListener('change', function () {
            themeCustomizer.changeThemeMode(element.value);
        });
    });

    document.querySelectorAll('input[name=data-layout-width]').forEach(function (element) {
        element.addEventListener('change', function () {
            themeCustomizer.changeLayoutWidth(element.value);
        });
    });

    document.querySelectorAll('input[name=data-layout-position]').forEach(function (element) {
        element.addEventListener('change', function () {
            themeCustomizer.changeLayoutPosition(element.value);
        });
    });

    document.querySelectorAll('input[name=data-topbar-color]').forEach(function (element) {
        element.addEventListener('change', function () {
            themeCustomizer.changeTopbarColor(element.value);
        });
    });

    document.querySelectorAll('input[name=data-menu-color]').forEach(function (element) {
        element.addEventListener('change', function () {
            themeCustomizer.changeMenuColor(element.value);
        });
    });

    document.querySelectorAll('input[name=data-sidenav-view]').forEach(function (element) {
        element.addEventListener('change', function () {
            themeCustomizer.changeSidenavView(element.value);
        });
    });

    // Light Dark Button
    const themeColorToggle = document.getElementById('light-dark-mode');
    if (themeColorToggle) {
        themeColorToggle.addEventListener('click', function () {
            if (themeCustomizer.config.theme === 'light') {
                themeCustomizer.changeThemeMode('dark');
            } else {
                themeCustomizer.changeThemeMode('light');
            }
        });
    }

    // Menu Toggle Button (Placed in Topbar)
    const menuToggleBtn = document.querySelector('#button-toggle-menu');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', function () {
            const configView = themeCustomizer.config.sidenav.view;
            const view = themeCustomizer.html.getAttribute('data-sidenav-view', configView);

            if (view === 'mobile') {
                themeCustomizer.showBackdrop();
                themeCustomizer.html.classList.toggle('sidenav-enable');
            } else {
                if (configView === 'hidden') {
                    if (view === 'hidden') {
                        themeCustomizer.changeSidenavView(configView === 'hidden' ? 'default' : configView, false);
                    } else {
                        themeCustomizer.changeSidenavView('hidden', false);
                    }
                } else {
                    if (view === 'sm') {
                        themeCustomizer.changeSidenavView(configView === 'sm' ? 'default' : configView, false);
                    } else {
                        themeCustomizer.changeSidenavView('sm', false);
                    }
                }
            }
        });
    }

    const menuHoverToggleBtn = document.querySelector('#button-hover-toggle');
    if (menuHoverToggleBtn) {
        menuHoverToggleBtn.addEventListener('click', function () {
            const configView = themeCustomizer.config.sidenav.view;
            const view = themeCustomizer.html.getAttribute('data-sidenav-view', configView);

            if (configView === 'hover') {
                if (view === 'hover') {
                    themeCustomizer.changeSidenavView(configView === 'hover' ? 'hover-active' : configView, true);
                } else {
                    themeCustomizer.changeSidenavView('hover', true);
                }
            } else {
                if (view === 'hover-active') {
                    themeCustomizer.changeSidenavView(configView === 'hover-active' ? 'hover' : configView, true);
                } else {
                    themeCustomizer.changeSidenavView('hover-active', true);
                }
            }
        });
    }

    // Config Reset Button
    const resetBtn = document.querySelector('#reset-layout');
    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            themeCustomizer.resetTheme();
        });
    }
}
