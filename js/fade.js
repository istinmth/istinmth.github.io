const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.add('fade-out');
        document.body.addEventListener('animationend', () => {
            document.body.classList.remove('fade-out');
            window.location.href = link.href;
        });
    });
});