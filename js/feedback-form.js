
$("#ajaxform").submit(function (e) {
    e.preventDefault();
    var form = $(this);
    var errorsCount = 0;
    form.find("input, textarea").each(function () {
        if ($(this).val() === "") {
            $(this).addClass("banned");
            errorsCount++;
        }
    });
    form.find("input, textarea").on("change", function () {
        if ($(this).val() != "") {
            $(this).removeClass("banned");
            errorsCount--;
        }
    });
    if (errorsCount === 0) {
        var data = form.serialize();
        $.ajax({
            type: "POST",
            url: "https://formspree.io/oleh.petryk@gmail.com",
            dataType: "json",
            data: data,
            success: function () {
                var dialog = $("#dialogForm");
                dialog.html("<h1>Form was delivered!</h1>");
                dialog.show();
                setTimeout(function () {
                    dialog.css("display", "none");
                }, 2000);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                var dialog = $("#dialogForm");
                dialog.html(`<h3>An error occured!</h3><br><p>${xhr.status}</p>`);
                dialog.show();
                setTimeout(function () {
                    dialog.css("display", "none");
                }, 2000);
            }
        });
    }
    return false;
});
