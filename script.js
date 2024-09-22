// Simple JavaScript to toggle background color on button click
document.getElementById('toggle-btn').addEventListener('click', function() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'black' ? 'blue' : 'black';
});

// Handle form submission without PHP
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (name && email && message) {
        // Display success message (simulate form submission)
        document.getElementById('form-status').textContent = `Thank you, ${name}! Your message has been sent.`;
    } else {
        // Display error message
        document.getElementById('form-status').textContent = 'Please fill in all fields.';
    }
});
