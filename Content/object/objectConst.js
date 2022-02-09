// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'joao'
}
pessoa.nome = 'kaua'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'leandro'}

Object.freeze(pessoa) //FREEZE IMPEDE QUE VC ALTERE OS ATRIBUTOS

pessoa.nome = 'maria'
console.log(pessoa.nome)

const pessoa1 = Object.freeze({nome: 'joao'})
pessoa1.nome = 'kaua'

console.log(pessoa1.nome)