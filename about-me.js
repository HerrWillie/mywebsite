// Get elements with ids from HTML
const bioSection = document.getElementById('bio');
const skillsSection = document.getElementById('skills');

// Function to toggle the display of the Bio and Skills sections
function toggleSections() {
    const buttons = document.querySelectorAll('.section-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const targetId = e.target.dataset.target;
            const section = document.getElementById(targetId);

            if (bioSection.classList.contains('hidden')) {
                bioSection.classList.remove('hidden');
                skillsSection.classList.add('hidden');
            } else if (skillsSection.classList.contains('hidden')) {
                skillsSection.classList.remove('hidden');
                bioSection.classList.add('hidden');
            }

            // Add the "active" class to the button that was clicked
            buttons.forEach((button) => {
                button.classList.remove('active');
            });
            e.target.classList.add('active');
        });
    });
}

// Call the function when the page loads
window.addEventListener('load', () => {
    toggleSections();
});