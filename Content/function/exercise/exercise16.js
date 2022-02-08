// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

let calculadora = ((x1=2, op='+', x2=3) => {
    switch(op){
        case '+':
            console.log(x1+x2)
            break
        case '-':
            console.log(x1-x2)
            break
        case '*':
            console.log(x1*x2)
            break
        case '/':
            console.log(x1/x2)
            break
        default:
            console.log('Operação Inválida!!')
    }
})(6, '/', 3)

