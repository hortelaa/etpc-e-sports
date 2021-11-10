
    var botao = $('#continuar');

    botao.click(function() {
        window.location.replace("cadastro-confirmacao.html");
     });    
 
    
    let scroll = document.getElementById('overflow');

   
        scroll.onscroll = function(){
            if (scroll.offsetHeight + scroll.scrollTop >= scroll.scrollHeight) {  
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


