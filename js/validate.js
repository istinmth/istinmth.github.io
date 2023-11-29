$.extend($.validator.messages, {
    require_from_group: "Kérlek válassz legalább egy ételt!"
});
$(document).ready(function () {
    $("#foxForm").validate({
        errorClass: "errorMessage",
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());
        },
        rules: {
            nev: {
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
                require_from_group: [1, ".checkbox-grid input[type='checkbox']"]
            },
            eper: {
                require_from_group: [1, ".checkbox-grid input[type='checkbox']"]
            },
            nutella: {
                require_from_group: [1, ".checkbox-grid input[type='checkbox']"]
            },
            kukac: {
                require_from_group: [1, ".checkbox-grid input[type='checkbox']"]
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
        groups: {
            checkboxes: "nyuszi eper nutella kukac"
        },
        messages: {
            nev: {
                required: "Kérlek add meg a neved!",
                minlength: "A neved legalább 2 karakter hosszú legyen!",
                maxlength: "A neved legfeljebb 20 karakter hosszú legyen!"
            },
            email: {
                required: "Kérlek add meg az e-mail címed!",
                email: "Kérlek adj meg egy érvényes e-mail címet!"
            },
            bunda: {
                required: "Kérlek add meg, milyen vastagra növesszék a bundájukat a kis rókák!",
                min: "A bunda legalább 2 cm vastag legyen!",
                max: "A bunda legfeljebb 20 cm vastag lehet!"
            },
            "igen-nem": {
                required: "Kérlek válaszolj erre a kérdésre!"
            },
            hossz: {
                required: "Kérlek add meg, milyen hosszúra kéne nőnie a rókacsemetéknek!",
                range: "A hossz 0 és 100 cm között legyen!"
            },
            szin: {
                required: "Kérlek add meg, milyen színű a rókák bundája szerinted!"
            }
        }
    });
});