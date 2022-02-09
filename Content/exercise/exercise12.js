// 12) Faça um algoritmo que calcule o fatorial de um número.

let fatorial = ((vlr=5) => {
    let result = vlr
    let primeiroMult = result - 1

    for(let i = primeiroMult; i>1; i--){
        result *= i;
    }

    console.log(result)
})()