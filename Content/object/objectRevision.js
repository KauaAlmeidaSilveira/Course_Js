const produto = new Object

produto.nome= 'kaua'

produto['marca do produto'] = 'generica'

produto.preco = 220

console.log(produto)

delete produto.preco

delete produto['marca do produto']

console.log(produto)

const carro = {
    
    modelo: 'A4',
    valor: 89000,
   
    proprietario: {
        nome: 'Kaua',
        idade: 18,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
   
    condutores: [
        {nome: 'Kaua', idade: 18},
        {nome: 'Ana', idade: 22}
    ]
}

console.log(carro)

carro.valor += 1000

console.log(carro.valor)

console.log(carro['proprietario']['endereco']['logradouro']='Av. Gigante') 

delete carro.condutores
delete carro.proprietario.endereco

console.log(carro)

