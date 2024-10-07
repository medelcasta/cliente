//EJERCICIO MATRICES
/*
    Solicitamos el numero de filas y el numero de columnas, solicito un valor numerico por cada fila

*/

function pedirfila() {
    let filas=0;
    do {
        filas = prompt('Introduce el numero de filas');
    } while (isNaN(filas) || filas < 0);

    return filas;
}

function pedircolumna() {
    let columnas
    do {
        columnas = prompt('Introduce el numero de columnas');
    } while (isNaN(columnas) || columnas < 0);
    return columnas;
}

function crearMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        
        let numrand = Math.floor(Math.random()*(9)+1); //prompt("Introduce numeron  ")
        for (let j = 0; j < columnas; j++) { 
            fila.push((j+1) * numrand); //añadir al array los multiplos del numero
        }
        matriz.push(fila);
    }
    return matriz;
}
//Math.floor(Math.random()*(9)+1);


function PintarMatriz(matriz){
    let resultado = "";
    
    for (let i = 0; i<matriz.length; i++){
        for (let j = 0; j<matriz[i].length; j++){
            
            if(matriz[i][j] > 0 && matriz[i][j] <10){ //añadir 0 si el numero es de 1 cifra
                resultado+= "0" + matriz[i][j] + " ";
            }
            else{
                resultado+= matriz[i][j] + " ";
            }
        }
        console.log(resultado);
        resultado = "";
    }
}


let filas = pedirfila();
let columnas = pedircolumna();

let matriz = crearMatriz(filas, columnas);

PintarMatriz(matriz);