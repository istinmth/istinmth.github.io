// Retrieve the 'cinnamonRollCount' variable from local storage and convert it to an integer.
// If it doesn't exist or it's not a number, default to 0.let cinnamonRollCount = parseInt(localStorage.getItem('cinnamonRollCount')) || 0;
document.getElementById("cinnamonRollCount").textContent = cinnamonRollCount;

// Set an interval to run a function every 20000 milliseconds (20 seconds).
setInterval(() => {
    cinnamonRollCount++;
    document.getElementById("cinnamonRollCount").textContent = cinnamonRollCount;
    // Store the updated count in local storage so it persists across browser sessions.
    localStorage.setItem('cinnamonRollCount', cinnamonRollCount);
}, 20000);