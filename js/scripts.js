// Gallery Script
const galleryImages = [
  { src: 'images/interior1.jpg', alt: 'Interior Painting Project' },
  { src: 'images/exterior1.jpg', alt: 'Exterior Painting Project' },
  { src: 'images/staining1.jpg', alt: 'Deck Staining Project' },
];

function generateGallery() {
  const galleryContainer = document.getElementById('gallery');
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
    galleryImages.forEach((image) => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-sm-6 col-md-4 mb-4';
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      img.className = 'img-fluid rounded';
      img.style.cursor = 'pointer';
      img.setAttribute('onclick', `openImage('${image.src}', '${image.alt}')`);
      colDiv.appendChild(img);
      galleryContainer.appendChild(colDiv);
    });
  }
}

function openImage(src, alt) {
  const newWindow = window.open();
  newWindow.document.write(
    `<img src="${src}" alt="${alt}" style="width: 100%;"/>`
  );
}

// Navbar Script
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

    // Reset to the closed image on collapse hide event
    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      navbar.style.backgroundImage = `url('${closedImage}')`;
    });
  }
});
