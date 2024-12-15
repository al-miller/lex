document.addEventListener('DOMContentLoaded', () => {
    // Toggle Free Consultation Panel
    const consultationButton = document.getElementById('freeConsultationButton');
    const contactFormPanel = document.getElementById('contactFormPanel');

    consultationButton.addEventListener('click', () => {
        // Toggle the display property
        if (contactFormPanel.style.display === 'none' || contactFormPanel.style.display === '') {
            contactFormPanel.style.display = 'block';
        } else {
            contactFormPanel.style.display = 'none';
        }
    });

    // Handle Form Submission via AJAX
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission

        // Form data
        const formData = new FormData(this);

        try {
            // Send form data to FormSubmit
            const response = await fetch('https://formsubmit.co/your-email@example.com', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Hide the form
                contactForm.style.display = 'none';

                // Show the "Thank You" message
                thankYouMessage.style.display = 'block';
            } else {
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    });
});
