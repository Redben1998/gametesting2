  AOS.init();

  // Check localStorage for theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.getElementById('theme-body').setAttribute('data-theme', savedTheme);
    document.getElementById('theme-toggle').checked = savedTheme === 'dark';
  }

  // Toggle theme and save it to localStorage
  document.getElementById('theme-toggle').addEventListener('change', function () {
    const newTheme = this.checked ? 'dark' : 'light';
    document.getElementById('theme-body').setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
