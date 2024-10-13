function crearMatriz(fila, columna){
    let matriz = new Array(fila);
    for(let i = 0; i < fila; i++){
        matriz[i] = new Array(columna);
    }

    for(let i = 0; i < fila; i++){
        for(let j = 0; j < columna; j++){
            matriz[i][j] = 0;
        }
        console.log(matriz[i]);
    }
    return matriz;
}

let mimatriz = crearMatriz(3, 3);
console.log(mimatriz);