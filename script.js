// Function to handle user login
function loginUser(email, password) {
    // Send a POST request to the backend API endpoint for user login
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.ok) {
            // User login successful, redirect to dashboard or homepage
            window.location.href = '/dashboard';
        } else {
            // User login failed, display error message
            alert('Invalid email or password. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in. Please try again later.');
    });
}

// Function to handle caregiver search
function searchCaregivers(location, service) {
    // Send a GET request to the backend API endpoint for searching caregivers
    fetch(`/api/caregivers?location=${location}&service=${service}`)
    .then(response => response.json())
    .then(data => {
        // Process caregiver search results and display them on the UI
        // Example: Render search results on a caregiver listing page
        renderCaregiverList(data);
    })
    .catch(error => {
        console.error('Error searching caregivers:', error);
        alert('An error occurred while searching for caregivers. Please try again later.');
    });
}

// Function to handle booking appointment with a caregiver
function bookAppointment(caregiverId, dateTime) {
    // Send a POST request to the backend API endpoint for booking appointments
    fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ caregiverId, dateTime })
    })
    .then(response => {
        if (response.ok) {
            // Booking successful, display success message to the user
            alert('Appointment booked successfully!');
        } else {
            // Booking failed, display error message to the user
            alert('Failed to book appointment. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error booking appointment:', error);
        alert('An error occurred while booking appointment. Please try again later.');
    });
}

// Event listeners for form submissions
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loginUser(email, password);
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const service = document.getElementById('service').value;
    searchCaregivers(location, service);
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const caregiverId = document.getElementById('caregiverId').value;
    const dateTime = document.getElementById('dateTime').value;
    bookAppointment(caregiverId, dateTime);
});
