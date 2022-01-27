const soma = function (x,y){return x+y}

const imprimirResult = function(a, b, operacao= soma){
    console.log(operacao(a,b))
}

imprimirResult(3, 4)

imprimirResult(3, 4, soma)

imprimirResult(3, 4, (x,y) => x-y)

const pessoa = {
    falar: () => console.log("Ola")
}

function falarAki(obj){
    obj.falar()
}

falarAki(pessoa)

