//Declaración de una variable STRING
var mensaje = "Hola Mundo";
console.log(mensaje);
//Declaracion de una variable NUMBER 
var numero = 140;
console.log(numero);
var real = 1.43;
var binario = 5;
console.log(typeof binario);
var octal = 37;
console.log("Octal: " + octal);
var hexadecimal = 0xFF;
console.log("Hexadecimal: " + hexadecimal);
var suma = real + binario + numero;
console.log("Suma: " + suma);
//Declaracion de una variable BOOLEANO
var esViernes = false;
console.log(esViernes);
var comparacion;
comparacion = real > 2;
console.log(comparacion);
var cadena1 = "Hola";
var cadena2 = 'Hola';
var cadena3 = "El numero es ".concat(suma);
var unioncadenas = cadena1 + cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadenas);
//Declaracion de una variable ARRAY
var arreglo1 = [1, 2, 3, 4];
var arreglo2 = [6, 7, 8, 9];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
var arregloCadena = ["TS", "JS", "PHP"];
arregloCadena.push("Aurora");
//Declaracion de TUPLAS: casi como un array que tiene un tamaño fijo
var tupla = ["Aurora", 21, false];
console.log(tupla[0]); //POSICION 0 --> Aurora
//Delaracion enum: enumeracion 
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Rojo"] = 3] = "Rojo";
    semaforo[semaforo["Naranja"] = 4] = "Naranja";
    semaforo[semaforo["Verde"] = 5] = "Verde";
})(semaforo || (semaforo = {}));
console.log(semaforo);
// let valor = semaforo.Rojo;
// switch(valor){
//     case 3:
//         console.log("No pases");
//         break;
//     case 4:
//         console.log("Ten cuidado");
//         break;
//     case 5:
//         console.log("No pases");
//         break;
//     default:
//         console.log("No funciona");
//         break;
// }
//Declaracion de ANY: se traga cualquier tipo
var nose;
nose = "HOLA";
nose = 30;
var Aurora = {
    nombre: "Aurora",
    apellido: "Medel",
    edad: 21,
    estado: false,
};
console.log(Aurora);
