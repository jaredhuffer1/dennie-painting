document.addEventListener('DOMContentLoaded', function () {
  // Define the two images for the navbar states
  const closedImage = 'images/crackedwhitewall.jpg'; // Image when the navbar is closed
  const openImage = 'images/cleanwhitewall.jpg'; // Image when the navbar is opened

  // Get the navbar elements
  const navbar = document.getElementById('navbar');
  const navbarToggler = document.getElementById('navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');

  // Ensure the elements exist before applying event listeners
  if (navbar && navbarToggler && navbarCollapse) {
    // Add click event listener to the navbar toggler button
    navbarToggler.addEventListener('click', function () {
      // Check if the menu is being opened or closed
      const isCollapsed = !navbarCollapse.classList.contains('show'); // True if menu is opening

      // Change the background image based on the state
      if (isCollapsed) {
        navbar.style.backgroundImage = `url('${openImage}')`;
      } else {
        navbar.style.backgroundImage = `url('${closedImage}')`;
      }
    });

    // Add an event listener for when the collapse is toggled to closed
    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      // When the navbar collapses, revert to the first image
      navbar.style.backgroundImage = `url('${closedImage}')`;
    });
  }
});
// Function to add 'active' class to elements when scrolled into view
function revealOnScroll() {
  const reveals = document.querySelectorAll('.about-title, .about-text');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// Add an 'active' class with CSS animation
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', revealOnScroll);
});
