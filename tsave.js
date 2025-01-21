
  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // Apply the saved theme
      document.documentElement.setAttribute('data-theme', savedTheme);
      const themeToggle = document.querySelector('.theme-controller');
      
      // Sync the toggle state with the saved theme
      if (savedTheme === 'synthwave') {
        themeToggle.checked = true;
      } else {
        themeToggle.checked = false;
      }
    } else {
      // Default theme if no preference is saved
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });

  const themeToggle = document.querySelector('.theme-controller');
  themeToggle.addEventListener('change', () => {
    const selectedTheme = themeToggle.checked ? 'synthwave' : 'light';
    // Save to localStorage
    localStorage.setItem('theme', selectedTheme);
    // Apply the selected theme
    document.documentElement.setAttribute('data-theme', selectedTheme);
  });
