$("#foxForm").on('submit', function(fox) {
    fox.preventDefault();
    if (!$(this).valid()) {
        return false;
    } else {
        // Form is valid, get the input values
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

        // Redirect the user and pass the form values as URL parameters
        const query = Object.entries(data)
            .map(([key, value]) => `${key}=${value}`).join('&');
        window.location.href = "submitted.html?" + query;
    }
});
