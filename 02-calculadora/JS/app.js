function Calculadora(){
    let a = recogerNum("Dime número A: ");
    let b = recogerNum("Dime número B: ");

    let operando = prompt("Introduce un operador (+, -, *, /)");
    let valido = false;

    switch(operando){
        case "+":
            Suma(a,b);
            valido = true;
            break;
        case "-":
            Resta(a,b);
            valido = true;
            break;
        case "*":
            Multiplicacion(a,b);
            valido = true;
            break;
        case "/":
            Division(a,b);
            valido = true;
            break;
    }   
}

function Suma(a, b){
    
    let ressss = Number(a) + Number(b)
    alert(`La suma es: ${ressss}`);
    console.log(ressss);
}

function Resta(a, b){
    let ressss = Number(a) - Number(b)
    alert(`La resta es: ${ressss}`);
    console.log(ressss);
}

function Multiplicacion(a, b){
    let ressss = Number(a) * Number(b)
    alert(`La multiplicacion es: ${ressss}`);
    console.log(ressss);
}

function Division(a, b){
    let ressss = Number(a) / Number(b)
    alert(`La division es: ${ressss}`);
    console.log(ressss);
}

function recogerNum(msj){
    let res = prompt(msj);
    while(isNaN(res)){
        res= prompt("ERROR. Introduce un numero: ");
    }
    return (res);
}

Calculadora();