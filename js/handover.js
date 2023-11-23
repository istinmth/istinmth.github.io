$("#foxForm").on('submit', function(fox) {
    fox.preventDefault();
    if (!$(this).valid()) {
        return false;
    } else {
        // Form is valid, get the input values
        var nev = btoa($("#name-input").val());
        var email = btoa($("#email-input").val());
        var bunda = btoa($("#bunda-input").val());
        var nyuszi = btoa($("#nyuszi").is(":checked").toString());
        var eper = btoa($("#eper").is(":checked").toString());
        var nutella = btoa($("#nutella").is(":checked").toString());
        var kukac = btoa($("#kukac").is(":checked").toString());
        var igenNem = btoa($("input[name='igen-nem']:checked").val());
        var hossz = btoa($("#range-input").val());
        var szin = btoa($("#color-input").val());

        // Redirect the user and pass the form values as URL parameters
        window.location.href = "submitted.html?nev=" + nev +
            "&email=" + email +
            "&bunda=" + bunda +
            "&nyuszi=" + nyuszi +
            "&eper=" + eper +
            "&nutella=" + nutella +
            "&kukac=" + kukac +
            "&igenNem=" + igenNem +
            "&hossz=" + hossz +
            "&szin=" + szin;
    }
});