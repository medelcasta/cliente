//Declaración de una variable STRING
let mensaje:string = "Hola Mundo";
console.log(mensaje);

//Declaracion de una variable NUMBER 
let numero:number = 140;
console.log(numero);

let real:number = 1.43;
let binario:number = 0b101;
console.log(typeof binario);
let octal:number = 0o45;
console.log("Octal: "+ octal);
let hexadecimal:number = 0xFF
console.log("Hexadecimal: " + hexadecimal);

let suma:number = real + binario + numero;
console.log("Suma: " + suma);

//Declaracion de una variable BOOLEANO
let esViernes:boolean = false;
console.log(esViernes);

let comparacion:boolean;
comparacion = real > 2;
console.log(comparacion);

let cadena1:string = "Hola";
let cadena2:string = 'Hola';
let cadena3:string = `El numero es ${suma}`;
let unioncadenas:string = cadena1 + cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadenas);

//Declaracion de una variable ARRAY
let arreglo1:number[]=[1,2,3,4];
let arreglo2:Array<number>=[6,7,8,9];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
let arregloCadena: string[] = ["TS", "JS", "PHP"];
arregloCadena.push("Aurora");

//Declaracion de TUPLAS: casi como un array que tiene un tamaño fijo
let tupla:[string, number, boolean] = ["Aurora", 21, false];
console.log(tupla[0]); //POSICION 0 --> Aurora

//Delaracion enum: enumeracion 
enum semaforo{"Rojo"=3, "Naranja", "Verde"}
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
let nose: any;
nose = "HOLA";
nose = 30;

//Declaracion de Interfaces
interface Persona{
    nombre:string,
    apellido:string,
    edad:number;
    estado:boolean
}

let Aurora: Persona = {
    nombre: "Aurora", 
    apellido: "Medel", 
    edad: 21, 
    estado: false,
}

console.log(Aurora);