//Variavel do botao para mudar o seu css
var botao = $('#continuar');

//Variavel para verificar se esta preenchido
var empty = true;

var equipe = $('.equipe');

//Tá dando undenifed n sei pq, arrumar para colocar menos de 16 caracteres
equipe.addEventListener("click", function(){
    console.log(equipe.textContent);

});


$(input).keyup(function () {

    empty = false;

    //Verificando o preenchimento de cada input
    $(input).each(function () {
        if ($(this).val() == '' || $(this).val() == null || $(this).val().length == 0) {
            empty = true;

        }
    });
    
    //Caso o formulario estiver vazio
    //Adicionar efeitos de desabilitado no botao
    if (empty) {

        botao.attr("disabled", true);
        botao.addClass('cursor-not-allowed');
        botao.addClass('bg-opacity-50');
        botao.removeClass('border-purple-800');
        botao.removeClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-purple-800');
        // transition duration-500 ease-out transform hover: scale-125 hover: bg-indigo-900;

        //Caso o formulario estiver preenchido
        //Adicionar efeitos de habilitado no botao
    } else {
        botao.attr("disabled", false);
        botao.removeClass('cursor-not-allowed');
        botao.removeClass('bg-opacity-50');
        botao.addClass('border-purple-800');
        botao.addClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-purple-800');
    }
});