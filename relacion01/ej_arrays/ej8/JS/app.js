function unicos(primero, segundo){
    let resultado = [];
    function quitarRepes(a, b){
        for(let i = 0; i< a.length; i++){
            let elemento = a[i];
            if (a.indexOf(elemento) === a.lastIndexOf(elemento) && b.indexOf(elemento) === -1) {
                resultado.push(elemento); 
            }
         }
    }
    quitarRepes(primero, segundo);
    quitarRepes(segundo, primero);
    return resultado;
}
let a = [1,2,3,3,8];
let b = [3,2,1,4,5,7,8];
let resultado = unicos(a, b);
let res = unicos([77, "ciao", 8, "ciao", 42], [77, 42, 9]);
console.log(res);
console.log(resultado);


//FORMA DEL PROFE
function copiaUnicos(array1, array2){
    let arrayFinal = [];

    //Agregar elementos únicos de array1 que no estén repetidos en array1 ni esten en array2
    for(let i = 0; i < array1.length; i++){
        if(array2.indexOf(array1[i]) === -1 && !repetidos(array1, array2[i])){
        //if(array2.indexOf(array1[i]) === -1 && unicos(array1, array2[i])){
        //if(!array1.includes(array2[i])&& !repetidos(array1, array2[i])){
            arrayFinal.push(array1[i])
        }
    }

    //Agregar elementos únicos de array2 que no estén repetidos en array2 ni esten en array1
    for(let i = 0; i < array2.length; i++){
        if(array1.indexOf(array2[i]) === -1 && !repetidos(array2, array1[i])){
        //if(array1.indexOf(array2[i]) === -1 && unicos(array2, array1[i])){
        //if(!array2.includes(array1[i])&& !repetidos(array2, array1[i])){
            arrayFinal.push(array2[i])
        }
    }
    return arrayFinal;
}

function esUnicos(array, elem){
    return array.indexOf(elem) === array.lastIndexOf(elem);
}

function repetidos(array, elemento){
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === elemento){
            cont++;
        }
    } 
    if(cont == 1){
        return false;
    }else{
        return true;
    }
}