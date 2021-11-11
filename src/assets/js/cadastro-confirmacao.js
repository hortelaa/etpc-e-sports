$(document).ready(function () {
    window.setInterval(function () {
        var timeLeft = $("#timeLeft").html();
        if (eval(timeLeft) == 0) {
            window.location = 'embreve.html';
        } else {
            $("#timeLeft").html(eval(timeLeft) - eval(1));
        }
    }, 1000);
});