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
let A = [1, 2, 3];
let B = ['a', 'b', 'c', 'd', 'e'];
console.log(intercalar(A, B));