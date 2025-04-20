  // Dark mode functionality
  // Create dark mode toggle button
  const button = document.createElement('button');
  button.classList.add('dark-mode-toggle');
  button.innerHTML = '☀️'; // Sun icon for light mode
  document.body.appendChild(button);
  
  // Check for saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.documentElement.classList.add('dark');
      button.innerHTML = '🌙'; // Moon icon for dark mode
  }
  
  // Add event listener to toggle dark mode
  button.addEventListener('click', function() {
      if (document.documentElement.classList.contains('dark')) {
          // Switch to light mode
          document.documentElement.classList.remove('dark');
          button.innerHTML = '☀️';
          localStorage.setItem('darkMode', 'disabled');
      } else {
          // Switch to dark mode
          document.documentElement.classList.add('dark');
          button.innerHTML = '🌙';
          localStorage.setItem('darkMode', 'enabled');
      }
  });

  function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    } else {
      navbar.classList.add("active");
    }
  }


  const counters = document.querySelectorAll('.counter');

const startCounting = () => {
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
};

// Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting();
      observer.unobserve(entry.target); // run only once
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('#stats');
if (statsSection) {
  observer.observe(statsSection);
}
