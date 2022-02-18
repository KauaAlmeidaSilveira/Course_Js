const nmr = [1,2,3,4,5,6,7,8,9,10]

nmr.pop() // REMOVE O ULTIMO ELEMENTO
console.log(nmr)

nmr.push(10) //ADICIONA UM ELEMENTO
console.log(nmr)

nmr.shift() // REMOVE O PRIMEIRO ELEMENTO
console.log(nmr)

nmr.unshift(0) // ADICIONA UM ELEMENTO NA PRIMEIRA POSIÇÃO
console.log(nmr)

// .SPLICE PODE ADICIONA E REMOVER ELEMENTOS

// ANTES DA PRIMEIRA VIRGULA É O INDICE QUE A FUNÇÃO VAI SER EXECUTADA
nmr.splice(1, 0, 1)
console.log(nmr)

// DEPOIS DA PRIMEIRA VIRGULA É QUANTOS ELE VAI EXCLUIR
nmr.splice(0, 1)
console.log(nmr)

// E A CADA VIRGULA SEGUINTE REPRESENTA QUANTOS ELEMENTOS IRAO SER ADICIONADOS
nmr.splice(nmr.length, 0, 11,12,13,14,15)
console.log(nmr)

const prtNmr1 = nmr.slice(2) //PEGA TODOS OS ELEMENTOS DO 2 ATE O FINAL E SALVA EM UM NOVO ARRAY
console.log(prtNmr1)

const prtNmr2 = nmr.slice(0, 6) //PEGA TODOS OS ELEMENTOS DO 0 ATE O 6 E SALVA EM UM NOVO ARRAY
console.log(prtNmr2)



