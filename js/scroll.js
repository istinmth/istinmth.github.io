// The callback function will be triggered whenever the observed elements intersect with the viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is intersecting with the viewport, add the 'show' class
        // If it's not intersecting, remove the 'show' class
        entry.target.classList[entry.isIntersecting ? 'add' : 'remove']('show');
    });
});
// Select all elements with the class 'hidden'
// Start observing each of these elements with the observer
document.querySelectorAll('.hidden').forEach(ent => observer.observe(ent));
var element = document.querySelector('.multiplikativ');
// This event is fired when a CSS Animation has completed
element.addEventListener('animationend', function() {
    this.classList.add('after-animation');
});