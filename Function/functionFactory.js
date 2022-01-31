// factory simples

function criarProduto(nome, preco, desconto = 0.1){
    return{
        nome,
        preco,
        desconto,
        precoComDesconto: preco-(preco*desconto)
    }
}

console.log(criarProduto('teclado', 100, 0.5))

console.log(criarProduto('mouse', 10))







