// // Function to apply styles based on data-sidenav-view attribute
// export default function buttonHoverToggleApplyStyles() {
//     const appMenu = document.querySelector('#app-menu');
//     const appMenuButton = document.querySelector('#app-menu #button-hover-toggle');
//     const htmlTag = document.documentElement; // This is the <html> tag
//     const sidenavView = htmlTag.getAttribute('data-sidenav-view');

//     // Common class manipulations encapsulated in reusable functions
//     const applyClasses = (element, classesToAdd, classesToRemove) => {
//         element.classList.add(...classesToAdd);
//         element.classList.remove(...classesToRemove);
//     };

//     // Define class sets
//     const classes = {
//         hover: {
//             add: ['w-[var(--tw-sidenav-width)]', 'min-w-[var(--tw-sidenav-width)]', 'h-screen', 'fixed'],
//             remove: ['w-[var(--tw-sidenav-width-sm)]', 'min-w-[var(--tw-sidenav-width-sm)]', 'min-h-[var(--tw-sidenav-sm-height)]', 'h-unset', 'static', 'sticky']
//         },
//         sm: {
//             add: ['w-[var(--tw-sidenav-width-sm)]', 'min-w-[var(--tw-sidenav-width-sm)]', 'min-h-[var(--tw-sidenav-sm-height)]', 'h-unset', 'static'],
//             remove: ['w-[var(--tw-sidenav-width)]', 'min-w-[var(--tw-sidenav-width)]', 'h-screen', 'sticky', 'fixed']
//         },
//         default: {
//             add: ['w-[var(--tw-sidenav-width)]', 'min-w-[var(--tw-sidenav-width)]', 'h-screen', 'sticky'],
//             remove: ['w-[var(--tw-sidenav-width-sm)]', 'min-w-[var(--tw-sidenav-width-sm)]', 'min-h-[var(--tw-sidenav-sm-height)]', 'h-unset', 'fixed']
//         }
//     };

//     const buttonClasses = {
//         hover: {
//             add: ['flex', 'transition-all', 'duration-150', 'ease-in-out', 'sticky'],
//             remove: ['hidden']
//         },
//         default: {
//             add: ['hidden'],
//             remove: ['flex', 'transition-all', 'duration-150', 'ease-in-out']
//         }
//     };

//     // Apply appropriate classes based on data-sidenav-view attribute
//     if (sidenavView === 'hover' || sidenavView === 'hover-active') {
//         applyClasses(appMenu, classes.hover.add, classes.hover.remove);
//         applyClasses(appMenuButton, buttonClasses.hover.add, buttonClasses.hover.remove);
//     } else if (sidenavView === 'sm') {
//         applyClasses(appMenu, classes.sm.add, classes.sm.remove);
//         // No changes for button in 'sm' state
//     } else {
//         applyClasses(appMenu, classes.default.add, classes.default.remove);
//         applyClasses(appMenuButton, buttonClasses.default.add, buttonClasses.default.remove);
//     }
// }
