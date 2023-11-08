const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});
document.querySelectorAll('.hidden').forEach(ent => observer.observe(ent));

var element = document.querySelector('.multiplikativ');
// This event is fired when a CSS Animation has completed
element.addEventListener('animationend', function() {
    this.classList.add('after-animation');
    // Remove the event listener so the 'after-animation' class is only added once
    this.removeEventListener('animationend', arguments.callee);
});