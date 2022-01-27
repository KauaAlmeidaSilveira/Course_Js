const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

// -------------------------------------------------

const falar = pessoa.falar
falar()

// -------------------------------------------------

const falarDePessoa = pessoa.falar.bind(pessoa) //BIND é responsavel por amarrar o 'this' em um determinado objeto
falarDePessoa()