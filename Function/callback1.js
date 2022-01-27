const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir (nome, indice) {
    console.log(`Indice= ${indice + 1} e Nome= ${nome}`)
}


fabricantes.forEach(imprimir)

// for(let i=0; i<fabricantes.length; i++){
//     imprimir(fabricantes[i],i)
// }
    
