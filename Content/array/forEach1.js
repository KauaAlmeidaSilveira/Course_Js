const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//LEMBRANDO QUE O PRIMEIRO PARAMETRO DO FOREACH É O VALUE DO ELEMENTO O SEGUNDO É O INDICE E O TERCEIRO O PRÓPIO ARRAY

aprovados.forEach(function(name, indice){
    console.log(`${indice+1}) ${name}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)




