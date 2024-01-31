const botaoplaypause = document.getElementById('play-pause');
const botaoavancar = document.getElementById('proximo');
const audiocapitulo = document.getElementById('audio-capitulo');
const botaovoltar = document.getElementById('anterior')
const nomecapitulo = document.getElementById('informacoes-faixa')

const numerocapitulos = 10;
let tatocando = false;
let capituloatual = 1;

function tocarfaixa() {
    audiocapitulo.play();
    botaoplaypause.classList.remove('bi-play-circle-fill');
    botaoplaypause.classList.add('bi-pause-circle-fill');
    tatocando = true;
}

function pausarfaixa() {
    audiocapitulo.pause();
    botaoplaypause.classList.remove('bi-pause-circle-fill');
    botaoplaypause.classList.add('bi-play-circle-fill');
    tatocando = false;
}


function tocaroupausar() {
    if( tatocando){
        pausarfaixa();
    }
    else {
        tocarfaixa ();
    }
}

function proximafaixa() {
    if (capituloatual < numerocapitulos) {
        capituloatual += 1;
    } else {
        capituloatual = 1;
    }
    audiocapitulo.src = "./books/dom-casmurro/" + capituloatual + ".mp3";
    nomecapitulo.innerText = "Capítulo " + capituloatual;
    tocarfaixa();
}

function capituloanterior() {
    if (capituloatual > 1) {
        capituloatual -= 1;
    } else {
        capituloatual = numerocapitulos;
    }

    audiocapitulo.src = "./books/dom-casmurro/" + capituloatual + ".mp3";
    nomecapitulo.innerText = "Capítulo " + capituloatual;
    tocarfaixa();
}


botaoplaypause.addEventListener('click', tocaroupausar);
botaoavancar.addEventListener('click', proximafaixa);
botaovoltar.addEventListener("click", capituloanterior);
audiocapitulo.addEventListener('ended', proximafaixa);
