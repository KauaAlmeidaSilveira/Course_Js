function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Matemática', 123)
const aula2 = new Aula('Português', 321)

console.log(aula1, aula2)

//SIMULANDO A FUNÇÃO "NEW"

//quando colocamos o '...' estamos dizendo que ira receber um conjunto de parametros que sera convertido para arrays
function novo(f, ...params){ 
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'ciencias', 678)
const aula4 = novo(Aula, 'inglês', 456)

console.log(aula3, aula4)
