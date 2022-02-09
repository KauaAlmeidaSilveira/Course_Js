const A = 1
const B = 2
const C = 3

const obj1 = {A, B, C}

console.log(obj1)

const nomeAtri = 'nota'
const valorAtri = 8

const obj3 = {}

obj3[nomeAtri] = valorAtri

console.log(obj3)

const obj4 = {[nomeAtri]: valorAtri}

console.log(obj4)

const obj5 = {
    funcao1: function(){ //ANTIGO 
        // ...
    },
    funcao2(){ // NOVO
        // ...
    }
}
