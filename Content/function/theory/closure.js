// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função de acessar e manipular variaveis externas à função

// Contexto lexico em ação!

const x = 'Global'

function fora(){

    const x = 'Local'
    
    function dentro(){
        return console.log(x)     
    }

    dentro()

}

fora()