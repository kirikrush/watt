$(".answ").click(function(e){
    if ($(e.currentTarget).hasClass("active")){
        $(".answ.active + p").slideUp(300);
        $(".answ.active").removeClass("active");
    }
    else{
    $(".answ.active + p").slideUp(300);
    $(".answ.active").removeClass("active");
    $(e.currentTarget).addClass("active");
    $(".answ.active + p").slideDown(300);
    }

})