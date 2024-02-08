// Create a new IntersectionObserver, which is a built-in object that 
// allows you to execute a callback function when an element intersects 
// with the viewport (or a specified element).
const observer = new IntersectionObserver(entries => {
    // For each entry (which represents a target element and its position 
    // relative to the viewport or specified element), check if it is intersecting.
    entries.forEach(entry => {
        // If the entry is intersecting (meaning it is currently visible in the viewport), 
        // add the 'show' class to the target element.
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Select all elements with the class 'hidden' and for each one, start observing 
// it with the IntersectionObserver. When one of these elements becomes visible 
// in the viewport, it will have the 'show' class added to it.
document.querySelectorAll('.hidden').forEach(ent => observer.observe(ent));