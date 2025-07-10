// Toggle night/day mode with localStorage persistence
(function () {
  function setMode(mode) {
    if (mode === 'night') {
      document.documentElement.classList.add('night');
      localStorage.setItem('theme', 'night');
    } else {
      document.documentElement.classList.remove('night');
      localStorage.setItem('theme', 'day');
    }
  }

  var btn = document.querySelector('.night-day-toggle');
  if (btn) {
    // On button click, toggle mode and update button text
    btn.addEventListener('click', function () {
      var isNight = document.documentElement.classList.contains('night');
      setMode(isNight ? 'day' : 'night');
      btn.innerText = isNight ? '🌙 Night' : '☀️ Day';
    });

    // Initialize button text based on saved theme
    var saved = localStorage.getItem('theme');
    if (saved === 'night') {
      setMode('night');
      btn.innerText = '☀️ Day';
    } else {
      setMode('day');
      btn.innerText = '🌙 Night';
    }
  }
})();
