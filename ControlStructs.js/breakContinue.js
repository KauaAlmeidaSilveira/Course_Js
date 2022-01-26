const nmr = [7, 8, 10, 5, 1, 9]

for(let i in nmr){
    if(i == 5) break
    console.log(`${i} = ${nmr[i]}`)
}

for(let i in nmr){
    if(i == 5) continue //CONTINUE TBM ENCERRA A REPETIÇÃO POREM ELE PULA PARA A PROXIMA, AO INVES DO BREAK
    console.log(`${i} = ${nmr[i]}`)
}

externo:for(a in nmr){
    
    
    for(b in nmr){
        if (a == 2 && b==3) break externo //BREAK COM RÓTULO SERVE PARA 'PARAR' UM LOOP EM ESPECIFICO
        console.log(`Par = ${a}, ${b}`)
    }


}