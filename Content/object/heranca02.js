// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //EVITAR ESSE TIPO DE MANIPULAÇÃO !!
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}

// formas de relacionar os prototypes dos objetos

// 1º __proto__ como atributo direto do objeto

// 2º Object.setPrototypeOf(filho, pai)

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(x){
        if(this.velAtual + x <= this.velMax){
            this.velAtual += x
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

// RELACIONANDO OS PROTOTYPES
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(150)
console.log(volvo.status())
