document.getElementById('color-input').addEventListener('input', function() {
    document.getElementById('selectedColor').style.backgroundColor = this.value;
});