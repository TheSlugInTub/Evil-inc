document.getElementById('send-button').addEventListener('click', function() {
    const message = document.getElementById('join-message').value;

    if (message.trim() === "") {
        document.getElementById('form-response').textContent = "Please enter a message!";
        return;
    }

    // Simulate sending the message (you'd integrate with your server here)
    console.log('Message sent: ', message);

    // Show a success message
    document.getElementById('form-response').textContent = "Your message has been sent successfully!";

    // Clear the textarea
    document.getElementById('join-message').value = "";
});

// Example: Sending form data via POST to a backend
fetch('https://your-backend-url.com/api/join', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: message })
})
.then(response => response.json())
.then(data => {
    document.getElementById('form-response').textContent = "Your message has been sent successfully!";
})
.catch(error => {
    document.getElementById('form-response').textContent = "Failed to send message.";
    console.error('Error:', error);
});

