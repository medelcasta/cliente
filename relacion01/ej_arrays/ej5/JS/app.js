function iniciar(){
    let frase = prompt("Introduce una frase: ");


let informacion = frase.split(" ");

console.log("Numero de palabras: " + informacion.length);
console.log("Primera palabra: " + informacion[0]);
console.log("Ultima palabra: " + informacion[informacion.length -1]);
console.log("Orden inverso: " + informacion.reverse());
console.log("DE A A LA Z: " + informacion.sort());

let ordenado = informacion.sort();
console.log("DE Z A LA A: " + ordenado.reverse());

let imprimir = `
<p>Numero de palabras:  ${informacion.length}</p>
<p>Primera palabra:  ${informacion[0]}</p>
<p>Ultima palabra: ${informacion[informacion.length -1]}</p>
<p>Orden inverso: ${informacion.reverse()}</p>
<p>DE A A LA Z:  ${informacion.sort()}</p>
<p>DE Z A LA A:  ${ordenado.reverse()}</p>
`;


let nuevaVentana = window.open("", "Resultados", "width=400,height=400");
nuevaVentana.document.write(`<html><head><title>Resultados</title></head><body>${imprimir}</body></html>`);
nuevaVentana.document.close(); 

}