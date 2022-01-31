function pessoa(nome){

    this.nome = nome
    
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p1 = new pessoa('Joao')

p1.falar()
