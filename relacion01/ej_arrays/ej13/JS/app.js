let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
let introduce = prompt('Introduce 8 palabras: ');
//"casa blue green orden brown bombilla bici pink";
        
let palabras = introduce.split(" ");
let resultado = [];

let coloresEncontrados = palabras.filter(palabra => colores.includes(palabra));
let otrasPalabras = palabras.filter(palabra => !colores.includes(palabra));

let arrayResultante = coloresEncontrados.concat(otrasPalabras);

console.log("Array original del usuario:", palabras);
console.log("Array resultante:", arrayResultante);