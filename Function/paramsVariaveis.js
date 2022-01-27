function soma(){
    let soma = 0

    // Arguments é um array e como ja diz o nome esta relacionado aos argumentos da função, ou seja, é um array com
    // todos os respectivos argumentos.

    for(i in arguments){
        soma += arguments[i] 
    }
    return soma
}

console.log(soma('kaua', ' almeida'))