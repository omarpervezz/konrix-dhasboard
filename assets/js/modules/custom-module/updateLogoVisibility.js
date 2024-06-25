const logoLight = document.getElementById('logo-light');
const logoDark = document.getElementById('logo-dark');

function updateLogoVisibility() {
    const mode = document.documentElement.getAttribute('data-mode');
    const menuColor = document.documentElement.getAttribute('data-menu-color');
    
    const showLightLogo = (mode === 'dark' || menuColor === 'brand' || menuColor === 'dark' || menuColor === 'gradient');
    
    if (showLightLogo) {
      if (!logoLight.classList.contains('block')) {
        logoLight.classList.remove('hidden');
        logoLight.classList.add('block');
      }
      if (logoDark.classList.contains('block')) {
        logoDark.classList.remove('block');
        logoDark.classList.add('hidden');
      }
    } else {
      if (!logoDark.classList.contains('block')) {
        logoDark.classList.remove('hidden');
        logoDark.classList.add('block');
      }
      if (logoLight.classList.contains('block')) {
        logoLight.classList.remove('block');
        logoLight.classList.add('hidden');
      }
    }
  }

  export default updateLogoVisibility;