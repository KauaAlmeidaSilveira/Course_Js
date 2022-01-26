
console.log("Bom dia");

console.log("Boa Tarde");

console.log("Boa Noite");

console.log(1 + 3);

console.log(45 * 9 / 12);

console.log("-------------------------------------------------")

// <--- PARA COMENTARIO

/*
PARA COMENTARIO COM MAIS DE UMA LINHA
*/


// UM BLOCO DE CÓDIGO É COMPOSTO POR 2 CHAVES E SUAS SENTENÇAS

//BLOCO 01
{
    console.log(1, 3, 5, 7, 9)
}

//BLOCO 02
{
    console.log(2, 4, 6, 8, 10)
}

console.log("-------------------------------------------------")

//PARA DECLARAR VARIAVEL UTILIZAMOS "let"

let qntCaneta = 9999 

console.log(qntCaneta)

console.log("-------------------------------------------------")

//PARA CONCATENAR UTILIZAMOS O +

let nome1 = "kaua"
let nome2 = "leandro"

console.log(nome1 + " " + nome2)

console.log("-------------------------------------------------")

let idade = 18
let salario = 2782.60

//TYPEOF INDICA QUAL O TIPO DA VARIAVEL
console.log(typeof idade)
console.log(typeof salario)

console.log("-------------------------------------------------")

let estaSol = false

console.log(typeof estaSol)

console.log(typeof "estaSol")

console.log("-------------------------------------------------")

//PARA DECLARAR UMA VARIAVEL QUE NÃO POSSA ALTERAR O VALOR UTILIZAMOS A PALAVRA CONST DE VAR CONSTANTE

const rg = 4752649587623
console.log(rg)

let pi=  Math.PI
let r = 10
let vlrTotal = pi * Math.pow(r, 2)


console.log("O valor final é: " + vlrTotal +"m²")

console.log("-------------------------------------------------")

let a = 7

let b = 94

let aux = a
a = b
b = aux

console.log(a)
console.log(b)
