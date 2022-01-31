function carro(velocidadeMax = 200, delta = 5) {
    
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
        console.log(this.getVelocidadeAtual())
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }


}

const uno = new carro()
uno.acelerar()

const ferrari = new carro(350, 20)
ferrari.acelerar()




