// Attach an event handler to the form submission event
$("#foxForm").on('submit', function (fox) {
    // Prevent the form from being submitted in the default way
    fox.preventDefault();

    // If the form is not valid, return false to stop the function
    if (!$(this).valid()) {
        return false;
    } else {
        // Each value is base64 encoded using the btoa function
        const data = {
            nev: btoa($("#name-input").val()),
            email: btoa($("#email-input").val()),
            bunda: btoa($("#bunda-input").val()),
            nyuszi: btoa($("#nyuszi").is(":checked").toString()),
            eper: btoa($("#eper").is(":checked").toString()),
            nutella: btoa($("#nutella").is(":checked").toString()),
            kukac: btoa($("#kukac").is(":checked").toString()),
            igenNem: btoa($("input[name='igen-nem']:checked").val()),
            hossz: btoa($("#range-input").val()),
            szin: btoa($("#color-input").val()),
        };

        // Convert the data object into a query string, with each key-value pair separated by an ampersand
        const query = Object.entries(data)
            .map(([key, value]) => `${key}=${value}`).join('&');
        // Redirect the browser to the submitted.html page, with the form data in the query string, so that it can be read by the getdata.js script later
        window.location.href = "submitted.html?" + query;
    }
});
