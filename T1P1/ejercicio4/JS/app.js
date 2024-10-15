function creaMatriz(){
    let n;
    do{
        n = prompt("Introduce el tamaño de la matriz: ");
    }while(Number(n) < 2 || Number(n) > 5);
    let matriz = new Array(n);
    for(let i = 0; i < n; i++){
        matriz[i] = new Array(n);
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            matriz[i][j] = Math.floor(Math.random()*99);
        }
       // console.log(matriz[i]);
    }
    return matriz;
}
function pintarMatriz(matriz){
    let resultado = "";
    for (let i = 0; i<matriz.length; i++){
        for (let j = 0; j<matriz[i].length; j++){
            
            if(matriz[i][j] > 0 && matriz[i][j] < 10){
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

function media(matriz){
    let sumatorio = 0;
    for(let i = 0; i<matriz.length; i++){
        for (let j = 0; j<matriz[i].length; j++){
            sumatorio += matriz[i][j];
        }
    }
    let media = sumatorio /(matriz.length * matriz.length);
    console.log("La media es: " + media);
    return media;
}

function mostrarNumerosMedia(matriz, media){
    let resultado = [[], []];
    for(let i = 0; i<matriz.length; i++){
        for (let j = 0; j<matriz[i].length; j++){
            if(media < matriz[i][j]){
                resultado[0].push(matriz[i][j]);
            }else{
                resultado[1].push(matriz[i][j]);
            }
        }
    }
    pintarMatriz(resultado);
    return resultado;
}

function ordenar(matriz){
    let ordenar;
    do{
        ordenar = prompt("Introduce 0 para ordenar ascendente y 1 descendente: ");
    }while(Number(ordenar) < 0 || Number(ordenar) > 1 );
    if(ordenar == 0){
        for(let i = 0; i<matriz.length; i++){
            for (let j = 0; j<matriz[i].length; j++){
                matriz[i].sort();
            }
            console.log(matriz[i]);    
        }
    }
    if(ordenar == 1){
        for(let i = 0; i<matriz.length; i++){
            for (let j = 0; j<matriz[i].length; j++){
                matriz[i].sort(function(a, b){return a - b}); 
                    matriz[i].reverse()
            }
            console.log(matriz[i]);    
        }
    }

    pintarMatriz(matriz);
    
}

let mimatriz = creaMatriz();
console.log("La matriz creada con numeros aleatorios: ")
pintarMatriz(mimatriz);
let mimedia = media(mimatriz);
console.log("El resultado es: ")
let otra = mostrarNumerosMedia(mimatriz, mimedia);
console.log("La matriz ordenada es: ")
ordenar(otra);
