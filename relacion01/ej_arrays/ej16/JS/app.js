//relleno el array
function creaRestaurante(){
    let tam = prompt("Introduce el numero de mesas del restaurante");
    let restaurante = [];
    for(let i = 0; i < tam; i++){
        restaurante.push(Math.floor(Math.random() * (4 - 0 + 1) + 0));
    }
    console.log("El estado de las mesas: " + restaurante);
    return restaurante;
}

function numeroComensales(){
    let num;
    do{
        num = parseInt(prompt("Introduce el numero de comensales: "));
    }while(num > 4 || num < 0);
    return num;
}



function añadir_comensales(num, restaurante){
    let acomodado = false;
    let lleno = true;
    
    for(let i = 0; i < restaurante.length; i++){
        if(restaurante[i] + num <= 4){
            restaurante[i] += num;
            console.log("Por favor, siéntese en la mesa " + (i + 1));
            acomodado = true;
            break;
        }
    }
    if(!acomodado){
        console.log("Lo siento, no queda sitio en el restaurante.");
    }

    for(let i = 0; i < restaurante.length; i++){
        if(restaurante[i] < 4){ 
            lleno = false;
            break;
        }
    }
    if(lleno){
        console.log("El restaurante está completamente lleno.");
    }
}

    


let restaurante = creaRestaurante();
let num;
do{
    num = numeroComensales();
    if(num > 0){
        añadir_comensales(num, restaurante);
    }
    console.log(restaurante);
}while(num > 0);

