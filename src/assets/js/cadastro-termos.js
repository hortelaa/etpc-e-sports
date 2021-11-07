
    var botao = $('#continuar');

    botao.click(function() {
        window.location.replace("cadastro-confirmacao.html");
     });    
 
    
    let scroll = document.getElementById('overflow');

   
        scroll.onscroll = function(){
            if (scroll.offsetHeight + scroll.scrollTop >= scroll.scrollHeight) {  
                botao.attr("disabled", false);
                botao.removeClass('cursor-not-allowed');
                botao.removeClass('bg-opacity-50');
                botao.addClass('border-purple-600');
                botao.addClass('bg-opacity-80');
                botao.addClass('highlight');
                botao.addClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-purple-600 hover:border-purple-800');
            }
        
        }


