let cinnamonRollCount = parseInt(localStorage.getItem('cinnamonRollCount')) || 0;
document.getElementById("cinnamonRollCount").textContent = cinnamonRollCount;

setInterval(() => {
    cinnamonRollCount++;
    document.getElementById("cinnamonRollCount").textContent = cinnamonRollCount;
    localStorage.setItem('cinnamonRollCount', cinnamonRollCount);
}, 20000);