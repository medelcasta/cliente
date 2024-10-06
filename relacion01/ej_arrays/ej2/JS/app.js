function countBy(x, y){

    let multiplos = [];

    if(x < 0 || y < 0){
        return [];
    } 
    for (let i = 1; i <= y; i++) {
        multiplos.push(x * i);
    }

    return multiplos;
}

console.log(countBy(3, 5)); 
console.log(countBy(-3, 5)); 
console.log(countBy(3, -5));