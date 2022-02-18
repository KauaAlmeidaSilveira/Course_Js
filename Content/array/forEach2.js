//SIMULANDO O forEach

Array.prototype.forEach2 = function(callback){
    for(let i=0; i< this.length; i++){
        callback(this[i], i, this)
    }
} 

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//LEMBRANDO QUE O PRIMEIRO PARAMETRO DO FOREACH É O VALUE DO ELEMENTO O SEGUNDO É O INDICE E O TERCEIRO O PRÓPIO ARRAY

aprovados.forEach2(function(name, indice){
    console.log(`${indice+1}) ${name}`)
})

