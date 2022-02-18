const obj= {a:1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj)) // JSON.stringify(obj) PASSA O OBJETO PARA JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c":3 }')) //JSON.parse("") PASSA O JSON PARA OBJETO
console.log(JSON.parse('{ "a": 1.2, "b": "string", "c":true, "d": {}, "e": [] }'))