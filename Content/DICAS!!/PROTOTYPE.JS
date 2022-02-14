// PERCORRER TODOS OS ATRIBUTOS DO OBJETO E 
// IDENTIFICAR QUAL É DE FATO DO OBJETO E QUAL É POR HERANÇA

for(let key in filho2){
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}   