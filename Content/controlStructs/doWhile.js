function getInteiroAleat√≥rioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getInteiroAleat√≥rioEntre(-1, 10)
    console.log(opcao)
}
while (opcao != -1)