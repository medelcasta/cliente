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
console.log(resultado);