const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))

//----------------

console.log(Object.values(pessoa))

//----------------

console.log(Object.entries(pessoa))

//----------------

Object.entries(pessoa).forEach(e => console.log(`${e[0]}: ${e[1]}`))

//----------------

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // é listado como uma key no objeto
    writable: false, // o atributo fica constante
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//----------------

// Object.assign

const pessoa2 = {nome: 'Kauã'}
const endereco = {rua: 'rua josue carmino bruno', nmr: 29}
const conta = {email: 'askdfgba@gmail.com', senha: 234}
Object.assign(pessoa2, endereco, conta)

console.log(pessoa2)