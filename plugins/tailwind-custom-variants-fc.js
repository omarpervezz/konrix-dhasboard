module.exports = function({ addVariant, e }) {
    // Custom variant for `.active`
    addVariant('fc-tab-active', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`fc-tab-active${separator}${className}`)}`;
      });
    });
  
    // Custom variant for `.fc-collapse.open`
    addVariant('fc-collapse-open', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.fc-collapse.open.${e(`fc-collapse-open${separator}${className}`)}`;
      });
    });
  
    // Custom variant for `.fc-dropdown.open.fc-dropdown-open`
    addVariant('fc-dropdown-open', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return [
          `.fc-dropdown.open.${e(`fc-dropdown-open${separator}${className}`)}`,
          `.fc-dropdown.open .${e(`fc-dropdown-open${separator}${className}`)}`
        ].join(', ');
      });
    });
  
    // Custom variant for `.fc-modal.open`
    addVariant('fc-modal-open', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.fc-modal.open .${e(`fc-modal-open${separator}${className}`)}`;
      });
    });
  
    // Custom variant for `.fc-offcanvas.open`
    addVariant('fc-offcanvas-open', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.fc-offcanvas.open.${e(`fc-offcanvas-open${separator}${className}`)}`;
      });
    });
  };
  