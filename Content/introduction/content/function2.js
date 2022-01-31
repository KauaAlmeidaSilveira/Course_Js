// 1º FORMA DE CRIAR UMA FUNÇÃO - lembrando que ela n precisa estar dentro de uma variavel
const imprimirSoma = function(a, b){
    console.log(a+b)
}

imprimirSoma(43543, 435342)

// 2º FORMA DE CRIAR UMA FUNÇÃO
const soma = (a, b) => {
    return a+b
}

console.log(soma(10, 35))

// 3º FORMA DE CRIAR UMA FUNÇÃO 

//NOTE QUE QUANDO N UTILIZAMOS O CONCHETE, INDICANDO O CORPO DA FUNÇÃO, A FUNÇÃO RETORNARA AUTOMATICAMENTE A SUA AÇÃO
const subtracao = (a, b) => a-b

console.log(subtracao(10, 4)) 