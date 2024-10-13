function pedirNumero() {
    do {
        //let numero = parseInt(prompt("Introduce un número entero positivo mayor a 2:"));
        let numero = parseInt(6);
    } while (isNaN(numero) || numero <= 2);
    return numero;
}

function crearMatriz(numero) {
    let matriz = [];
    for (let i = 1; i <= numero; i++) {
        let fila = [];
        for (let j = 1; j <= numero; j++) {
            fila.push(i * j * numero); 
        }
        matriz.push(fila);
    }
    return matriz;
}

function mostrarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }
}

let numero = pedirNumero();
let matriz = crearMatriz(numero);
mostrarMatriz(matriz);