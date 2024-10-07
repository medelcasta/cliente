//Math.random() devolverá un numero de coma flotante mayor o igual que 0 
//y menor que (pero nunca igual a) 1.
//En otras palabras, 0<= x < 1;

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

console.log(Math.random()*100);

//numero aleatorio entre 0 y 100
console.log(Math.random()*101);

console.log(getRandomInt(3));
//Salida; 0, 1 or 2

console.log(getRandomInt(2));
//salida: 0 o 1

console.log(Math.random());
//salida: un numero de 0 < 1

//Generar numero aleatrio entre minimo y maximo sin incluir extremos
function getRandomArbitrary(min, max){
    return Math.random()*(max -min) + min;
}
getRandomArbitrary(5,10);

//Generar numero aleatrio entre minimo y maximo incluyendo extremos (numeros enteros)
function getRandomArbitrary(min, max){
    return Math.random()*(max -min + 1) + min;
}

//Generar numero aleatorio entre minimo y maximo inclyendo extremos
function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random()* (maxFloored - minCeiled + 1)+ minCeiled)
}