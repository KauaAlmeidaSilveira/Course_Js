const vlr = [3, 5, 6, 7]

console.log(vlr[0], vlr[3])

//Aumentando o tamanho do array atribuindo um determinado valor na seguinte posição
vlr[4] = 10
console.log(vlr[4])

//É possivel atribuir um valor na posição que eu preferir, caso eu pule alguma posição vai aparecer no console um aviso
vlr[10] = 50

//LEMBRANDO QUE O ARRAY É HETEROGENIO, ou seja, ele pode receber valores de diversos tipos

vlr.push('kaua', false, null, {nome: "kaua"})


//A FUNÇÃO .pop() MOSTRA O ULTIMO VALOR DO ARRAY E O DELETA 
console.log(vlr.pop())

//É POSSIVEL DELETAR UM DETERMINADO VALOR DO ARRAY UTILIZANDO O DELETE
delete vlr[0]

console.log(typeof vlr)