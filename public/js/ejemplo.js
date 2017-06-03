/**
 * Created by hbs on 1/06/17.
 */

//eventos
function onLoad() {
    //Asignar imagen
    imagen=document.getElementById("imagenCh");

    //Botones
    var btnCambiarImage=document.getElementById("cambiarimage");
    var btnCambiarSize=document.getElementById("cambiarSize");
    var btnCambiarOpaciti=document.getElementById("cambiarOpacidad");
    var btnFacebook=document.getElementById("facebook");

    //Eventos
    btnCambiarImage.onclick=changeImage;
    btnCambiarSize.onclick=changeSize;
    btnCambiarOpaciti.onclick=opacidad;
    btnFacebook.onclick=changeCandida;
}


function changeImage() {

    if(imagen.getAttribute("src")=="../public/image/turismo/image1.jpeg")
    {
        imagen.src="../public/image/turismo/image2.jpeg";
        imagen.title="Segunda imagen"

    }
    else
    {
        imagen.src="../public/image/turismo/image1.jpeg";
        imagen.title="Primera imagen"


    }
}
function changeSize() {

    imagen.style.height=document.getElementById("alto").value;
    imagen.style.width=document.getElementById("ancho").value;

}
function opacidad() {
    var opacidad=document.getElementById("opacidad").value;
    imagen.style.filter="brightness("+opacidad+")"
}
function changeCandida() {
    var linl=document.getElementById("fb-link");
    linl.innerHTML="<span class='fa fa-facebook'></span>Icono agregado";
}

var imagen;
window.onload=onLoad;