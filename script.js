// Add a click event listener to the navigation menu button
document.querySelector('.nav-button').addEventListener('click', () => {
  // Toggle the visibility of the navigation menu
  document.querySelector('.nav-menu').classList.toggle('show');
});

// Add a click event listener to the "About Us" button in the navigation menu
document.querySelector('.about-button').addEventListener('click', () => {
  // Open a new tab with the URL of the About page
  window.open('/about.html', '_blank');
});

// Add a click event listener to the "Contact Us" button in the navigation menu
document.querySelector('.contact-button').addEventListener('click', () => {
  // Open a new tab with the URL of the Contact page
  window.open('/contact.html', '_blank');
});