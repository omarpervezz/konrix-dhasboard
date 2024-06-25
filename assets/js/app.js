/**
* Theme: Konrix - Responsive Tailwind Admin Dashboard
* Author: coderthemes
* Module/App: App js
*/
import { initComponents } from './modules/init-components.js';
import { initFullScreenListener } from './modules/init-full-screen-listener.js';
import { initConfig } from './modules/init-config.js';
import { initSidenav } from './modules/init-sidenav.js';
import { reverseQuery } from './modules/reverse-query.js';
import { changeThemeDirection as handleThemeDirectionChange } from './modules/change-theme-direction.js';
import { changeThemeMode as handleThemeModeChange } from './modules/change-theme-mode.js';
import { changeLayoutWidth as handleLayoutWidthChange } from './modules/change-layout-width.js';
import { changeLayoutPosition as handleLayoutPositionChange } from './modules/change-layout-position.js';
import { changeTopbarColor as handleTopbarColorChange } from './modules/change-top-bar-color.js';
import { changeMenuColor as handleMenuColorChange } from './modules/change-menu-color.js';
import { changeSidenavView as handleSidenavViewChange } from './modules/change-sidenav-view.js';
import { resetTheme } from './modules/reset-theme.js';
import { initSwitchListener } from './modules/init-switch-listener.js';
import { showBackdrop } from './modules/show-backdrop.js';
import { hideBackdrop } from './modules/hide-backdrop.js';
import { initWindowSize } from './modules/init-window-size.js';
import { adjustLayout } from './modules/adjust-layout.js';
import { setSwitchFromConfig } from './modules/set-switch-from-config.js';
import './modules/custom-module/maximize-minimize-screen.js';


class App {
    init() {
        initComponents();
        initFullScreenListener();
    }
}

class ThemeCustomizer {
    constructor() {
        this.html = document.getElementsByTagName('html')[0];
        this.config = {};
        this.defaultConfig = window.config;
    }

    init() {
        initConfig(this);
        initSidenav(this);
        initSwitchListener(this);
        initWindowSize(this);
        adjustLayout(this);
        setSwitchFromConfig(this);
    }

    reverseQuery(element, query) {
        return reverseQuery(element, query);
    }

    changeThemeDirection(direction) {
        handleThemeDirectionChange(this, direction);
    }

    changeThemeMode(color) {
        handleThemeModeChange(this, color);
    }

    changeLayoutWidth(width, save = true) {
        handleLayoutWidthChange(this, width, save);
    }

    changeLayoutPosition(position, save = true) {
        handleLayoutPositionChange(this, position, save);
    }

    changeTopbarColor(color) {
        handleTopbarColorChange(this, color);
    }

    changeMenuColor(color) {
        handleMenuColorChange(this, color);
    }

    changeSidenavView(view, save = true) {
        handleSidenavViewChange(this, view, save);
    }

    resetTheme() {
        resetTheme(this);
    }

    showBackdrop() {
        showBackdrop(this);
    }

    hideBackdrop() {
        hideBackdrop();
    }

    adjustLayout() {
        adjustLayout(this);
    }

    setSwitchFromConfig() {
        setSwitchFromConfig(this);
    }
}

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new App().init();
        new ThemeCustomizer().init();
        

        // Initial call to set the correct state
        // updateLogoVisibility();
        
        //  // Initialize observers
        //  initObservers();
        

    });
})();