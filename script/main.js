// Get the input field and button elements
const inputFile = document.getElementById('input-field');
const uploadButton = document.querySelector('.btn');

// Add an event listener to the upload button
uploadButton.addEventListener('click', () => {
  // Simulate a click on the input field
  inputFile.click();
});

// Add an event listener to the input field
inputFile.addEventListener('change', (e) => {
  // Get the selected files
  const files = e.target.files;

  // Check if files are selected
  if (files.length > 0) {
    // Create a new FileReader instance for each file
    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      // Add an event listener to the FileReader
      reader.addEventListener('load', () => {
        // Get the file data as a URL
        const fileUrl = reader.result;

        // Get the existing images from local storage
        const existingImages = localStorage.getItem('images');
        let images = [];

        if (existingImages) {
          images = JSON.parse(existingImages);
        }

        // Add the new image to the array
        images.push(fileUrl);

        // Store the updated array in local storage
        localStorage.setItem('images', JSON.stringify(images));
      });

      // Read the file as a data URL
      reader.readAsDataURL(file);
    });
  }
});

// Get the saved name from local storage
const savedName = localStorage.getItem('user');

// Check if the saved name exists
if (savedName) {
  // Parse the saved name from JSON
  const userName = JSON.parse(savedName).name;

  // Get the header text element
  const headerText = document.querySelector('.text-styles');

  // Update the header text with the saved name
  headerText.textContent = `Hi!.. ${userName}`;
  headerText.style.whiteSpace = 'nowrap';
}
