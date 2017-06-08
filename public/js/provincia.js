

function iniciarFunciones() {
    var url= location.href;// Guardamos la  url actual
    var arr_url=url.split("?");// cortamos la url

    //variales slider
    var title1=document.getElementById("title1");
    var title2=document.getElementById("title2");
    var title3=document.getElementById("title3");
    var title4=document.getElementById("title4");
    var titled1=document.getElementById("titled1");
    var titled2=document.getElementById("titled2");
    var titled3=document.getElementById("titled3");
    var titled4=document.getElementById("titled4");
    var img1=document.getElementById("imslide1");
    var img2=document.getElementById("imslide2");
    var img3=document.getElementById("imslide3");
    var img4=document.getElementById("imslide4");

    //variables para seccion imagenes para card
    var imCard1=document.getElementById("imgcar1");
    var imCard2=document.getElementById("imgcar2");
    var imCard3=document.getElementById("imgcar3");

    var desCard1=document.getElementById("desimacar1");
    var desCard2=document.getElementById("desimacar2");
    var desCard3=document.getElementById("desimacar3");

    //Variables para footer

    var imgFoot1=document.getElementById("imgFoot1");
    var imgFoot2=document.getElementById("imgFoot2");
    var imgFoot3=document.getElementById("imgFoot3");
    var imgFoot4=document.getElementById("imgFoot4");


    switch (arr_url[1]){
        case "cajamarca":
            title1.innerHTML="Cajamarca de Noche!";
            title2.innerHTML="Plazuela Belén";
            title3.innerHTML="Mirador de Cajamarca";
            title4.innerHTML="Baños de los Inca!";

            titled1.innerHTML="Relajante, sorprendente.";
            titled2.innerHTML="Llevate los mejores recuerdo.";
            titled3.innerHTML="Captura las mejores vistas de la ciudad y alrededores";
            titled4.innerHTML="Enriquecete con la Historia de Cajamarca.";

            img1.src="https://drscdn.500px.org/photo/173715613/q%3D80_m%3D1500/1ce58ea5160d2049c37c2503518ae60d";
            img2.src="https://drscdn.500px.org/photo/172428975/q%3D80_m%3D1500/ccf9390e26ea7657d2be2fb5b249078c";
            img3.src="https://drscdn.500px.org/photo/127862971/q%3D80_m%3D1500/476bf340a7ff546c0b1503a075ca80f8";
            img4.src="https://drscdn.500px.org/photo/201083653/q%3D80_m%3D1500/29c5415d5e4204a2b767dda62eb84a9f";

            imCard1.src="https://drscdn.500px.org/photo/153600907/q%3D80_m%3D1500/3bdecbe0053b6c788d5a93541285684b"
            desCard1.innerHTML="Catedral de Cajamarca"
            imCard2.src="http://www.noticiasser.pe/files/images/cajamarca.jpg"
            desCard2.innerHTML="Vista panoramica"
            imCard3.src="http://portal.cenfotur.edu.pe/images/CENFOTUR-imagenes/imagenes-contenidos/sedes/img-admision-cajamarca.jpg"
            desCard3.innerHTML="Mirador Santa Apolonia"
            imgFoot1.src="../public/image/turismo/image1.jpeg"
            imgFoot2.src="../public/image/turismo/image2.jpeg"
            imgFoot3.src="https://drscdn.500px.org/photo/86532447/q%3D80_m%3D1500/ee5d97a4d616c67b933b563decb9b453"
            imgFoot4.src="../public/image/turismo/image2.jpeg"
            imgFoot1.setAttribute("data-caption","Cumbe Mayo: Buena vista")
            imgFoot2.setAttribute("data-caption","Cielito Cajamarquino :p")
            imgFoot3.setAttribute("data-caption","Niños en atardecer cajacho")
            imgFoot4.setAttribute("data-caption","Atardecer versión 2 :v")
            break;
        case "sanmarcos":
            var img="https://igx.4sqi.net/img/general/600x600/6661065_T5TocIvjD5oVE1pnd2V4DG0hzAElvDt3YSFYClyQbZI.jpg";
            var jaen="https://userscontent2.emaze.com/images/8da144a9-7dcd-4c0c-8456-03bca9391d68/bb208b9d0109c34eb9930e21a6c8b05e.jpg";
            title1.innerHTML="Plaza de armas";
            title2.innerHTML="Danzas ";
            title3.innerHTML="Puente colgante";
            title4.innerHTML="Vista Panoramica";

            titled1.innerHTML="Tranquilo y cálido.";
            titled2.innerHTML="Mucho que ver ";
            titled3.innerHTML="A solo 5min";
            titled4.innerHTML="Mirador de san Marcos a 45min";

            img1.src="http://static0.tiendeo.pe/galeria/poblacion/san-marcos-pedro-galvez/san%20marcos.jpg";
            img2.src="http://www.educacioncajamarca.gob.pe/sites/default/files/San%20Marcos%2003_0.JPG";
            img3.src="http://www.fotocommunity.de/photo/puente-colgante-san-marcos-cajama-german-marceliano/16404627";
            img4.src="http://www.munisanmarcos.gob.pe/images/GT/SM/33.jpg";

            imCard1.src=""
            desCard1.innerHTML=""
            imCard2.src=""
            desCard2.innerHTML=""
            imCard3.src=""
            desCard3.innerHTML=""
            imgFoot1.src=""
            imgFoot2.src=""
            imgFoot3.src=""
            imgFoot4.src=""
            imgFoot1.setAttribute("data-caption","")
            imgFoot2.setAttribute("data-caption","")
            imgFoot3.setAttribute("data-caption","")
            imgFoot4.setAttribute("data-caption","")


            break;
    }

}
window.onload=iniciarFunciones;
