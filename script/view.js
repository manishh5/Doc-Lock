// Get the image container element
const imageContainer = document.getElementById('image-container');

// Get the images from local storage
const images = localStorage.getItem('images');

if (images) {
  console.log('Images found in local storage:', images);

  // Parse the images from JSON
  const imageUrls = JSON.parse(images);

  // Create an image element for each URL
  imageUrls.forEach((url, index) => {
    console.log('Creating image element for URL:', url);

    // Get the file name from the file URL
    const fileName = url.split('/').pop().split('?')[0];

    // Create an image element
    const image = document.createElement('img');
    image.src = url;
    image.alt = fileName;
    image.title = fileName;
    image.className = 'img';

    // Create a container for the image
    const imageWrapper = document.createElement('div');
    imageWrapper.appendChild(image);

    // Create update and delete buttons
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.className = 'update-button';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    // Add event listeners to buttons
    updateButton.addEventListener('click', () => {
      // Update image logic here
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          image.src = reader.result;
          // Update local storage with new image
          const index = imageUrls.indexOf(url);
          imageUrls[index] = URL.createObjectURL(file);
          localStorage.setItem('images', JSON.stringify(imageUrls));
        };
        reader.readAsDataURL(file);
      });
      input.click();
    });

    deleteButton.addEventListener('click', () => {
      // Delete image logic here
      // Remove image element from container
      imageContainer.removeChild(imageWrapper);

      // Update local storage to remove image URL
      const updatedImages = imageUrls.filter((url, idx) => idx !== imageUrls.indexOf(url));
      localStorage.setItem('images', JSON.stringify(updatedImages));
    });

    // Add buttons to image wrapper
    imageWrapper.appendChild(updateButton);
    imageWrapper.appendChild(deleteButton);

    // Add the image wrapper to the container
    imageContainer.appendChild(imageWrapper);
  });
} else {
  console.log('No images found in local storage');
}