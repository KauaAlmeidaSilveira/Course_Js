let jogosBasquete = ((qntJogos=9) =>{

    let jogos = []

    for(let i=0; i<qntJogos; i++){
        jogos.push(Math.floor(Math.random() * (100+1)))
        console.log(jogos[i])
        
    }

    console.log('----------')

    let recordes = 0

    let ponto = jogos[0]

    let piorPonto = jogos[0]

    for(let i=0; i<qntJogos; i++){
        if(i != 0){
            if(ponto < jogos[i]){
                ponto = jogos[i]
                recordes++
            }
        }
    }

    for(let i=0; i<=qntJogos; i++){
        if(piorPonto > jogos[i]){
            piorPonto = jogos[i]
        }
    }

 

    let result = [recordes, jogos.indexOf(piorPonto)]

    for(let i in result){
        console.log(result[i]) 
    }

})()