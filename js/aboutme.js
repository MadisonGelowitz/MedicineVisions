$(window).on("load", function () {
    $.ajax({
        url: "aboutmeinsert.html", success: function (result) {
            $("#aboutme").html(result);
        }
    });
    $.ajax({
        url: "contact-me-insert.html", success: function (result)
        {
            $("#contactmeinsert").html(result);
        }
    });
});