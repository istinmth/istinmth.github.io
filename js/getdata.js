// This javascript file is used to load the form data from the URL and display it on the page. The various questions answered on the previous page got converted to URL parameters, and we use some of them now: for instance the color, which we fill the SVG paths with, or the chosen food items, etc.
function loadFormDataFromURL() {
    // Create a URLSearchParams object from the URL's query string
    const params = new URLSearchParams(window.location.search);
    const keys = ['nev', 'email', 'bunda', 'nyuszi', 'eper', 'nutella', 'kukac', 'igenNem', 'hossz', 'szin'];
    // Initialize an empty object to store the data
    let data = {};

    // For each key, get the value from the URL parameters and decode it from base64
    keys.forEach(key => {
        let value = params.get(key);
        data[key] = atob(value);
    });

    function lightenColor(color, percent) {
        // Hex colors are made up of 3 pairs of characters, representing the red, green, and blue components of the color.
        // We parse these pairs into integers, and then multiply them by (1 + percent / 100) to lighten the color.
        var r = parseInt(color.substr(1, 2), 16);
        var g = parseInt(color.substr(3, 2), 16);
        var b = parseInt(color.substr(5, 2), 16);

        r = Math.min(255, Math.round(r * (1 + percent / 100)));
        g = Math.min(255, Math.round(g * (1 + percent / 100)));
        b = Math.min(255, Math.round(b * (1 + percent / 100)));

        // Convert the color values back to hex and pad with zeros if necessary - hex values for numbers less than 16 are single characters, so we pad them with a leading zero.
        r = r.toString(16).padStart(2, '0');
        g = g.toString(16).padStart(2, '0');
        b = b.toString(16).padStart(2, '0');

        return '#' + r + g + b;
    }

    // Function to capitalize the first letter of each word in a name
    function capitalizeName(name) {
        return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    document.getElementById('username').textContent = capitalizeName(data['nev']);
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

function downloadSnapshot() {

    // Hide the download button, so it's not in the screenshot.
    document.querySelector('.download-button').style.display = 'none';
    // Use html2canvas to create a canvas from the '.form-submitted-container' element
    // The useCORS option is necessary to capture the screenshot, because the CORS policy disallows the usage of cross-origin resources on non-https connections.
    html2canvas(document.querySelector(".form-submitted-container"), { useCORS: true }).then(canvas => {
        // Convert the canvas to a PNG data URL
        var img = canvas.toDataURL("image/png");
        document.querySelector('.download-button').style.display = 'block';
        // Create a link element, set the download attribute to 'roka.png', and click the link to download the image
        var link = document.createElement('a');
        link.href = img;
        link.download = 'roka.png';
        link.click();
    });
}
window.onload = loadFormDataFromURL;