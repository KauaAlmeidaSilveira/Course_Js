const notas = [7, 8, 10, 5, 1]

for(let i in notas){
    console.log(notas[i])
}

const pessoa = {nome: 'kaua', idade: 18, peso: 64}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log("nome = "+pessoa.nome + "\nidade = "+ pessoa.idade+"\npeso = "+ pessoa.peso)