//Variavel do botao para mudar o seu css
var botao = $('#continuar');

var equipe = $(".equipe");
var limite = $('#limite');

var maxLength = 16;

//Definindo Limite de Caracteres
equipe.keyup(function() {
    equipeTexto = equipe.val();
    var tamanhoDoTexto = maxLength - equipeTexto.length;
    limite.text(tamanhoDoTexto);
});

//Verificando o preenchimento de cada input
$(input).keyup(function () {
    var empty = false;
    $(input).each(function () {
        if ($(this).val() == '' || $(this).val() == null || $(this).val().length == 0) {
            empty = true;
        }
    });

    //Desabilitar botão caso formulario não estiver preenchido
    if (empty) {
        botao.attr("disabled", true);
        botao.addClass('cursor-not-allowed');
        botao.addClass('bg-opacity-50');
        botao.removeClass('border-purple-600');
        botao.removeClass('bg-opacity-80');
        botao.removeClass('highlight');
        botao.removeClass('transition duration-500 ease-out transform hover:scale-105 hover:border-purple-800');


    //Habilitar botao caso formulario estiver preenchido
    } else {
        botao.attr("disabled", false);
        botao.removeClass('cursor-not-allowed');
        botao.removeClass('bg-opacity-50');
        botao.addClass('border-purple-600');
        botao.addClass('bg-opacity-80');
        botao.addClass('highlight');
        botao.addClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-purple-600 hover:border-purple-800');
    }
});