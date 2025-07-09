document.addEventListener('DOMContentLoaded', function () {
  // Night-Day mode toggle
  (function() {
    function setMode(mode) {
      if (mode === 'night') {
        document.body.classList.add('night');
        localStorage.setItem('theme', 'night');
      } else {
        document.body.classList.remove('night');
        localStorage.setItem('theme', 'day');
      }
    }

    // Add toggle button if not present
    if (!document.querySelector('.night-day-toggle')) {
      var btn = document.createElement('button');
      btn.className = 'night-day-toggle';
      btn.innerText = '🌙 Night';
      btn.onclick = function() {
        var isNight = document.body.classList.contains('night');
        setMode(isNight ? 'day' : 'night');
        btn.innerText = isNight ? '🌙 Night' : '☀️ Day';
      };
      document.body.appendChild(btn);
    }

    // Set initial mode
    var saved = localStorage.getItem('theme');
    if (saved === 'night') {
      setMode('night');
      document.querySelector('.night-day-toggle').innerText = '☀️ Day';
    } else {
      setMode('day');
      document.querySelector('.night-day-toggle').innerText = '🌙 Night';
    }
  })();
});
