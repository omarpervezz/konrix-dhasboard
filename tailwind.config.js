/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
   content: ["./*.html", "./src/**/*.{html,js,css}", "./assets/js/modules/show-backdrop.js", "./assets/js/pages/apps-calendar.js", "./assets/js/pages/extended-sweetalert.js"],
   darkMode: ['class', '[data-mode="dark"]'],
   theme: {
      extend: {
         colors: {
            'menu-item-color': 'var(--tw-menu-item-color)',
            'blue': 'rgb(15 23 42 / var(--tw-text-opacity))',
            'light': 'rgb(238 242 247 / var(--tw-bg-opacity))',
            'dark': 'rgb(49 58 70 / var(--tw-text-opacity))',
            'primary': '#3073F1',
            'warning': '#E2A907',
            'danger': '#E63535',
            'success': '#1CB454',
            'info': '#0895D8',
            'secondary': '#68625D',
            'blue-600': '#2563eb',
         },
         backgroundColor: theme => ({
            ...theme('colors'),
            'primary-25': 'rgba(48, 115, 241, 0.25)',
            'warning-25': 'rgba(226, 169, 7, 0.25)',
            'danger-25': 'rgba(230, 53, 53, 0.25)',
            'success-25': 'rgba(28, 180, 84, 0.25)',
            'info-25': 'rgba(8, 149, 216, 0.25)',
            'dark': 'rgb(49 58 70 / var(--tw-bg-opacity))',
            'secondary-25': 'rgb(104 98 93 / var(--tw-bg-opacity))',
            'blue-600': 'rgb(48 115 241 / var(--tw-bg-opacity))'
         }),
         backgroundImage: {
            'checkbox-checked': "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            'checkbox-indeterminate': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\")",
            'radio-checked': `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`
          },
         backgroundSize: {
            'full': '100% 100%',
          },
         borderColor: {
            'gray-100': 'rgb(238 242 247 / var(--tw-border-opacity))',
            'dark': 'rgb(49 58 70 / var(--tw-border-opacity))'
         },
         lineHeight: {
            'default': '1.5',
         },
         fontFamily: {
            'sans': [
               'ui-sans-serif',
               'system-ui',
               '-apple-system',
               'BlinkMacSystemFont',
               '"Segoe UI"',
               'Roboto',
               '"Helvetica Neue"',
               'Arial',
               '"Noto Sans"',
               'sans-serif',
               '"Apple Color Emoji"',
               '"Segoe UI Emoji"',
               '"Segoe UI Symbol"',
               '"Noto Color Emoji"'
            ],
            'inter': [
               'Inter',
               'sans-serif'
            ],
         },
         fontSize: {
            'menu-title-size': 'calc(var(--tw-menu-item-font-size) * .8)',
            'menu-font-size': 'var(--tw-menu-item-font-size)',
         },
         tabSize: {
            'default': '4',
         },

      },
   },
   corePlugins: {
      textSizeAdjust: true,
      fontFeatureSettings: true,
      fontVariationSettings: true,
   },

   plugins: [
      // Plugin for custom select box styles
      plugin(function ({
         addBase
      }) {
         addBase({
            // change default select element icons
            'select': {
               'background-image': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\'   stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
               'background-position': 'right .5rem center',
               'background-repeat': 'no-repeat',
               'background-size': '1.5em 1.5em',
               'padding-right': '2.5rem',
               'print-color-adjust': 'exact',
            },
         });
      }),
      // Plugin for additional custom utilities
      plugin(function ({
         addUtilities
      }) {
         const newUtilities = {
            '.tab-size-4': {
               'tab-size': '4',
            },
            '.bg-opacity-80': {
               '--tw-bg-opacity': '0.8',
            },
            '.stroke-opacity-40': {
               '--tw-text-opacity': '0.4',
            },
            // custom for shadow for header
            '.shadow-header': {
               '--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
               '--tw-shadow-colored': '0 1px 2px 0 var(--tw-shadow-color)',
               'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
            },
            '.print-color-adjust': {
               'print-color-adjust': 'exact'
            }
         };
         addUtilities(newUtilities);
      }),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      function ({
         addVariant,
         e
      }) {
         // Custom variant for fc-tab-active
         addVariant('fc-tab-active', ({
            modifySelectors,
            separator
         }) => {
            modifySelectors(({
               className
            }) => {
               return `.active.${e(`fc-tab-active${separator}${className}`)}`;
            });
         });


         // Custom variant for `.fc-collapse.open`
         addVariant('fc-collapse-open', ({
            modifySelectors,
            separator
         }) => {
            modifySelectors(({
               className
            }) => {
               return `.fc-collapse.open.${e(`fc-collapse-open${separator}${className}`)}`;
            });
         });


         // Custom variant for `.fc-dropdown.open.fc-dropdown-open`
         addVariant('fc-dropdown-open', ({
            modifySelectors,
            separator
         }) => {
            modifySelectors(({
               className
            }) => {
               return [
                  `.fc-dropdown.open.${e(`fc-dropdown-open${separator}${className}`)}`,
                  `.fc-dropdown.open .${e(`fc-dropdown-open${separator}${className}`)}`
               ].join(', ');
            });
         });


         addVariant('fc-modal-open', ({
            modifySelectors,
            separator
         }) => {
            modifySelectors(({
               className
            }) => {
               return `.fc-modal.open .${e(`fc-modal-open${separator}${className}`)}`;
            });
         });

      // Custom variant for .fc-offcanvas.open
      addVariant('fc-offcanvas-open', ({ modifySelectors, separator }) => {
         modifySelectors(({ className }) => {
           return `.fc-offcanvas.open.${e(`fc-offcanvas-open${separator}${className}`)}`;
         });
       });

      },

   ],

}