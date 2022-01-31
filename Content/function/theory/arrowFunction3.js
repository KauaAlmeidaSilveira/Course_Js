let comparaComThis = function(param){
    return console.log(this === param)
}

// const obj = {}
// comparaComThis = comparaComThis.bind(obj) // AMARRANDO O THIS DA FUNCTION(GLOBAL) COM O THIS DO OBJ, UTILIZANDO O .BIND

comparaComThis(global)

// -------------------------------------------------

let comparaComThisArrow = (param) => console.log(this === param)

comparaComThisArrow(global)