$("#foxForm").on('submit', function (fox) {
    fox.preventDefault(); /*Ez itt megelőzi, hogy a default dolog történjen, amikor submitolnánk.*/
    if (!$(this).valid()) {
        return false;
    } else {
        // Helyes a form, elküldjük az adatokat
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

        // Itt írjuk bele az adatokat az URL-be
        const query = Object.entries(data)
            .map(([key, value]) => `${key}=${value}`).join('&');
        window.location.href = "submitted.html?" + query;
    }
});