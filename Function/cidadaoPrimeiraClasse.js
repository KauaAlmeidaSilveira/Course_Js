
function fun1(){

}

// -------------------------------------------------

let fun2 = function(){return console.log('fun2')}

// -------------------------------------------------

let array = [function(a, b){return a+b}, fun1, fun2, 5]

// -------------------------------------------------

console.log(array[0](10, 13))

// -------------------------------------------------

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// -------------------------------------------------

function fun3(fun){
    fun() 
}

// -------------------------------------------------

fun3(fun2)

// -------------------------------------------------

function fun4 (){
    
    return function fun5(){
        let msg = 'kaua'
         console.log(msg)
    }
    
}

fun4()()

// -------------------------------------------------