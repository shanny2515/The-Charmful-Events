// This window  willretrive the user's input from the local storage and display it
const usersData = JSON.parse(localStorage.getItem("usersData"));

if (usersData) {
    const details = document.getElementById('bookingDetails');
    details.innerHTML = `
        <h2>Booking Details</h2>
        <p><strong>Name:</strong> ${usersData.name}</p>
        <p><strong>Email:</strong> ${usersData.email}</p>
        <p><strong>Phone:</strong> ${usersData.phone}</p>
        <p><strong>Event Type:</strong> ${usersData.eventType}</p>
        <p><strong>Date:</strong> ${usersData.date}</p>
        <p><strong>Number of Guests:</strong> ${usersData.guests}</p>
        <p><strong>Message:</strong> ${usersData.message}</p>
    `;
} else{
    document.getElementById('bookingDetails').textContent = "No booking details found.";
}