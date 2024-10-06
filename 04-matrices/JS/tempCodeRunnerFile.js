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