document.addEventListener('DOMContentLoaded', () => {
    // Variables for Free Consultation Panel
    const consultationButton = document.getElementById('freeConsultationButton');
    const contactButton = document.getElementById('freeConsultationContactButton'); // Button in contact section
    const contactFormPanel = document.getElementById('contactFormPanel');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const fullNameField = document.getElementById('fullName'); // First input field in the form

    // Toggle Contact Form Panel
    const toggleContactForm = () => {
        const isFormHidden = contactFormPanel.style.display === 'none' || contactFormPanel.style.display === '';
        contactFormPanel.style.display = isFormHidden ? 'block' : 'none';
        thankYouMessage.style.display = 'none'; // Ensure the thank-you message is hidden

        // Focus on the first field if form is shown
        if (isFormHidden && fullNameField) {
            fullNameField.focus();
        }

        // Smooth scroll to the top of the page
        if (isFormHidden) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Add event listeners to toggle form for both buttons
    [consultationButton, contactButton].forEach(button => {
        if (button) {
            button.addEventListener('click', toggleContactForm);
        }
    });

    document.addEventListener('click', (e) => {
    if (
        contactFormPanel.style.display === 'block' && // Check if the form is visible
        !contactFormPanel.contains(e.target) && // Click is outside the form
        ![consultationButton, contactButton].includes(e.target) // Click is not on any toggle button
    ) {
        contactFormPanel.style.display = 'none'; // Close the form
    }
});

    // Handle Form Submission via AJAX
    const contactForm = document.getElementById('contactForm');

    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(contactForm);

        try {
            // Send form data via FormSubmit
            const response = await fetch('https://formsubmit.co/katiabel@gmail.com', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Hide form and show thank-you message
                contactFormPanel.style.display = 'none';
                thankYouMessage.style.display = 'block';
            } else {
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            alert(`An error occurred: ${error.message}`);
        }
    });

    // Dropdown Functionality
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');

        // Toggle dropdown menu on trigger click
        trigger?.addEventListener('click', (e) => {
            e.preventDefault();
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                menu.style.display = 'none';
            }
        });
    });
});





/////carousel1 ///////

// document.addEventListener('DOMContentLoaded', () => {
//     const carousel = document.querySelector('.review-carousel');
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');
//     const cards = document.querySelectorAll('.review-card');



//     // Clone all testimonials
//     const clonedCards = [];
//     cards.forEach(card => {
//         const clonedCard = card.cloneNode(true);
//         clonedCards.push(clonedCard);
//     });

//     // Append the cloned testimonials to the end of the original list
//     clonedCards.forEach(clonedCard => {
//         carousel.appendChild(clonedCard);
//     });





//     let currentIndex = 0;

//     const updateCarousel = () => {
//         carousel.style.transform = `translateX(${-currentIndex * 33.33}%)`;
//     };

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
//         updateCarousel();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % cards.length;
//         updateCarousel();
//     });

//     updateCarousel();
// });

//////carousel2 ///////

// document.addEventListener('DOMContentLoaded', () => {
//     const carousel = document.querySelector('.review-carousel');
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');
//     const cards = document.querySelectorAll('.review-card');

//     // Clone all testimonials
//     const clonedCards = [];
//     cards.forEach(card => {
//         const clonedCard = card.cloneNode(true);
//         clonedCards.push(clonedCard);
//     });

//     // Append the cloned testimonials to the end of the original list
//     clonedCards.forEach(clonedCard => {
//         carousel.appendChild(clonedCard);
//     });

//     let currentIndex = 0;

//     const updateCarousel = () => {
//         carousel.style.transform = `translateX(${-currentIndex * 33.33}%)`;
//     };

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length * 2 - 1;
//         updateCarousel();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % (cards.length * 2);
//         updateCarousel();
//     });

//     updateCarousel();
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const carousel = document.querySelector('.review-carousel');
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');
//     const cards = document.querySelectorAll('.review-card');
//     const cardWidth = carousel.offsetWidth / 3;

//     // Remove original cards
//     cards.forEach(card => card.remove());

//     // Append multiple copies of the original cards
//     const numCopies = 3;
//     for (let i = 0; i < numCopies; i++) {
//         cards.forEach(card => carousel.appendChild(card.cloneNode(true)));
//     }

//     let currentIndex = 0;

//     const updateCarousel = () => {
//         carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
//         setTimeout(() => {
//         carousel.style.transition = 'transform 0.5s ease-in-out';
//     },0);
//     };

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + cards.length * numCopies) % (cards.length * numCopies);
//         updateCarousel();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % (cards.length * numCopies);
//         updateCarousel();
//     });

//     updateCarousel();
// });

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.carousel-container');
  const carousel = document.querySelector('.review-carousel');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const cards = document.querySelectorAll('.review-card');

  const visibleCards = 3; // Number of cards visible at a time
  const wrapperWidth = wrapper.offsetWidth; // Total width of the carousel container
  const cardWidth = wrapperWidth / visibleCards; // Width of each card
  const gap = 10; // Gap between cards
  const totalCards = cards.length;

  let currentIndex = 0; // Current index for the first visible card

  // Dynamically set the carousel's total width
  carousel.style.width = `${totalCards * cardWidth + (totalCards - 1) * gap}px`;

  // Ensure each card has the correct width
  cards.forEach(card => {
    card.style.flex = `0 0 ${cardWidth}px`;
    card.style.maxWidth = `${cardWidth}px`;
  });

  // Function to update carousel position
  const updateCarousel = () => {
    const maxIndex = totalCards - visibleCards; // Max valid index
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex)); // Clamp index
    const translateX = -(currentIndex * (cardWidth + gap)); // Include gap in translation
    carousel.style.transform = `translateX(${translateX}px)`;
  };

  // Event listeners for navigation
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Initial setup
  updateCarousel();
});
