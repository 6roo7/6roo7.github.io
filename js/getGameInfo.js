document.getElementById("button-blast-jumper").addEventListener('click', function() {
    ShowBlastJumper();
});
document.getElementById("button-empire").addEventListener('click', function() {
    ShowEmpire();
});
document.getElementById("button-batelli").addEventListener('click', function() {
    ShowBatelli();
});
document.getElementById("button-rpg").addEventListener('click', function() {
    ShowRPG();
});
document.getElementById("button-space").addEventListener('click', function() {
    ShowSpace();
});
document.getElementById("button-race").addEventListener('click', function() {
    ShowRace();
});
document.getElementById("button-shooter").addEventListener('click', function() {
    ShowShooter();
});
document.getElementById("button-minecraft").addEventListener('click', function() {
    ShowMinecraft();
});
document.getElementById("button-valley").addEventListener('click', function() {
    ShowValley();
});

function ShowBlastJumper() {
    synopsis = "BLAST JUMPER"
    description = "Um FPS, onde você não pode se mexer - use o knockback de seu foguete para se movimentar!";
    images = [];
    images[0] = 'images/blast/screen1.png';
    images[1] = 'images/blast/screen2.png';
    images[2] = 'images/blast/screen3.png';
    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;

}

function ShowEmpire() {
    synopsis = "EMPIRE OF THE SANDS"
    description = "Um RTS onde você controla um exército, e luta para o controle do deserto.";
    images = [];
    images[0] = 'images/empire/screen1.png';
    images[1] = 'images/empire/screen2.png';
    images[2] = 'images/empire/screen3.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;

}

function ShowBatelli() {
    synopsis = "BATELLI RACER 3001 - DELUXE EDITION"
    description = "Jogo de Corrida de magos - use magia pra matar seus concorrentes.";
    images = [];
    images[0] = 'images/batelli/screen1.png';
    images[1] = 'images/batelli/screen2.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;

}

function ShowRPG() {
    synopsis = "RPG"
    description = "RPG Soulslike Open World Survival Craft<br> Feito com Francisco e Rodrigo";
    images = [];
    images[0] = 'images/rpg/screen1.png';
    images[1] = 'images/rpg/screen2.png';
    images[2] = 'images/rpg/screen3.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;
}

function ShowSpace() {
    synopsis = "Space Shooter"
    description = "Atira nos asteroides pew pew pew pew";
    images = [];
    images[0] = 'images/space/screen1.png';
    images[1] = 'images/space/screen2.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;
}

function ShowRace() {
    synopsis = "Corrida Épica"
    description = "Corra pra linha de chegada! Tem Multiplayer local, sistema de ghost e wall jumping!";
    images = [];
    images[0] = 'images/race/screen1.png';
    images[1] = 'images/race/screen2.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;
}

function ShowShooter() {
    synopsis = "UNTITLED UNFINISHED SHOOTER"
    description = "Prototipo, tem sistema de tiro e dano.";
    images = [];
    images[0] = 'images/shooter/screen1.png';
    images[1] = 'images/shooter/screen2.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;
}

function ShowMinecraft() {
    synopsis = "UNTITLED UNFINISHED BLOCKGAME"
    description = "Jogo de blocos, com craft de items e automação básica.";
    images = [];
    images[0] = 'images/mine/screen1.png';
    images[1] = 'images/mine/screen2.png';
    images[2] = 'images/mine/screen3.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;
}

function ShowValley() {
    synopsis = "Valley of Shades"
    description = "Jogo 2D isometrico top down, ache a saída do vale usando um arsenal de armas diferentes.<br>Feito com Clayr, Francisco, Léon e Rafael";
    images = [];
    images[0] = 'images/valli/screen1.png';
    images[1] = 'images/valli/screen1.png';

    gallery = "";
    var i;
    for (i = 0; i < images.length; i++) {
        gallery += '<img class="gallery-image-screenshots" src="' + images[i] + '">';
    }

    document.getElementById("selected-game-synopsis").innerHTML = synopsis;
    document.getElementById("selected-game-specs").innerHTML = description;
    document.getElementById("selected-game-screenshots").innerHTML = gallery;
}