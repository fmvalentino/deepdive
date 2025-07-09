// Toggle night/day mode with localStorage persistence
(function () {
  function setMode(mode) {
    if (mode === 'night') {
      document.body.classList.add('night');
      localStorage.setItem('theme', 'night');
    } else {
      document.body.classList.remove('night');
      localStorage.setItem('theme', 'day');
    }
  }

  var btn = document.querySelector('.night-day-toggle');
  if (btn) {
    btn.onclick = function () {
      var isNight = document.body.classList.contains('night');
      setMode(isNight ? 'day' : 'night');
      btn.innerText = isNight ? '🌙 Night' : '☀️ Day';
    };

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
