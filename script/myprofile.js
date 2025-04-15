// Get the form elements
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const maleRadio = document.querySelector('#male');
const femaleRadio = document.querySelector('#female');
const dateInput = document.querySelector('#MoveInDate');

// Add an event listener to the save button
document.querySelector('.save-button').addEventListener('click', (e) => {
  e.preventDefault();

  // Get the values from the form fields
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const gender = maleRadio.checked ? 'Male' : femaleRadio.checked ? 'Female' : '';
  const dateOfBirth = dateInput.value;

  // Create a user object
  const user = {
    name,
    email,
    phone,
    gender,
    dateOfBirth,
  };

  // Store the user object in local storage
  localStorage.setItem('user', JSON.stringify(user));

  // Display a success message
  alert('details saved successfully!');
});