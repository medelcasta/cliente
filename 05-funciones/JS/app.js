//Definicion de funciones

// PARA FUNCIONES MUY PEQUEÑAS
let func = new Function("a", "b", "return a * b");
let resultado = func(10,10);

console.log(resultado);

//funciones autoinvocadas
(function(){
    let msg = "hola!";
    console.log(msg);
})();

//funciones anonimas 

resultado = function(a,b){return a*b};
console.log(resultado(10,10));

//Notacion flecha
const arrowF = (a, b) => a * b;
console.log(arrowF(10,10));

//