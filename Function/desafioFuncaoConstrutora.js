function pessoa(){
    this.falar = (nome) => console.log(`Meu nome é ${nome}`)
}

const p1 = new pessoa()

p1.falar('Joao')
