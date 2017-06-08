

function iniciarFunciones() {
    var url= location.href;// Guardamos la  url actual
    var arr_url=url.split("?");// cortamos la url
    var proClick=document.getElementsByClassName("clickprovincia");
    for (var i=0; i < proClick.length; i++) {
        (function(i) {
            proClick[i].onclick = function() {
                window.open("provincia.html?"+this.getAttribute("pro"),'_blank');
            };
        })(i);
    }
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
            img3.src="http://img.fotocommunity.com/puente-colgante-san-marcos-cajamarca-79a49cfa-4f27-407e-a453-9b499e82f8b8.jpg?height=1080";
            img4.src="http://www.munisanmarcos.gob.pe/images/GT/SM/33.jpg";

            imCard1.src="http://2.bp.blogspot.com/_vkd8GXQdrU0/TOMwtQurKUI/AAAAAAAADQk/PZbAUeEX2IQ/s1600/iglesia.JPG"
            desCard1.innerHTML="Iglesia central"
            imCard2.src="https://mw2.google.com/mw-panoramio/photos/medium/3006232.jpg"
            desCard2.innerHTML="Paucamarca"
            imCard3.src="https://i.ytimg.com/vi/GRaVuiCgFUE/maxresdefault.jpg"
            desCard3.innerHTML="Danza de los diablos"
            imgFoot1.src="http://www.costumbresperu.pe/wp-content/uploads/2015/04/150506-sanmarcos-00.jpg"
            imgFoot2.src="https://mw2.google.com/mw-panoramio/photos/medium/9613444.jpg"
            imgFoot3.src="http://3.bp.blogspot.com/-OOwUR0xpC2U/UCBy7TkY-xI/AAAAAAAABGk/goKrOKdnz-c/s1600/IMG_4130.JPG"
            imgFoot4.src="http://www.tourskit.com/cajamarca/foto_rios_maranon_chamaya.jpg"
            imgFoot1.setAttribute("data-caption","San Isidro")
            imgFoot2.setAttribute("data-caption","Puente colgante")
            imgFoot3.setAttribute("data-caption","Ganadería")
            imgFoot4.setAttribute("data-caption","Encuentro de rios")
            break;
        case "cajabamba":
            title1.innerHTML="Plaza central";
            title2.innerHTML="Agricultura";
            title3.innerHTML="Danza";
            title4.innerHTML="Vista Laguna";

            titled1.innerHTML="Vista de la plaza central";
            titled2.innerHTML="Agricultura, agri";
            titled3.innerHTML="Costumbres";
            titled4.innerHTML="hermosa laguna natural";

            img1.src="https://i.ytimg.com/vi/KnOsSi-9yZY/maxresdefault.jpg";
            img2.src="http://e.rpp-noticias.io/normal/2016/02/02/112011_73366.jpg";
            img3.src="http://www.iperu.org/wp-content/uploads/2015/12/danza-diablos-de-cajabamba.jpg";
            img4.src="http://www.radiocajabamba.pe/imgs/baner.png";

            imCard1.src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/03/28/58db3b7dcd776.jpeg"
            desCard1.innerHTML="Naturaleza"
            imCard2.src="http://www.cajamarca-sucesos.com/cajabamba/cajabamba_01.jpg"
            desCard2.innerHTML="Vista general"
            imCard3.src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/03/28/58db3b7de8bf2.jpeg"
            desCard3.innerHTML="Laguna "
            imgFoot1.src="http://e.rpp-noticias.io/normal/2016/05/20/305030_146735.jpg"
            imgFoot2.src="http://www.regioncajamarca.gob.pe/sites/default/files/noticias/imagenes/02_14.jpg"
            imgFoot3.src="http://www.cajabambaperu.com/wp-content/uploads/2016/12/SAN-ISIDRO-pampa-grande-cajabamba-peru.jpg"
            imgFoot4.src="http://www.cajabambaperu.com/wp-content/uploads/2016/12/SAN-ISIDRO-pampa-grande-cajabamba-peru.jpg"
            imgFoot1.setAttribute("data-caption","")
            imgFoot2.setAttribute("data-caption","")
            imgFoot3.setAttribute("data-caption","")
            imgFoot4.setAttribute("data-caption","")
            break;
        case "chota":
            title1.innerHTML="Chota";
            title2.innerHTML="";
            title3.innerHTML="";
            title4.innerHTML="";

            titled1.innerHTML="";
            titled2.innerHTML="";
            titled3.innerHTML="";
            titled4.innerHTML="";

            img1.src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Catedral_de_Chota.jpg";
            img2.src="";
            img3.src="";
            img4.src="";

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
        case "contumaza":
            title1.innerHTML="Contumazá";
            title2.innerHTML="";
            title3.innerHTML="";
            title4.innerHTML="";

            titled1.innerHTML="";
            titled2.innerHTML="";
            titled3.innerHTML="";
            titled4.innerHTML="";

            img1.src="https://lh6.googleusercontent.com/-_wcBELS9Hw4/TXJRl8pwOXI/AAAAAAAAABY/VqLj-U57Kwc/s1600/2.JPG";
            img2.src="";
            img3.src="";
            img4.src="";

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
        case "sanpablo":
            title1.innerHTML="San Paglo";
            title2.innerHTML="";
            title3.innerHTML="";
            title4.innerHTML="";

            titled1.innerHTML="";
            titled2.innerHTML="";
            titled3.innerHTML="";
            titled4.innerHTML="";

            img1.src="http://www.regioncajamarca.gob.pe/sites/default/files/noticias/imagenes/san%20pablo_14.jpg";
            img2.src="";
            img3.src="";
            img4.src="";

            imCard1.src="http://www.regioncajamarca.gob.pe/sites/default/files/noticias/imagenes/san%20pablo_14.jpg"
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
        case "sanmiguel":
            title1.innerHTML="San Miguel";
            title2.innerHTML="";
            title3.innerHTML="";
            title4.innerHTML="";

            titled1.innerHTML="";
            titled2.innerHTML="";
            titled3.innerHTML="";
            titled4.innerHTML="";

            img1.src="";
            img2.src="http://www.regioncajamarca.gob.pe/sites/default/files/noticias/imagenes/11845194_597383183736279_7912525567684587825_o.jpg";
            img3.src="";
            img4.src="";

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
        case "santacruz":
            title1.innerHTML="Santa Cruz";
            title2.innerHTML="";
            title3.innerHTML="";
            title4.innerHTML="";

            titled1.innerHTML="";
            titled2.innerHTML="";
            titled3.innerHTML="";
            titled4.innerHTML="";

            img1.src="http://chota.regioncajamarca.gob.pe/sites/default/files/u1/santa%20cruz.jpg";
            img2.src="";
            img3.src="";
            img4.src="";

            imCard1.src="http://chota.regioncajamarca.gob.pe/sites/default/files/u1/santa%20cruz.jpg"
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
        case "sanignacio":
            title1.innerHTML="San Ignacio";
            title2.innerHTML="";
            title3.innerHTML="";
            title4.innerHTML="";

            titled1.innerHTML="";
            titled2.innerHTML="";
            titled3.innerHTML="";
            titled4.innerHTML="";

            img1.src="http://www.regioncajamarca.gob.pe/sites/default/files/noticias/imagenes/provincia-de-san-ignacio-cajamarca-peru.jpg";
            img2.src="";
            img3.src="";
            img4.src="";

            imCard1.src="http://www.regioncajamarca.gob.pe/sites/default/files/noticias/imagenes/provincia-de-san-ignacio-cajamarca-peru.jpg"
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
        case "hualgayoc":
            title1.innerHTML="Hualgayoc";
            title2.innerHTML="";
            title3.innerHTML="";
            title4.innerHTML="";

            titled1.innerHTML="";
            titled2.innerHTML="";
            titled3.innerHTML="";
            titled4.innerHTML="";

            img1.src="http://photos1.blogger.com/blogger/57/3161/1600/H1.jpg";
            img2.src="";
            img3.src="";
            img4.src="";

            imCard1.src="http://photos1.blogger.com/blogger/57/3161/1600/H1.jpg"
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
