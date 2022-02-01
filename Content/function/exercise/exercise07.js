let bhaskara = ((a = 3, b = -5, c = 12) => {

    let delta = Math.pow(b, 2) -4 * a * c

    if(delta < 0){
      
        console.log("Delta é negativo")
  
    }else{
       
        let x1 = (-b + Math.sqrt(delta))/2*a
        let x2 = (-b - Math.sqrt(delta))/2*a
        console.log(`Delta é ${delta}, x1 é ${x1}, x2 é ${x2}`)
   
    }
})()

