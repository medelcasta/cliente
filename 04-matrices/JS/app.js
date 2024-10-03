//matrices
let matriz = [];

let num = prompt("Dime el tamaño de columna");

for(let i=0; i<num; i++){
    matriz[i] = new Array(num);
}

function recogerNum(msj){
    let res = prompt(msj);
    while(isNaN(res)){
        res= prompt("ERROR. Introduce un numero: ");
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