function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log('-------------------------------------------------')

console.log(produto.getPreco())

const carro = {preco: 30000, desc: 0.2}

console.log('-------------------------------------------------')

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log('-------------------------------------------------')

// LEMBRANDO QUE TANTO NO CALL QUANTO NO APPLY O PRIMEIRO 
// ELEMENTO DO SEU PARÂMETRO É SEMPRE A EXPRESSÃO A SER EXECUTADA
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))