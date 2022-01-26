const nome = 'kaua'

const concatenacao = 'Olá '+ nome +'!'

//PARA UTILIZAR O TEMPLATE NA STRING É NECESSARIO QUE O TEXTO ESTEJA ENTRE CRASES ``

const template = `Olá ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('pare')}!`)