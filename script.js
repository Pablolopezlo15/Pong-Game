var miCir;
var posX = 500;
var velX = 2;
var velY = 2;
var posY = 300;
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var intervalo;
window.onload = () => {
    btnstart = document.getElementById("start");
    btnstart.addEventListener("click", empezarJuego);
}

function empezarJuego() {
    miCir = document.getElementById("miCirculo");
    setInterval(mueveCirculo, 1);
    svg = document.querySelector("svg");
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");
    document.addEventListener("keydown", player2KeyDown);
    document.addEventListener("keyup", player2KeyUp);
    svg.addEventListener("mousemove", player1FollowMouse);
    document.getElementById("start").disabled = true;

}

var player2Up = false;
var player2Down = false;

function mueveCirculo() {
    var cx = posX;
    var cy = posY;
    var yplayer1 = parseInt(player1.getAttribute("y"));
    var yplayer2 = parseInt(player2.getAttribute("y"));

    if (cy < 15 || cy > 585) {
        velY = -velY;
    }

    if ((cx < 25 && cy >= yplayer1) && cy <= (yplayer1 + 80)) {
        velX = -velX;
    }

    if ((cx > 970 && cy >= yplayer2) && cy <= (yplayer2 + 80)) {
        velX = -velX;
    }

    posX += velX;
    posY += velY;

    miCir.setAttribute("cx", posX);
    miCir.setAttribute("cy", posY);

    if (cx < 0) {
        posX = 500;
        posY = 300;
        miCir.setAttribute("cx", posX);
        miCir.setAttribute("cy", posY);
        scorePlayer2++;
        document.getElementById("scorePlayer2").textContent = scorePlayer2;
    }

    if (cx > 1000) {
        posX = 500;
        posY = 300;
        miCir.setAttribute("cx", posX);
        miCir.setAttribute("cy", posY);
        scorePlayer1++;
        document.getElementById("scorePlayer1").textContent = scorePlayer1;
    }

    if (player2Up) {
        let y = yplayer2 - 5;
        if (y < 0) {
            y = 0;
        }
        player2.setAttribute("y", y);
    }

    if (player2Down) {
        let y = yplayer2 + 5;
        if (y > 520) {
            y = 520;
        }
        player2.setAttribute("y", y);
    }
}

function mostrarGanador() {
    if(scorePlayer1>=10){
        
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

function player1FollowMouse(e) {
    let y = e.clientY -100;
    if (y < 0) {
        y = 0;
    }
    if (y > 520) {
        y = 520;
    }
    player1.setAttribute("y", y);
}

function player2KeyDown(e) {
    if (e.key === "Shift") {
        player2Up = true;
    }
    if (e.key === "Control") {
        player2Down = true;
    }
}

function player2KeyUp(e) {
    if (e.key === "Shift") {
        player2Up = false;
    }
    if (e.key === "Control") {
        player2Down = false;
    }
}
