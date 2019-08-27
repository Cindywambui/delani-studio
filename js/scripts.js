$(document).ready(function () {
    $(".clickeable1").click(function () {
        $("#design").toggle();
        $("#designcontent").toggle();
    });
    $(".clickeable2").click(function () {
        $("#development").toggle();
        $("#developmentcontent").toggle();
    });
    $(".clickeable3").click(function () {
        $("#productmanagement").toggle();
        $("#productmanagementcontent").toggle();
    });
    $("#portfolio1").mouseenter(function () {
        $("#portfolio1hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio1hide").fadeOut();
    });
    $("#portfolio2").mouseenter(function () {
        $("#portfolio2hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio2hide").fadeOut();
    });
    $("#portfolio3").mouseenter(function () {
        $("#portfolio3hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio3hide").fadeOut();
    });
    $("#portfolio4").mouseenter(function () {
        $("#portfolio4hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio4hide").fadeOut();
    });
    $("#portfolio5").mouseenter(function () {
        $("#portfolio5hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio5hide").fadeOut();
    });
    $("#portfolio6").mouseenter(function () {
        $("#portfolio6hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio6hide").fadeOut();
    });
    $("#portfolio7").mouseenter(function () {
        $("#portfolio7hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio7hide").fadeOut();
    });
    $("#portfolio8").mouseenter(function () {
        $("#portfolio8hide").fadeIn();
    }).mouseleave(function () {
        $("#portfolio8hide").fadeOut();
    });
    $("button#btn").click(function (event) {
        event.preventDefault();
        var name = $(".name").val();
        var email = $(".email").val();
        var message = $("textarea#message").val();

        if (name == "") {
            alert("please fill in your name")
            return false;
        } else if (email == "") {
            alert("please fill in your email")
            return false;
        } else if (message == "") {
            alert("please type in your message")
            return false;
        } else {
            alert(name + " ,we have received your message.Thankyou for reaching out to us")
        }

    });
});