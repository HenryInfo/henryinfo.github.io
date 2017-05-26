/**
 * Created by hbs on 24/05/17.
 */

//Materialize
$(document).ready(function(){
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
