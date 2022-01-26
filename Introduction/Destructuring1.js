const pessoa = {
    nome: 'kaua',
    idade: 18,
    conta: {
        email: 'kauaa6a@gmail.com',
        senha: 123456
    }
}

let {conta: {email: pinto}} = pessoa

console.log(pinto)

console.log(pessoa.conta.email)


 
