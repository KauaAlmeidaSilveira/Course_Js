// Number.isInteger essa função verifica se determinado valor é inteiro ou não

let valor1 = 5.1
let valor2 = 5.0

console.log(Number.isInteger(valor1))
console.log(Number.isInteger(valor2))

console.log("-------------------------------------------------")

//.toFixed(x) essa função determina a quantidade de casas decimais

let PI = Math.PI

console.log(PI.toFixed(2))

console.log("-------------------------------------------------")

let escola = "liceu"

//A FUNÇÃO .CharAT(x) pega um determinado valor de acordo com a posição x
console.log(escola.charAt(3))

//A FUNÇÃO .charCodeAt(x) pega o código do valor que esta na posição indicada(x)
console.log(escola.charCodeAt(3))

//A FUNÇÃO .indexOf(x) demonstra a posição em que o determinado valor se encontra(x)
console.log(escola.indexOf('e'))

//A FUNÇÃO .substring(x) demonstra o valor do x até o final
console.log(escola.substring(1))

//A FUNÇÃO .substring(x, y) demonstra o valor do x até o y sem demonstrar o y
console.log(escola.substring(1, 3))

//A FUNÇÃO CONCAT BASICAMENTE CONCATENA
console.log('Escola '.concat(escola).concat('!'))

console.log('Escola ' + escola + '!')

//A FUNÇÃO .replace('x', 'y') substitui o valor x pelo y 
console.log(escola.replace('l', 'T'))

// A FUNÇÃO .SPLIT(x) CONVERTE DETERMINADO VALOR PARA UM ARRAY DE ACORDO COM O INDICADOR DE SEPARADOR(x)

console.log('kaua, joao, leandro'.split(','))


console.log("-------------------------------------------------")


