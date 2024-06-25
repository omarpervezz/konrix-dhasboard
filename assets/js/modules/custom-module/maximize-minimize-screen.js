const toggleButton = document.getElementById('fullscreen');
const maximize = document.querySelector('#maximize');
const minimize = document.querySelector('#minimize');
let isDarkMode = false; 

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode; 

  if (isDarkMode) {
    maximize.classList.add('hidden');
    minimize.classList.remove('hidden');
  } else {
    maximize.classList.remove('hidden');
    minimize.classList.add('hidden');
  }
});