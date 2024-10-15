// Inicialización del tablero de 4x5
const filas = 4;
const columnas = 5;
const tablero = [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*']
];

// Inicialización de posiciones de minas y tesoro
let minas = [];
let tesoro = [];

// Función para colocar las minas y el tesoro de manera aleatoria
function colocarMinasYTesoro() {
    // Colocar 3 minas
    while (minas.length < 3) {
        let filaAleatoria = Math.floor(Math.random() * filas);
        let columnaAleatoria = Math.floor(Math.random() * columnas);

        // Comprobar que no haya mina en esa posición
        if (tablero[filaAleatoria][columnaAleatoria] === '*') {
            tablero[filaAleatoria][columnaAleatoria] = 'M';
            minas.push([filaAleatoria, columnaAleatoria]); // Guardamos la mina
        }
    }

    // Colocar el tesoro en una posición que no tenga mina
    let colocado = false;
    while (!colocado) {
        let filaAleatoria = Math.floor(Math.random() * filas);
        let columnaAleatoria = Math.floor(Math.random() * columnas);

        // Comprobar que no haya mina en esa posición
        if (tablero[filaAleatoria][columnaAleatoria] === '*') {
            tablero[filaAleatoria][columnaAleatoria] = 'T';
            tesoro = [filaAleatoria, columnaAleatoria]; // Guardamos la posición del tesoro
            colocado = true;
        }
    }
}

// Función para mostrar el tablero al jugador
function mostrarTablero() {
    console.clear();
    for (let i = 0; i < filas; i++) {
        let filaMostrada = '';
        for (let j = 0; j < columnas; j++) {
            if (tablero[i][j] === '*' || tablero[i][j] === 'M' || tablero[i][j] === 'T') {
                filaMostrada += '* '; // Si no se ha revelado, mostramos *
            } else {
                filaMostrada += tablero[i][j] + ' '; // Si ya se ha revelado, mostramos el valor
            }
        }
        console.log(filaMostrada);
    }
}

// Función principal del juego
function jugar() {
    let juegoTerminado = false;
    
    colocarMinasYTesoro(); // Colocamos las minas y el tesoro antes de empezar el juego

    while (!juegoTerminado) {
        mostrarTablero(); // Mostramos el tablero

        // Pedir coordenadas al usuario
        let filaUsuario = parseInt(prompt(`Introduce la fila (1-${filas}):`)) - 1;
        let columnaUsuario = parseInt(prompt(`Introduce la columna (1-${columnas}):`)) - 1;

        // Comprobar si las coordenadas están dentro del tablero
        if (filaUsuario < 0 || filaUsuario >= filas || columnaUsuario < 0 || columnaUsuario >= columnas) {
            console.log('Coordenadas fuera del tablero, inténtalo de nuevo.');
            continue;
        }

        // Revisar el contenido de la celda seleccionada
        if (tablero[filaUsuario][columnaUsuario] === 'M') {
            tablero[filaUsuario][columnaUsuario] = 'X'; // Mostrar mina
            mostrarTablero();
            console.log('¡Has pisado una mina! ¡Has perdido!');
            juegoTerminado = true;
        } else if (tablero[filaUsuario][columnaUsuario] === 'T') {
            tablero[filaUsuario][columnaUsuario] = '€'; // Mostrar tesoro
            mostrarTablero();
            console.log('¡Has encontrado el tesoro! ¡Has ganado!');
            juegoTerminado = true;
        } else {
            tablero[filaUsuario][columnaUsuario] = '_'; // Marcar como vacío
        }
    }
}

// Iniciar el juego
jugar();