var botao = $('#aceitar');
condicao = false;
condicao2 = false;

botao.click(function () {
    window.location.replace("cadastro-confirmacao.html");
});

$(document).ready(function () {
    $("#dialog").addClass('hidden');
});

$("#OpenDialog").click(function () {
    $("#dialog").removeClass('hidden');
});

$("#CloseDialog").click(function () {
    $("#dialog").addClass('hidden');
});


let scroll = document.getElementById('overflow');

scroll.onscroll = function () {
    if (scroll.offsetHeight + scroll.scrollTop >= scroll.scrollHeight) {
        condicao = true;
        if (condicao == true && condicao2 == true) {
            botao.attr("disabled", false);
            botao.removeClass('cursor-not-allowed');
            botao.removeClass('bg-opacity-40');
            botao.removeClass('borda-clara');
            botao.addClass('borda-escura');
            botao.addClass('bg-opacity-80');
            botao.addClass('highlight');
            botao.addClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-border-azulight');

        }

    }
}

$('#checkbox').change(function () {
    if ($(this).is(':checked')) {
        // Do something...
        condicao2 = true;

        if (condicao == true && condicao2 == true) {
            botao.attr("disabled", false);
            botao.removeClass('cursor-not-allowed');
            botao.removeClass('bg-opacity-40');
            botao.removeClass('borda-clara');
            botao.addClass('borda-escura');
            botao.addClass('bg-opacity-80');
            botao.addClass('highlight');
            botao.addClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-border-azulight');
        }
    } else {
        condicao2 = false;
        botao.attr("disabled", true);
        botao.addClass('cursor-not-allowed');
        botao.addClass('bg-opacity-40');
        botao.addClass('borda-clara');
        botao.removeClass('borda-escura');
        botao.removeClass('bg-opacity-80');
        botao.removeClass('highlight');
        botao.removeClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-border-azulight');
    }
});



