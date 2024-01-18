const modeIcon = document.getElementById('mode_icon');
const form = document.getElementById('login_form');

modeIcon.addEventListener('click', toggleMode);

function toggleMode() {
  if (isDarkMode()) {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function isDarkMode() {
  return modeIcon.classList.contains('fa-sun');
}

function setDarkMode() {
  modeIconToggle();
  form.classList.add('dark');
}

function setLightMode() {
  modeIconToggle();
  form.classList.remove('dark');
}

function modeIconToggle() {
  modeIcon.classList.toggle('fa-moon');
  modeIcon.classList.toggle('fa-sun');
}
