const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
document.querySelectorAll('.hidden').forEach(ent => observer.observe(ent));

var element = document.querySelector('.multiplikativ');
element.addEventListener('animationend', function() {
    this.classList.add('after-animation');
    this.removeEventListener('animationend', arguments.callee);
});