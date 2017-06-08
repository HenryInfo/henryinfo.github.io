
//Materialize
$(document).ready(function(){
    $('.button-collapse').sideNav()
    $('.modal').modal();
    ;
    $('.parallax').parallax();
    $(".redes").click(function () {
        $('.tap-target').tapTarget('open');
    })
    $("#enviarRetro").click(function () {
        Materialize.toast("Tu mensaje: "+$("#icon_retro").val()+" a sido enviado. Muchas  Gracias!!!", 3000, 'rounded')
    })

    $('.slider').slider();
    $('.materialboxed').materialbox();
    $(".ui-button .ui-click").click(function(){
        $(".ui-button").toggleClass("on");
        var main=$(".share");
        if(main.attr('s')=='1'){
            main.css("opacity", "1").attr('s', '2')
        }else{
            main.css("opacity", "0.7").attr('s', '1')

        }
    });
});
