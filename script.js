// Function to toggle navigation menu on mobile devices
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

// Function to close navigation menu when a link is clicked
function closeMenu() {
  const nav = document.querySelector('nav');
  nav.classList.remove('active');
}

// Event listeners for menu toggling
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Function to resize background image based on viewport height
function resizeBackground() {
  const background = document.querySelector('.background-image');
  const windowHeight = window.innerHeight;
  background.style.height = `${windowHeight}px`;
}

// Event listener for window resize
window.addEventListener('resize', resizeBackground);

// Call resizeBackground function on page load
window.addEventListener('load', resizeBackground);
