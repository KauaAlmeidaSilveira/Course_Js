// usando notação literal
const obj1 = {}
console.log(obj1)

// Objects em js
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => preco * (1 - 0.10)
}


const p1 = new produto('teclado', 200, 0.15)
const p2 = new produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFunc(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFunc('Joao', 8000, 3)
const f2 = criarFunc('leandro', 20000, 4)

console.log(f1.getSalario(), f2.getSalario())

// object.create

const filho = Object.create(null)
filho.nome = 'kaua'
console.log(filho)

// Uma função famosa que retorna objeto - JSON

const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON.info)