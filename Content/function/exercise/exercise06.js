let jurosSimples = ((capInicial = 2000, tx = 0.1, temp = 12) => {
    
    console.log('Juros Simples')

    const vlr = capInicial*tx

    for(let i=0; i<=temp; i++){
        i != 0 ? capInicial += vlr : ""
        console.log(`Mês ${i}, rendimento = ${capInicial.toFixed(2).toString().replace(".", ",")}`)
    }

    console.log('----------------------------------')

})()


let jurosComposto = ((capInicial = 2000, tx = 0.1, temp = 12) => {
    
    console.log('Juros Composto')

    for(let i=0; i<=temp; i++){
        i != 0 ? capInicial += (capInicial*tx) : ""
        console.log(`Mês ${i}, rendimento = ${capInicial.toFixed(2).toString().replace(".", ",")}`)
    }

    console.log('----------------------------------')

})()