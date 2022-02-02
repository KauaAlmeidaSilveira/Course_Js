// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.



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