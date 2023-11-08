// Select the arrow
const arrow = document.querySelector('.arrow');

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the arrow is in the viewport
        if (entry.isIntersecting) {
            // Add the wiggle class to the arrow
            arrow.classList.add('wiggle');
            // Remove the hidden class from the arrow
            arrow.classList.remove('hidden');
        } else {
            // Remove the wiggle class from the arrow
            arrow.classList.remove('wiggle');
            // Add the hidden class back to the arrow
            arrow.classList.add('hidden');
        }
    });
});

// Start observing the arrow
observer.observe(arrow);