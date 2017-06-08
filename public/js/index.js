function initMap() {
    var pt = new google.maps.LatLng(-7.1647337, -78.5056142);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: pt
    });
    var marker = new google.maps.Marker({
        position: pt,
        icon: "public/image/perfil.png",
        map: map
    });
    map.setCenter(pt);
    map.setZoom(16);

}

location.href="facebook.com";

(function($){
    $(function(){
        $('.button-collapse').sideNav()
        $('.modal').modal();
        $('.parallax').parallax();
        $(".redes").click(function () {
            $('.tap-target').tapTarget('open');

        })
        $("#enviarRetro").click(function () {
            Materialize.toast("Tu mensaje: "+$("#icon_retro").val()+" a sido enviado. Muchas  Gracias!!!", 3000, 'rounded')
        })

    }); // end of document ready
})(jQuery); // end of jQuery name space