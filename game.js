var altura = 0
var largura = 0
var life = 3
var time = 30
var nivel = window.location.search
var createFlyTime = 1500

nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500 milisegundos
    createFlyTime = 1500
} else if (nivel === 'dificil') {
    // 1000 milisegundos
    createFlyTime = 1000
} else if (nivel === 'chucknorris') {
    // 750 milisegundos
    createFlyTime = 750
}


function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

var chronometer = setInterval(function () {
    time -= 1
    if (time < 0) {
        clearInterval(chronometer)
        clearInterval(createFly)
        window.location.href = 'victory.html'
    } else {
        document.getElementById('chronometer').innerHTML = time
    }
}, 1000)

function posicaoRandomica() {
    //remover mosca anterior (caso exista)
    if (document.getElementById('fly')) {
        document.getElementById('fly').remove()

        if (life < 1) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('L' + life).src = "img/coracao_vazio.png"
            life--
        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar elemento HTML

    var fly = document.createElement('img')
    fly.src = 'img/mosca.png'
    fly.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    fly.style.left = posicaoX + 'px'
    fly.style.top = posicaoY + 'px'
    fly.style.position = 'absolute'
    fly.id = 'fly'
    fly.onclick = function () {
        this.remove()
    }

    document.body.appendChild(fly)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'fly1'
        case 1:
            return 'fly2'
        case 2:
            return 'fly3'
    }
    console.log(classe)
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}