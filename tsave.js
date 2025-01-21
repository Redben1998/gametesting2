
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
    if (themeToggle.checked) {
      // If checked, save the 'synthwave' theme
      localStorage.setItem('theme', 'synthwave');
      document.documentElement.setAttribute('data-theme', 'synthwave');
    } else {
      // If unchecked, remove the theme from localStorage and reset to default
      localStorage.removeItem('theme');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
