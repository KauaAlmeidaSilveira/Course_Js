function hand ([min = 1000, max = 0]){
    if(min > max) {
        min = max
        max = min 
        var valor = min
        return console.log(valor)
    }
}

hand([20, 10])
 