// Create a new Intersection Observer instance
// The callback function will be triggered whenever the observed elements intersect with the viewport
const observer = new IntersectionObserver(entries => {
    // Loop over each entry
    entries.forEach(entry => {
        // If the element is intersecting with the viewport, add the 'show' class
        // If it's not intersecting, remove the 'show' class
        entry.target.classList[entry.isIntersecting ? 'add' : 'remove']('show');
    });
});

// Select all elements with the class 'hidden'
// Start observing each of these elements with the observer
document.querySelectorAll('.hidden').forEach(ent => observer.observe(ent));

// Select the element with the class 'multiplikativ'
var element = document.querySelector('.multiplikativ');

// Add an event listener for the 'animationend' event
// This event is fired when a CSS Animation has completed
// When the animation ends, add the 'after-animation' class to the element
element.addEventListener('animationend', function() {
    this.classList.add('after-animation');
});