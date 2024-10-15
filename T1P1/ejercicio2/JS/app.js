function introducir(){
    let sumatorio = 0;
    let contador = 0;
    do{
        let uno = prompt("Introduce el numero 1:");
        if(contador == 0){
            entrada = uno;
            sumatorio += uno;
            contador++;
        }
        let dos = prompt("Introduce el numero 2:");
        if(contador == 1){
            entrada = dos;
            sumatorio += dos;
            contador++;
        }
        let tres = prompt("Introduce el numero 3:");
        if(contador == 2){
            entrada = tres;
            sumatorio += tres;
            contador++;
        }
        let cuatro = prompt("Introduce el numero 4:");
        if(contador == 3){
            entrada = cuatro;
            sumatorio += cuatro;
            contador++;
        }
        let cinco = prompt("Introduce el numero 5:");
        if(contador == 4){
            entrada = cinco;
            sumatorio += cinco;
            contador++;
        }
        let seis = prompt("Introduce el numero 6:");
        if(contador == 5){
            entrada = seis;
            sumatorio += seis;
            contador++;
        }
        let siete = prompt("Introduce el numero 7:");
        if(contador == 6){
            entrada = siete;
            sumatorio += siete;
            contador++;
        }
        let ocho = prompt("Introduce el numero 8:");
        if(contador == 7){
            entrada = ocho;
            sumatorio += ocho;
            contador++;
        }
        let nueve = prompt("Introduce el numero 9:");
        if(contador == 8){
            entrada = nueve;
            sumatorio += nueve;
            contador++;
        }
        let diez = prompt("Introduce el numero 10:");
        if(contador == 9){
            entrada = diez;
            sumatorio += diez;
            contador++;
        }

        media = sumatorio / (contador  + 1);
        console.log(media);
    }while(contador < 10 || entrada != ".")
}

introducir();