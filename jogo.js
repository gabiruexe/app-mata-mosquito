
function pegarValoresLarguraAltura() {
    altura = window.innerHeight; 
    largura = window.innerWidth; 
    console.log(altura, largura);
}

function posicaoRandomica() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if (vidas > 2) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById(`coracao${vidas}`).src = './img/coracao_vazio.png'
        }
        vidas++
    }

    posicaoX = Math.floor(Math.random() * largura) - 90;
    posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    let mosquito = document.createElement('img');

    mosquito.src = 'img/mosca.png';
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.className = variacaoDeTamanho() + ' ' + virarImagemDoMosquito();
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);
    
    mosquito.id = 'mosquito'
}

function variacaoDeTamanho() {
    var classe = Math.floor(Math.random() * 3);
    
    switch (classe) {
        case 0:
            return 'mosquito';
        
        case 1:
            return 'mosquito2';
            
        default:
            return 'mosquito3';
    }
}

function virarImagemDoMosquito() {
    let classe_lado = Math.floor(Math.random() * 2)
    switch (classe_lado) {
        case 0:
            return 'ladoA'
        default:
            return 'ladoB'
    }
}

let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;
let velocidadeMosquito = 1500

let nivel = window.location.search;

nivel = nivel.replace('?', '');
if (nivel === 'normal') {
    velocidadeMosquito = 1500
} else if (nivel === 'difícil') {
    velocidadeMosquito = 1000
} else {
    velocidadeMosquito = 750
}

pegarValoresLarguraAltura();

let criaMosquito = setInterval(() => {
    posicaoRandomica();
}, velocidadeMosquito);


let cronometro = setInterval(() => {
    document.getElementById('cronometro').innerHTML = tempo;
    tempo -= 1;

    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    }

}, 1000);



