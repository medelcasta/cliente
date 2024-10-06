let array_original = [1,2,3,4,5,6];

function recibir_array(array_original){
    let array_modificado = [];
    let sumatorio = 0;
    for(let i = 0; i < array_original.length; i++){
        sumatorio += array_original[i];
        array_modificado.push(sumatorio);
    }

    return array_modificado;
}

array_modificado = recibir_array(array_original);

console.log(array_modificado);

