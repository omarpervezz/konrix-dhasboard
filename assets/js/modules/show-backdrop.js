export function showBackdrop(themeCustomizer) {
    const backdrop = document.createElement('div');
    backdrop.id = 'backdrop';
    backdrop.className = 'transition-all fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80';
    document.body.appendChild(backdrop);

    if (document.getElementsByTagName('html')[0]) {
        document.body.style.overflow = "hidden";
        if (window.innerWidth > 1140) {
            document.body.style.paddingRight = "15px";
        }
    }

    backdrop.addEventListener('click', function () {
        themeCustomizer.html.classList.remove('sidenav-enable');
        themeCustomizer.hideBackdrop();
    });
}
