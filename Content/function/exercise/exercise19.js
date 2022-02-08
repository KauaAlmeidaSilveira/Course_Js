// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

let pedido = ((cod='600', qnt=2) => {
    switch(cod){
        case '100':
            console.log('R$ '+(3*qnt))
            break
        case '200':
            console.log('R$ '+(4*qnt))
            break
        case '300':
            console.log('R$ '+(5.5*qnt))
            break
        case '400':
            console.log('R$ '+(7.5*qnt))
            break
        case '500':
            console.log('R$ '+(3.5*qnt))
            break
        case '600':
            console.log('R$ '+(2.8*qnt))
            break
        default:
            console.log('Esse produto não existe')
    }
})()