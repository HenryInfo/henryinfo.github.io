

function iniciarFunciones() {
    var proClick=document.getElementsByClassName("clickprovincia");
    for (var i=0; i < proClick.length; i++) {
        (function(i) {
            proClick[i].onclick = function() {
                window.open("provincia.html?"+this.getAttribute("pro"),'_blank');
            };
        })(i);
    }

}

window.onload=iniciarFunciones;