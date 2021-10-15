
    var botao = $('#continuar');

 
    
    let scroll = document.getElementById('overflow');

   
        scroll.onscroll = function(){
            if (scroll.offsetHeight + scroll.scrollTop >= scroll.scrollHeight) {  
                botao.attr("disabled", false);
                botao.removeClass('cursor-not-allowed');
                botao.removeClass('bg-opacity-50');
                botao.addClass('border-purple-800');
                botao.addClass('transition duration-500 ease-out transform hover:scale-105 hover:bg-purple-800');
            }
        
        }
    