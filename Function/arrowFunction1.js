let dobro = function(a) {
    return 2*a
}

// -------------------------------------------------

dobro = (a) => {
    return 2*a
}

// -------------------------------------------------

dobro = a => 2*a

// -------------------------------------------------

console.log(dobro(5))

// --------------------------------------------------------------------------------------

let ola = function(msg= 'nda'){
    return console.log(msg) 
}

// -------------------------------------------------

ola = (msg= 'nda') => {
    return console.log(msg) 
}

// -------------------------------------------------

ola = (msg= 'nda') => console.log(msg) 

// -------------------------------------------------

ola('Como vc esta ?')
