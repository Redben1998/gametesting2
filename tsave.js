  // Check for saved theme preference on page load
  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      const themeToggle = document.querySelector('.theme-controller');
      if (savedTheme === 'synthwave') {
        themeToggle.checked = true;
      }
    }
  });

  // Save theme preference to localStorage when the user toggles it
  const themeToggle = document.querySelector('.theme-controller');
  themeToggle.addEventListener('change', () => {
    const selectedTheme = themeToggle.checked ? 'synthwave' : 'light';
    localStorage.setItem('theme', selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
  });
