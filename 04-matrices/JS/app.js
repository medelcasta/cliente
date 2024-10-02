function recogerNum(msj){
    let res = prompt(msj);
    while(isNaN(res)){
        res= prompt("ERROR. Introduce un numero: ");
    }
    return (res);
}

function CreaYPintaMatriz(fila, columna){
    let matriz = new Array(columna);
    //inicializamos matriz
    for (let i = 0; i<columna; i++){
        matriz[i] = new Array(fila);
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