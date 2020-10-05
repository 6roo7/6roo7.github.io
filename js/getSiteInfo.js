document.getElementById("button-sitioepico1").addEventListener('click', function() {
    ShowSitio1();
});
document.getElementById("button-sitioepico2").addEventListener('click', function() {
    ShowSitio2();
});
document.getElementById("button-gusgames").addEventListener('click', function() {
    ShowSitio3();
});

function ShowSitio1() {
    synopsis = "SITio EPICO 1";
    description = "A primeira entrada na saga dos Sitios Epicos";


    document.getElementById("selected-site-synopsis").innerHTML = synopsis;
    document.getElementById("selected-site-specs").innerHTML = description;

}

function ShowSitio2() {
    synopsis = "SITIO EPICO 2";
    description = "A sequel da saga, consegue ser melhor que o original";


    document.getElementById("selected-site-synopsis").innerHTML = synopsis;
    document.getElementById("selected-site-specs").innerHTML = description;

}

function ShowSitio3() {
    synopsis = "WWW.GUSGAMES.COM.BR";
    description = "O melhor site já feito na história";


    document.getElementById("selected-site-synopsis").innerHTML = synopsis;
    document.getElementById("selected-site-specs").innerHTML = description;

}

function ShowRPG() {
    synopsis = "RPG MAROTASSO<br> <b>THE BEST GAME EVER MADE</b>";
    description = "WARNING: needs to be epic to play";


    document.getElementById("selected-site-synopsis").innerHTML = synopsis;
    document.getElementById("selected-site-specs").innerHTML = description;
}