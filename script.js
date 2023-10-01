// Get references to the form and its elements
const loginForm = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = usernameInput.value;
    const password = passwordInput.value;

    // You can perform further validation and authentication here

    // For demonstration, we'll just show an alert message
    alert(`Logged in as ${username}`);
}

// Add an event listener for form submission
loginForm.addEventListener('submit', handleSubmit);
