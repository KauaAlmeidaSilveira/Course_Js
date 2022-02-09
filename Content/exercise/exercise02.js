// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


let whatTheTriangle = ((x, y, z) => {
    if(x==y && x==z){
        console.log('The triangle is equilateral')
    }else if(x==z && x!= y || x==y && x!=z || y==z && y!=x){
        console.log('The triangle is isosceles')
    }else{
        console.log('The triangle is scalene')
    }
})(5,5,8)


