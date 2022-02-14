const pai = {nome: 'Leandro', corCabelo: 'Preto'}

const filho1 = Object.create(pai)
filho1.nome = 'Kaua'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: {value: 'joao', writable: false, enumerable: true} //SE WRITABLE FOR FALSO O VALOR NÃO PODE SER ALTERADO
})

console.log(filho2.nome)
filho2.nome = 'eric'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for(let key in filho2){
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}