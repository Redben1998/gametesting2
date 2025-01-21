  // Check for saved theme preference on page load
  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-controller');
    
    if (savedTheme) {
      // Apply the saved theme
      document.documentElement.setAttribute('data-theme', savedTheme);
      // Sync the toggle state with the saved theme
      if (savedTheme === 'synthwave') {
        themeToggle.checked = true;
      } else {
        themeToggle.checked = false;
      }
    } else {
      // Default theme if no preference is saved
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.checked = false; // Make sure toggle is off if there's no saved preference
    }
  });

  // Save or remove theme preference to localStorage when the user toggles it
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
