  // Function to set the theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Function to get the current theme
  function getTheme() {
    return document.documentElement.getAttribute('data-theme');
  }

  // Apply the saved theme on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector('.theme-controller').checked = savedTheme === 'synthwave';
    }
  });

  // Watch for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme') {
        const currentTheme = getTheme();
        localStorage.setItem('theme', currentTheme);
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Apply the saved theme immediately to prevent flashing
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
