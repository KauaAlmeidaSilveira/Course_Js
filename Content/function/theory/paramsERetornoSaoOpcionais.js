function area(width, heigth){
    const area = width*heigth
    
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }
    else{
        return console.log(area) 
    } 
    
}

area(2, 5)