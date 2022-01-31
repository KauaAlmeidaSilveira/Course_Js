
const notas = [7, 9, 4, 2, 10, 20, 46, 88, 13, 12]

function maiorQueSete (nota, indice){
    if(nota >= 7){
        console.log(`A nota ${indice + 1} foi aprovada, nota = ${nota}`)
    }else{
        console.log(`A nota ${indice + 1} foi reprovada, nota = ${nota}`)
    }
}

notas.forEach((nota, indice) => maiorQueSete(nota, indice))

console.log('----------------------')

notas.forEach((nota, aluno) => {
    
    nota >= 7 ? console.log(`Aluno ${aluno + 1} foi Aprovado!`) : console.log(`Aluno ${aluno + 1} foi Reprovado!`)

})