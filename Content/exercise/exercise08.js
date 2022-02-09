// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).


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