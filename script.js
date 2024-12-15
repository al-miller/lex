document.addEventListener('DOMContentLoaded', () => {
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
});
