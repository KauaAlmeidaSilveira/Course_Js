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


console.log("------------------------------------------------")

//PRIMEIRA FORMA

// function pessoa1 (){
//     this.idade = 0
//
//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     }.bind(this), 1000)
//
// }

//SEGUNDA FORMA

function pessoa1 (){
    this.idade = 0
    const self = this
    
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new pessoa1