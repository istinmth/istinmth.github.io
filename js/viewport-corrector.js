window.addEventListener('load', setRealViewHeight);
window.addEventListener('resize', setRealViewHeight);

function setRealViewHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}