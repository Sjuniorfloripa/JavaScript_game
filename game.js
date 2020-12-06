var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar elemento HTML

    var fly = document.createElement('img')
    fly.src = 'img/mosca.png'
    fly.className = 'fly1'
    fly.style.left = posicaoX + 'px'
    fly.style.top = posicaoY + 'px'
    fly.style.position = 'absolute'

    document.body.appendChild(fly)
}

