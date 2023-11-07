var miCir;
var posX = 0;
var velX = 2;
var velY = 2;
var posY = 0;

window.onload = () => {
    miCir = document.getElementById("miCirculo");
    setInterval(mueveCirculo, 1);
    svg = document.querySelector("svg");
    svg.addEventListener("mousemove", mostrarCoord);
}

function mueveCirculo(){
    var cx = parseInt(miCir.getAttribute("cx"));
    var cy = parseInt(miCir.getAttribute("cy"));
    if((cx-15)>0 && (cx+15)<1000){
        actualizarPosX();
    }
    else {
        velX = -1 *velX;
        actualizarPosX();
    }
    if((cy-15)>0 && (cy+15)<600){
        actualizarPosY();
    }
    else {
        velY = -1 *velY;
        actualizarPosY();
    }

}

function actualizarPosX(){
    var posX = parseInt(miCir.getAttribute("cx"));
    miCir.setAttribute("cx", posX+velX);

}

function actualizarPosY() {
    var posY = parseInt(miCir.getAttribute("cy"));
    miCir.setAttribute("cy", posY+velY);
}

function mostrarCoord(e) {
    let x = e.clientX;
    let y = e.clientY;
    let coordenadas = "Coordenadas: (" + x + "," + y + ")";
    console.log(coordenadas);
}

function player1(e) {
    let x = e.clientX;
    let y = e.clientY;

    e.clientX = x;
    e.clientY = y;
}