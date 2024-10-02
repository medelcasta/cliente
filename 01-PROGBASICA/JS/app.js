// alert("Hola Mundo. Fichero JS")

//'use strict'

//Activamos Quoka ctrl+mayus+p
console.log("Hola Mundo");

//nombre = 'Aurora';
console.log(nombre)
//alert(nombre);

var nombre;
let a = 3;
let b = '2';
let c = a + b;
console.log(c)
console.log(typeof a)
console.log(typeof b)
let ok = true
console.log(typeof ok)
console.log(a + nombre)
nombre ='Aurora';
console.log(a + nombre)
console.log(typeof nombre)

if(b>a){
    console.log("")
}else{
    console.log("")
}

let objeto1 = Symbol(1);
console.log(typeof objeto1);
//symbol es un tipo de dato 
console.log(objeto1);

let objeto2 = Symbol(2);
console.log(typeof objeto2);
console.log(objeto1);

let horaDia = 69;
let mensaje = "";

if(horaDia >= 6 && horaDia < 12){
    mensaje = "Buenos días!";
}
else if(horaDia >= 12 && horaDia < 18){
    mensaje = "Buenas tardes!";
}
else if(horaDia >= 18 && horaDia <= 23 || horaDia >= 0 && horaDia < 6){
    mensaje = "Buenas noches!";
}
else{
    mensaje = "ERROR, hora no valida";
}
console.log(mensaje + " actualmente son " + horaDia);

let z = 2;
let y = '2';

if(z==y){
    console.log("son iguales")
}
if(z===y){
    console.log("son iguales")
}
else{
    console.log("no son iguales")
}

/*
    OPERADOR TERNARIO:
    El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
    Se usa para tomar una decision basada en una expresion que se evalua como true o false
    Es una forma abreviada de la sentencia if else que crea codigo mas limpio, facil de 
    entender y rapido de escribir
*/

let resultado = (z===y) ? "Verdadero" : "Falso";
console.log(resultado);

//CASTEO O CASTING 
let miNumero = "18";
console.log(miNumero);

if(isNaN(miNumero)){ //isNot a Number
    console.log("no es un numero");
}
//casteo a numero
miNumero = Number(miNumero);
console.log(miNumero);

//casteo a string
let miString = String(miNumero);
console.log(miString);

//Tipos de bucles
//while
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
//do while
let cont = 0;
do{
    console.log(cont++);
}while(cont < 4);

//for
for (let conta = 0; conta < 5; conta++) {
    console.log(conta);
    
}

//switch
let mes = 4;
let estacion = "desconocida"

switch(mes)
{
    case 1: case 2: case 12:
        estacion = "INVIERNO";
        break;
    case 3: case 4: case 5:
        estacion = "PRIMAVERA";
        break;
    case 6: case 7: case 8:
        estacion = "VERANO";
        break;
    case 9: case 10: case 11:
        estacion = "OTOÑO";
        break;
    default:
        estacion = "ERROR";
}

console.log("El mes " + mes + " es " + estacion)

for (let i=0; i<=2; i++){
    for(let j=0; j<= 3; j++){
        console.log("c1: " + i+ " c2: "+ j);
        if(j==2)
            //break;
        j = 4;
        i = 3;
    }
}

// clave : valor 
const objeto3 ={ nombre : "Aurora", apellido : "Medel", edad : 21 }

console.log(typeof objeto);

let marcaCoches = ['BMW', 'Audi', 'Renault', 'Ford'];

let i = 0;
while (marcaCoches[i]){
    console.log(marcaCoches[i]);
    i++;
}


for(i = 0; i < marcaCoches.length; i++){
    console.log(marcaCoches[i]);
}

//Definir clase
class Persona{
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    toString(){
        return `${this._nombre} ${this._apellido}, edad :${this._edad}`;
    }
    pasoaTexto(){
        return `${this._nombre} 
        ${this._apellido},
         edad :${this._edad}`;
    }
}
//permite meter variable sin el uso del mas (+) interta tanto texto como variable

console.log(Persona);
console.log(typeof Persona);

//Probar la clase Persona
let persona1 = new Persona('Nico', "Perez", 21);
console.log(persona1);
let nombre2 = persona1.pasoaTexto();
console.log(persona1.toString());
console.log(nombre2);

let persona2 = new Persona(objeto3.nombre, objeto3.apellido, objeto3.edad, objeto3.edad);
console.log(persona2.pasoaTexto());

//Definicion de funciones
var aa = 4;
var bb = 5;
function miFuncion(xx, yy){
    let aa = 7;
    let bb = 10;
    console.log("Suma: " + (xx + yy));
    console.log("Suma: " + (aa + bb));
    console.log("Suma :" + `${aa+bb}.Más texto`);
    return xx+yy;
}

let result = miFuncion( 7, 8);
console.log(result);

console.log(typeof miFuncion);

//Control de errores
//Suma();
//Copiar codigo francis

//Vamos a realizar una calculadora 
//Solicitamos un numero A y numero B y operacion (+, -, * y /)

function Calculadora(){
    let a = recogerNum("Dime número A: ");
    let b = recogerNum("Dime número B: ");

    let operando = prompt("Introduce un operador (+, -, *, /)");
    let valido = false;

    //  do{
    //     operando = prompt("ERROR. Introduce un operador (+, -, *, /)");
    //  }while(!valido);

    switch(operando){
        case "+":
            Suma(a,b);
            valido = true;
            break;
        case "-":
            Resta(a,b);
            valido = true;
            break;
        case "*":
            Multiplicacion(a,b);
            valido = true;
            break;
        case "/":
            Division(a,b);
            valido = true;
            break;
    }   
}

function Suma(a, b){
    
    let ressss = Number(a) + Number(b)
    alert(`La suma es: ${ressss}`);
    console.log(ressss);
}

function Resta(a, b){
    let ressss = Number(a) - Number(b)
    alert(`La resta es: ${ressss}`);
    console.log(ressss);
}

function Multiplicacion(a, b){
    let ressss = Number(a) * Number(b)
    alert(`La multiplicacion es: ${ressss}`);
    console.log(ressss);
}

function Division(a, b){
    let ressss = Number(a) / Number(b)
    alert(`La division es: ${ressss}`);
    console.log(ressss);
}

function recogerNum(msj){
    let res = prompt(msj);
    while(isNaN(res)){
        res= prompt("ERROR. Introduce un numero: ");
    }
    return (res);
}

Calculadora();

