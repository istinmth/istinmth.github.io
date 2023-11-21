function loadFormDataFromURL() {
    const params = new URLSearchParams(window.location.search);
    const keys = ['nev', 'email', 'bunda', 'nyuszi', 'eper', 'nutella', 'kukac', 'igenNem', 'hossz', 'szin'];
    let data = {};

    keys.forEach(key => {
        let value = params.get(key);
        // Decode the base64 encoded value
        data[key] = atob(value);
    });

    function lightenColor(color, percent) {
        // Convert the hex color to RGB
        var r = parseInt(color.substr(1, 2), 16);
        var g = parseInt(color.substr(3, 2), 16);
        var b = parseInt(color.substr(5, 2), 16);

        // Increase each RGB value by 10% and clamp to 255
        r = Math.min(255, Math.round(r * (1 + percent / 100)));
        g = Math.min(255, Math.round(g * (1 + percent / 100)));
        b = Math.min(255, Math.round(b * (1 + percent / 100)));

        // Convert back to hex
        r = r.toString(16).padStart(2, '0');
        g = g.toString(16).padStart(2, '0');
        b = b.toString(16).padStart(2, '0');

        return '#' + r + g + b;
    }

    document.getElementById('username').textContent = data['nev'];
    document.getElementById('rokameret').textContent = data['hossz'];

    document.querySelectorAll('.dark').forEach(path => {
        path.style.fill = data['szin'];
    });

    document.querySelectorAll('.light').forEach(path => {
        path.style.fill = lightenColor(data['szin'], 20);
    });

    // Show or hide images based on checkbox responses
    ['nyuszi', 'eper', 'nutella', 'kukac'].forEach(id => {
        const img = document.getElementById(id);
        if (img) {
            img.style.display = data[id] === 'true' ? 'block' : 'none';
        }
    });

    if (data['igenNem'] === 'igen') {
        document.getElementById('gerinchuros').textContent = 'gerinchúrosok';
    } else {
        document.getElementById('gerinchuros').textContent = 'puhatestűek';
    }
}

window.onload = loadFormDataFromURL;