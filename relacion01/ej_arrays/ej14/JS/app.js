function likes(nombres) {
    let count = nombres.length; 
    
    if (count === 0) {
        return "no one likes this";
    }
    if (count === 1) {
        return nombres[0] + " likes this"; 
    }
    if (count === 2) {
        return nombres[0] + " and " + nombres[1] + " like this"; 
    }
    if (count === 3) {
        return nombres[0] + ", " + nombres[1] + " and " + nombres[2] + " like this"; 
    }
    if (count > 3) {
        let res = count - 2;
        return nombres[0] + ", " + nombres[1] + " and " + res + " others like this";
    }
}

console.log(likes([])); 
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"])); 
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); 