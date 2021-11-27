var mobile = $("#mobile, #mobile2");
function toggle () {
    if ($('#mobile').hasClass("hidden") && $('#mobile2').hasClass("hidden")){
        $('#mobile').removeClass("hidden")
        $('#mobile2').removeClass("hidden")
    }else{
        $('#mobile').addClass("hidden")
        $('#mobile2').addClass("hidden")
    }
  }