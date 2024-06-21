// Get the CTA button element and add an event listener to it
const ctaButton = document.querySelector('#cta');
if (ctaButton) {
    ctaButton.addEventListener('click', handleCtaClick);
}

function handleCtaClick() {
    // Navigate to the About Section using a smoother scrolling experience
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Get the cookie popup element
const cookiePopup = document.getElementById("cookie-popup");

// Add a click event listener to the close button element
document.getElementById("close-button").addEventListener("click", function() {
  // Remove the cookie popup from the DOM after 5 seconds
  setTimeout(function() {
    cookiePopup.remove();
  }, 5000);
});