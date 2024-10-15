function crearArray(){
    let numero;
    do{
        numero = prompt("Introduce un numero (entre 5 y 10): ");
    }while(numero < 5 || numero > 10);

    let miarray = [];
    for(let i = 0; i < numero; i++){
        miarray.push(Math.floor(Math.random() * 100 * numero));
    }
    return miarray;
}
function mostrarArray(array){
    let res= "";
    for(let i = 0; i < array.length; i++){
        res += array[i] + " ";
    }
    return res;
}

function calcularMedia(array){
    let sumatorio = 0;
    let mostrar = "";

    for(i = 0; i< array.length; i++){
        sumatorio += array[i];
    }

    let media = sumatorio / array.length;
    
    for(i = 0; i< array.length; i++){
        if(array[i] > media){
            mostrar += array[i] + " ";
        }
    }
    console.log("Numeros por encima de la media: " + mostrar);
}
let mio = crearArray();
console.log(mostrarArray(mio));
calcularMedia(mio);