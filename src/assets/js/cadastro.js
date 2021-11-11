//Variavel do botao para mudar o seu css
var botao = $('#continuar');
var equipe = $(".equipe");
var limite = $('#limite');
var maxLength = 16;

$('#preencher').click(function() {
    $(input).each(function () {
        $(input).val('aaaaaaa@gaaa');
    });
}); 

$(document).ready(function(){
    $('#jogador1').removeClass('hidden');
    $('#jogador2').addClass('hidden');
    $('#jogador3').addClass('hidden');
    $('#jogador4').addClass('hidden');
    $('#jogador5').addClass('hidden');
    $('#reserva').addClass('hidden');

});

$('#choice').change(function(){
    var selected_item = $(this).val()

    if(selected_item == "1"){
        $('#jogador1').removeClass('hidden');
        $('#jogador2').addClass('hidden');
        $('#jogador3').addClass('hidden');
        $('#jogador4').addClass('hidden');
        $('#jogador5').addClass('hidden');
        $('#reserva').addClass('hidden');

    }
    if(selected_item == "2"){
        $('#jogador1').addClass('hidden');
        $('#jogador2').removeClass('hidden');
        $('#jogador3').addClass('hidden');
        $('#jogador4').addClass('hidden');
        $('#jogador5').addClass('hidden');
        $('#reserva').addClass('hidden');

    }
    if(selected_item == "3"){
        $('#jogador1').addClass('hidden');
        $('#jogador2').addClass('hidden');
        $('#jogador3').removeClass('hidden');
        $('#jogador4').addClass('hidden');
        $('#jogador5').addClass('hidden');
        $('#reserva').addClass('hidden');

    }
    if(selected_item == "4"){
        $('#jogador1').addClass('hidden');
        $('#jogador2').addClass('hidden');
        $('#jogador3').addClass('hidden');
        $('#jogador4').removeClass('hidden');
        $('#jogador5').addClass('hidden');
        $('#reserva').addClass('hidden');

    }
    if(selected_item == "5"){
        $('#jogador1').addClass('hidden');
        $('#jogador2').addClass('hidden');
        $('#jogador3').addClass('hidden');
        $('#jogador4').addClass('hidden');
        $('#jogador5').removeClass('hidden');
        $('#reserva').addClass('hidden');
    }
    if(selected_item == "6"){
        $('#jogador1').addClass('hidden');
        $('#jogador2').addClass('hidden');
        $('#jogador3').addClass('hidden');
        $('#jogador4').addClass('hidden');
        $('#jogador5').addClass('hidden');
        $('#reserva').removeClass('hidden');
    }
});

//Máscara Telefone
$('.telefone').mask('(00)00000-0000', {'translation': {0: {pattern: /[0-9]/}}});

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
        botao.addClass('bg-opacity-40');
        botao.addClass('borda-clara');
        botao.removeClass('borda-escura');
        botao.removeClass('bg-opacity-80');
        botao.removeClass('highlight');
        botao.removeClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-border-azulight');


    //Habilitar botao caso formulario estiver preenchido
    } else {
        botao.attr("disabled", false);
        botao.removeClass('cursor-not-allowed');
        botao.removeClass('bg-opacity-40');
        botao.removeClass('borda-clara');
        botao.addClass('borda-escura');
        botao.addClass('bg-opacity-80');
        botao.addClass('highlight');
        botao.addClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-border-azulight');

    }
});