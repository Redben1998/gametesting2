  // Function to set the theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Function to toggle the theme
  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // Apply the saved theme on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.querySelector('.theme-controller').checked = savedTheme === 'dark';
  });

  // Add event listener to the theme toggle
  document.querySelector('.theme-controller').addEventListener('change', toggleTheme);
