console.log(typeof Array)

Array.prototype.first = function(){ //MOSTRANDO QUE É POSSIVEL CRIAR NOVAS FUNÇÕES DENTRO DE OUTRAS ATRAVEZ DO PROTOTYPE
    return this[0]
}

let nmr = [1, 2, 3, 4, 5, 6]

console.log(nmr.first())