/**
 * Created by hbs on 24/05/17.
 */
$(function(){
    var home = $('#home');

    var acerca = $('#about')
    var precios = $('#precios')
    $(window).scroll(function(){
        if($(this).scrollTop()==0)
        {
            home.fadeIn(1000)
        }
        if($(this).scrollTop()>=(home.height())){
            home.fadeOut(3000);
        }

    });
});