const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList[entry.isIntersecting ? 'add' : 'remove']('show'));
});
document.querySelectorAll('.hidden').forEach(ent => observer.observe(ent));

var element = document.querySelector('.multiplikativ');
element.addEventListener('animationend', function() {
    this.classList.add('after-animation');
});