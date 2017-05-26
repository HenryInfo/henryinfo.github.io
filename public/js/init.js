(function($){
    $(function(){
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

    }); // end of document ready
})(jQuery); // end of jQuery name space