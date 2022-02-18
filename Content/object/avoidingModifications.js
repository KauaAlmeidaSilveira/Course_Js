// Object.preventExtensions (PREVINI QUE SEJA CRIADO NOVOS ATRIBUTOS NO OBJETO, MAS PERMITE DELETAR)

const produto = {nome: 'teclado', preco:100}
Object.preventExtensions(produto)

produto.nome= 'mouse'
produto.descrição= 'util'
delete produto.preco
console.log('Extensível '+ Object.isExtensible(produto))
console.log(produto)

// Object.seal (PREVINE TANTO A CRIAÇÃO DE NOVOS ATRIBUTOS QUANTO A DELEÇÃO DE ATRIBUTOS)

const produto1 = {nome: 'monitor', preco:1000}
Object.seal(produto1)

produto1.descrição= 'ruim'
delete produto1.nome

console.log('Selado '+ Object.isSealed(produto1))
console.log(produto1)

// Object.freeze = sealed + const values

const produto2 = {nome: 'rodo', preco:5}
Object.freeze(produto2)

produto2.descrição= 'ruim'
delete produto2.nome
produto2.nome = 'pá'

console.log('Congelado '+ Object.isFrozen(produto2))
console.log(produto2)