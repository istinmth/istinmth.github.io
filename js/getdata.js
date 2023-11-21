window.onload = function () {
    // This function is used to get the value of a URL parameter
    function getParam(name) {
        // Create a regular expression to find the URL parameter
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(location.search);
        // If the URL parameter is found, decode its value; otherwise, return an empty string
        return results ? atob(decodeURIComponent(results[1].replace(/\+/g, ' '))) : '';
    }

    // This function is used to lighten a color by a specific percentage
    function lightenColor(color, percent) {
        // Remove the '#' from the color string and convert the remaining hexadecimal string to an integer
        var num = parseInt(color.replace("#", ""), 16),
            // Calculate the amount to lighten each color component
            amt = Math.round(2.55 * percent),
            // Extract the red color component and add the amount to lighten
            R = (num >> 16) + amt,
            // Extract the green color component and add the amount to lighten
            G = (num >> 8 & 0x00FF) + amt,
            // Extract the blue color component and add the amount to lighten
            B = (num & 0x0000FF) + amt;
        // Combine the color components back into a single integer, convert it to a hexadecimal string, and return the string with a '#' prepended
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    // Define the URL parameters to get
    var params = ['szin', 'hossz', 'igenNem', 'nyuszi', 'eper', 'kukac', 'nutella'];
    // Get the values of the URL parameters
    var values = params.map(getParam);

    // Destructure the values array into individual variables
    var [szin, size, gerinchuros, nyuszi, eper, kukac, nutella] = values;
    // Lighten the 'szin' color by 13%
    var lighterColor = lightenColor(szin, 13);
    // Capitalize the first letter of the 'name' variable
    var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    // Set the 'fill' attribute of all elements with the 'dark' class to the 'szin' color
    document.querySelectorAll('.dark').forEach(el => el.setAttribute('fill', szin));
    // Set the 'fill' attribute of all elements with the 'light' class to the 'lighterColor' color
    document.querySelectorAll('.light').forEach(el => el.setAttribute('fill', lighterColor));
    // Set the text content of the element with the 'rokameret' class to the 'size' variable
    document.querySelector('.rokameret').textContent = size;
    // Set the text content of the element with the 'gerinchuros' class based on the 'gerinchuros' variable
    document.querySelector('.gerinchuros').textContent = gerinchuros === 'igen' ? 'gerinchúrosok törzse' : 'puhatestűek törzse';
    document.querySelector('.username').textContent = nameCapitalized;

    ['nyuszi', 'eper', 'kukac', 'nutella'].forEach(element => {
        document.querySelector('.' + element).style.display = getParam(element) === 'true' ? 'block' : 'none';
    });
};

function downloadSnapshot() {
    document.querySelector('.download-button').style.display = 'none';
    html2canvas(document.querySelector(".form-submitted-container"), { useCORS: true }).then(canvas => {
        var img = canvas.toDataURL("image/png");
        document.querySelector('.download-button').style.display = 'block';
        // Create a link element
        var link = document.createElement('a');
        link.href = img;
        link.download = 'roka.png';  // Set the download attribute of the link
        link.click();  // Click the link to download the image
    });
}
