  // Function to set the theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Function to toggle the theme
  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'synthwave' : 'light';
    setTheme(newTheme);
    document.querySelector('.theme-controller').checked = newTheme === 'synthwave';
  }

  // Apply the saved theme on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.querySelector('.theme-controller').checked = savedTheme === 'synthwave';
  });

  // Add event listener to the theme toggle
  document.querySelector('.theme-controller').addEventListener('change', toggleTheme);

  // Apply the saved theme immediately to prevent flashing
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
