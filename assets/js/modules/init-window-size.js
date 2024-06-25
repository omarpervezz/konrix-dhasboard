export function initWindowSize(themeCustomizer) {
    window.addEventListener('resize', function () {
        themeCustomizer.adjustLayout();
    });
}
