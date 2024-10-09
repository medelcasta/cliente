function intercalar(a, b){
    let resultado = [];
    //calculamos cual es el mayor
    let maxLength = Math.max(a.length, b.length); 
    for(let i = 0; i< maxLength; i++){
        if( i < a.length){
            resultado.push(a[i]);
        }
        if( i < b.length){
            resultado.push(b[i]);
        }
    }
    return resultado;
    
}
let A = prompt("Introduce numeros separados por comas: ")
let num = A.split(",")
//[1, 2, 3];
let B = prompt("Introduce letras separados por comas: ")
let letras = B.split(",")
//['a', 'b', 'c', 'd', 'e'];
console.log(intercalar(num, letras));

function intercalar2(a,b){
    let resultado = [];
    let maxLength;
    //let maxLength = (a.length > b.length) ? a.length : b.length;
    
    if(a.length > b.length ){
        maxLength = a.length;
    }else{
        maxLength = b.length;
    }

    for(let i = 0; i< maxLength; i++){
        if( i < a.length){
            resultado.push(a[i]);
        }
        if( i < b.length){
            resultado.push(b[i]);
        }
    }
    return resultado;
}

let c= [1, 2, 3];
let d = ['a', 'b', 'c', 'd', 'e'];

console.log(intercalar2(c, d));