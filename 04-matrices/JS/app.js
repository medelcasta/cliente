//matrices
let matriz = [];

let num = 3;
//prompt("Dime el tamaño de columna");

for(let i=0; i<num; i++){
    matriz[i] = new Array(num);
}

function recogerNum(msj){
    let res = 3;
    //prompt(msj);
    while(isNaN(res)){
        res= 3;
        // prompt("ERROR. Introduce un numero: ");
    }
    return (res);
}

function CreaYPintaMatriz(fila, columna){
    let matriz = new Array(fila);
    //inicializamos matriz
    for (let i = 0; i<fila; i++){
        matriz[i] = new Array(columna);
    }
    //relleno de valores
    for (let i = 0; i<fila; i++){
        for (let j = 0; j<columna; j++){
            matriz[i][j]= j;
        }
        console.log(matriz[i]);
    }
}


let fila = recogerNum("dime tamaño de fila");
let columna = recogerNum("dime tamaño de columna");

CreaYPintaMatriz(fila, columna);

matriz =[[0,1,2,3], [0,1,2,3], [0,1,2,3]];
console.log(matriz);

autos = [['BMW1', 'BMW2', 'BMW3'], ['AUDI', 'AUDI2'], ['CLIO']]
console.log(autos);

console.log(autos.length);
console.log(autos[0].length);
console.log(autos[1].length);
console.log(autos[2].length);

function PintarMatriz(autos){
    let resultado = "";
    
    for (let i = 0; i<autos.length; i++){
        for (let j = 0; j<autos[i].length; j++){
            resultado+= autos[i][j] + " ";
        }
        console.log(resultado);
        resultado = "";
    }
}

PintarMatriz(autos);

//EJERCICIO MATRICES
/*
    Solicitamos el numero de filas y el numero de columnas, solicito un valor numerico por cada fila

*/

let filas = 3;
// prompt('Introduce el numero de filas');
let columnas = 2;
// prompt('Introduce el numero de columnas');
let mimatriz;
for(let i = 0; i<= filas; i++){
    let numero =  4;
   // prompt('Introduce un numero: ');
    for(let j = 0; j<= columnas; j++){
        if(numero < 0){
            numero = 0 + numero;
        }
        mimatriz[i][j] *= numero;
    }
}