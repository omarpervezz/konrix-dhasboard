// export default function initObservers() {
//     const htmlTag = document.documentElement;
  
//     const observer = new MutationObserver((mutationsList) => {
//       mutationsList.forEach((mutation) => {
//         if (mutation.attributeName === 'data-mode') {
//           updateIcons();
//         }
//       });
//     });
  
//     observer.observe(htmlTag, { attributes: true, attributeFilter: ['data-mode'] });
  
//     // Initial check to set the correct icons based on the current data-mode
//     updateIcons();
//   }
  
//   const toggleButton = document.getElementById('light-dark-mode');
//   const moonIcon = document.querySelector('.moon-icon');
//   const sunIcon = document.querySelector('.sun-icon');
  
//   // Function to update icons based on data-mode attribute
//   function updateIcons() {
//     const isDarkMode = document.documentElement.getAttribute('data-mode') === 'dark';
  
//     if (isDarkMode) {
//       moonIcon.classList.add('hidden');
//       sunIcon.classList.remove('hidden');
//     } else {
//       moonIcon.classList.remove('hidden');
//       sunIcon.classList.add('hidden');
//     }
//   }
  
//   toggleButton.addEventListener('click', () => {
//     // No need to set the attribute here as it is handled elsewhere
//     updateIcons(); // Call to ensure the icons update immediately upon button click
//   });
  
//   // Initialize observers when the script is loaded
//   initObservers();
  