window.addEventListener('scroll', () => {
    const headers = Array.from(document.querySelectorAll('h1'));
    headers.forEach(header => {
        // Remove existing spans
        header.innerHTML = header.textContent;
        // Wrap each letter in a span and apply the jump animation
        header.innerHTML = header.textContent.split('').map((letter, index) => 
            `<span style="animation: jump 1s ${index / 10}s forwards">${letter}</span>`
        ).join('');
    });
});