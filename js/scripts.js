// Array to store image filenames and captions
const galleryImages = [
  { src: 'images/interior1.jpg', alt: 'Interior Painting Project' },
  { src: 'images/exterior1.jpg', alt: 'Exterior Painting Project' },
  { src: 'images/staining1.jpg', alt: 'Deck Staining Project' },
];

// Function to generate the gallery
function generateGallery() {
  const galleryContainer = document.getElementById('gallery');

  // Clear any existing content
  galleryContainer.innerHTML = '';

  // Loop through the galleryImages array and create image elements
  galleryImages.forEach((image) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-sm-6 col-md-4 mb-4'; // Adjust column size for different screens

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.className = 'img-fluid rounded'; // Make images responsive
    img.style.cursor = 'pointer';
    img.setAttribute('onclick', `openImage('${image.src}', '${image.alt}')`);

    colDiv.appendChild(img);
    galleryContainer.appendChild(colDiv);
  });
}

// Function to open the image in a new tab
function openImage(src, alt) {
  const newWindow = window.open();
  newWindow.document.write(
    `<img src="${src}" alt="${alt}" style="width: 100%;"/>`
  );
}

// Call the function to generate the gallery
generateGallery();
