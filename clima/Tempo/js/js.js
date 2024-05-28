const prev = document.getElementById('imagemP')
const sol = document.getElementById('ensolarado')
const nublado = document.getElementById('nublado')
const chuva = document.getElementById('chuvoso')
const texto = document.getElementById('legenda')

nublado.addEventListener('click', verificarN)

function verificarN(){
    prev.src = "images/nublado.png"
    texto.textContent = "Salvador esta Nublado"
}

sol.addEventListener('click', verificarS)

function verificarS(){
    prev.src = "images/ensolarado.png"
    texto.textContent = "Natal esta ensolarada"
}

chuva.addEventListener('click', verificarC)

function verificarC(){
    prev.src = "images/chuva.png"
    texto.textContent = "São Paulo esta chuvoso"
}