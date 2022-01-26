
function tratarErroELançar(erro){
    throw new Error('erro ao encontrar o nome')
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + ' !!!!')
    }catch (e){
        tratarErroELançar(e)
    }finally{
        console.log('Final')
    }
}


const pessoa = {name: 'kaua'}
imprimirNome(pessoa)