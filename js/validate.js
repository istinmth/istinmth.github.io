$(document).ready(function () {
    $("#foxForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            email: {
                required: true,
                email: true
            },
            bunda: {
                required: true,
                min: 2,
                max: 20
            },
            nyuszi: {
                require_from_group: [1, ".checkbox-wrapper input"]
            },
            eper: {
                require_from_group: [1, ".checkbox-wrapper input"]
            },
            nutella: {
                require_from_group: [1, ".checkbox-wrapper input"]
            },
            kukac: {
                require_from_group: [1, ".checkbox-wrapper input"]
            },
            "igen-nem": {
                required: true
            },
            hossz: {
                required: true,
                range: [0, 100]
            },
            szin: {
                required: true
            }
        },
        // error messages
        messages: {
            name: {
                required: "Kérlek, add meg a neved",
                minlength: "A neved legalább 2 karakter hosszú legyen",
                maxlength: "A neved legfeljebb 20 karakter hosszú legyen"
            },
            email: {
                required: "Kérlek, add meg az e-mail címed",
                email: "Kérlek, adj meg egy érvényes e-mail címet"
            },
            bunda: {
                required: "Kérlek, add meg, milyen vastagra növesszék a bundájukat a kis rókák",
                min: "A bunda legalább 1 cm vastag legyen",
                max: "A bunda legfeljebb 20 cm vastag lehet"
            },
            nyuszi: {
                require_from_group: "Kérlek, válassz legalább egy ételt"
            },
            eper: {
                require_from_group: "Kérlek, válassz legalább egy ételt"
            },
            nutella: {
                require_from_group: "Kérlek, válassz legalább egy ételt"
            },
            kukac: {
                require_from_group: "Kérlek, válassz legalább egy ételt"
            },
            "igen-nem": {
                required: "Kérlek, válaszolj erre a kérdésre"
            },
            hossz: {
                required: "Kérlek, add meg, milyen hosszúra kéne nőnie a rókacsemetéknek",
                range: "A hossz 0 és 100 cm között legyen"
            },
            szin: {
                required: "Kérlek, add meg, milyen színű a rókák bundája szerinted! "
            }
        }
    });
});