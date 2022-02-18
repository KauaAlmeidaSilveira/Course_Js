console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //O METODO SORT SERVE PARA ORDENAR OS ELEMENTOS DO ARRAY
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
//A FUNÇÃO SPLICE PODE DELETAR E ADICIONAR AO MESMO TEMPO, NESTE CASO ANTES DA VIRGULA É QUAL ELEMENTO A FUNÇÃO COMEÇA
//E DEPOIS É QUANTOS ELE VAI EXCLUIR, SE QUISERMOS ADICIONAR TABEM TEMOS QUE COLOCAR 
//MAIS UMA VIRGULA, DESTA FORMA: aprovados.splice(1, 1, 'elemento1')
aprovados.splice(1, 1) 
console.log(aprovados)