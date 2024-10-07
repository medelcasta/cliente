function decrecientes(n) {
    let resultado = [];
    
    for (let i = n; i > 0; i--) {
        resultado.push(i); 
    }
    
    return resultado; 
}

console.log(decrecientes(5));
console.log(decrecientes(3)); 