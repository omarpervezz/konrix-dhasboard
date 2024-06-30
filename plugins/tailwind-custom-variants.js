module.exports = function ({
  addVariant,
  e
}) {
  // sidenav-hover variant
  addVariant('sidenav-hover', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="hover"] .${e(`sidenav-hover${separator}${className}`)}`;
     });
  });

  // sidenav-hover-active variant
  addVariant('sidenav-hover-active', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="hover-active"] .${e(`sidenav-hover-active${separator}${className}`)}`;
     });
  });
  // sidenav-view-hover-size variant
  addVariant('sidenav-view-hover-size', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="hover"] #app-menu:not(:hover).${e(`sidenav-view-hover-size${separator}${className}`)}`
     });
  });
  // sidenav-view-hover variant
  addVariant('sidenav-view-hover', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="hover"] #app-menu:not(:hover) .${e(`sidenav-view-hover${separator}${className}`)}`
     });
  });
  // rtl-menu-arrow variant
  addVariant('rtl-menu-arrow', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[dir="rtl"] .${e(`rtl-menu-arrow${separator}${className}`)}`;
     });
  });

  // sidenav-sm variant
  addVariant('sidenav-sm', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-sidenav-view="sm"] .${e(`sidenav-sm${separator}${className}`)}`;
     });
  });

  // sidenav-sm-menu-link variant
  addVariant('sidenav-sm-menu-link', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="sm"] #app-menu .menu .menu-item:hover > .${e(`sidenav-sm-menu-link${separator}${className}`)}`;
     });
  });

  // sidenav-sm-submenu variant
  addVariant('sidenav-sm-submenu', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="sm"] #app-menu .menu .menu-item:hover > .${e(`sidenav-sm-submenu${separator}${className}`)}`;
     });
  });

  // sidenav-sm-submenu-link variant
  addVariant('sidenav-sm-submenu-link', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="sm"] #app-menu .menu .menu-item:hover > .sub-menu > .menu-item > .${e(`sidenav-sm-submenu-link${separator}${className}`)}`;
     });
  });

  // sidenav-sm-submenu-text variant
  addVariant('sidenav-sm-submenu-text', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="sm"] #app-menu .menu .menu-item:hover > .sub-menu > .menu-item > .menu-link > .${e(`sidenav-sm-submenu-text${separator}${className}`)}`;
     });
  });


  // sidenav-sm-hover-menu-text variant
  addVariant('sidenav-sm-hover-menu-text', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="sm"] #app-menu .menu > .menu-item:hover > .menu-link > .${e(`sidenav-sm-hover-menu-text${separator}${className}`)}`;
     });
  });

  // sidenav-md variant
  addVariant('sidenav-md', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-sidenav-view="md"] .${e(`sidenav-md${separator}${className}`)}`;
     });
  });

  // sidenav-mobile variant
  addVariant('sidenav-mobile', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-sidenav-view="mobile"] .${e(`sidenav-mobile${separator}${className}`)}`;
     });
  });

  // sidenav-mobile-enable variant
  addVariant('sidenav-mobile-enable', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-sidenav-view="mobile"].sidenav-enable .${e(`sidenav-mobile-enable${separator}${className}`)}`;
     });
  });

  // sidenav-hidden varian
  addVariant('sidenav-hidden', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-sidenav-view="hidden"] .${e(`sidenav-hidden${separator}${className}`)}`;
     });
  });

  // scrollable variant
  addVariant('scrollable', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-layout-position="scrollable"] .${e(`scrollable${separator}${className}`)}`;
     });
  });

  // layout-scrollable variant
  addVariant('layout-scrollable', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-layout-position="scrollable"]:not([data-sidenav-view="mobile"]) .${e(`layout-scrollable${separator}${className}`)}`;
     });
  });

  // scrollable-hover variant
  addVariant('scrollable-hover', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-layout-position="scrollable"][data-sidenav-view="hover"] .${e(`scrollable-hover${separator}${className}`)}`;
     });
  });

  // scrollable-hover-active variant
  addVariant('scrollable-hover-active', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `html[data-layout-position=scrollable][data-sidenav-view=hover-active] .${e(`scrollable-hover-active${separator}${className}`)}`;
     });
  });

  // data-layout-boxed variant
  addVariant('data-layout-boxed', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-layout-width="boxed"] .${e(`data-layout-boxed${separator}${className}`)}`;
     });
  });
  /* Menu variant registration start */
  // menu-color-brand variant
  addVariant('menu-color-brand', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-menu-color="brand"] .${e(`menu-color-brand${separator}${className}`)}`;
     });
  });
  // menu-color-dark variant
  addVariant('menu-color-dark', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-menu-color="dark"] .${e(`menu-color-dark${separator}${className}`)}`;
     });
  });
  // menu-color-gradient variant
  addVariant('menu-color-gradient', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `[data-menu-color="gradient"] .${e(`menu-color-gradient${separator}${className}`)}`;
     });
  });

 /* Menu variant registration start */












  /* Topbar variant registration start */
  // topbar-color-brand variant
  addVariant('topbar-color-brand', ({
    modifySelectors,
    separator
 }) => {
    modifySelectors(({
       className
    }) => {
       return `[data-topbar-color="brand"] .${e(`topbar-color-brand${separator}${className}`)}`;
    });
 });
 // topbar-color-dark variant
 addVariant('topbar-color-dark', ({
    modifySelectors,
    separator
 }) => {
    modifySelectors(({
       className
    }) => {
       return `[data-topbar-color="dark"] .${e(`topbar-color-dark${separator}${className}`)}`;
    });
 });
 // topbar-color-gradient variant
 addVariant('topbar-color-gradient', ({
    modifySelectors,
    separator
 }) => {
    modifySelectors(({
       className
    }) => {
       return `[data-topbar-color="gradient"] .${e(`topbar-color-gradient${separator}${className}`)}`;
    });
 });

   /* Topbar variant registration start */




  // open-menu variant
  addVariant('open-menu', ({
     modifySelectors,
     separator
  }) => {
     modifySelectors(({
        className
     }) => {
        return `.menu .menu-item .menu-link.open > .menu-arrow svg.${e(`open-menu${separator}${className}`)}`
     });
  });
}