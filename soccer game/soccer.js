
  // Get references to HTML elements
const ageModal = document.getElementById('age-modal');     // Modal for age verification
const ageInput = document.getElementById('age-input');     // Input field for age
const verifyAgeBtn = document.getElementById('verify-age'); // Button to verify age

// Function to display the age verification modal
function showAgeModal() {
  ageModal.style.display = 'flex';
}

// Function to hide the age verification modal
function closeAgeModal() {
  ageModal.style.display = 'none';
}

// Add event listener to the verify age button
verifyAgeBtn.addEventListener('click', function() {
  // Parse the age input to an integer
  const userAge = parseInt(ageInput.value);

  // Check if the user's age is 18 or older
  if (userAge >= 18) {
    closeAgeModal(); // Close the age verification modal
    // Start the game here
  } else {
    // Display an alert if the user's age is below 18
    alert('Sorry, you must be 18 or older to play.');
  }
});

// Display the age verification modal when the page loads
showAgeModal();
