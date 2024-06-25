export function initSidenav(themeCustomizer) {      
    const pageUrl = window.location.href.split(/[?#]/)[0];
    document.querySelectorAll('ul.menu a.menu-link').forEach((element) => {
        if (element.href === pageUrl) {
            element.classList.add('active');
            let parentMenu = element.parentElement.parentElement.parentElement;
            if (parentMenu && parentMenu.classList.contains('menu-item')) {
                const collapseElement = parentMenu.querySelector('[data-fc-type="collapse"]');
                if (collapseElement && frost != null) {
                    const collapse = frost.Collapse.getInstanceOrCreate(collapseElement);
                    collapse.show();
                }
            }
        }
    });

    setTimeout(function () {
        const activatedItem = document.querySelector('ul.menu .active');
        if (activatedItem != null) {
            const simplebarContent = document.querySelector('.app-menu .simplebar-content-wrapper');
            const offset = activatedItem.offsetTop - 300;
            if (simplebarContent && offset > 100) {
                scrollTo(simplebarContent, offset, 600);
            }
        }
    }, 200);

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function scrollTo(element, to, duration) {
        const start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
        const animateScroll = function () {
            currentTime += increment;
            const val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
}

