(function() {
    emailjs.init("YOUR_USER_ID"); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_tt9davn';
    const templateID = 'template_ewictag'; // Replace with your actual template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
        }, (err) => {
            alert('Failed to send message. Error: ' + JSON.stringify(err));
        });
});
