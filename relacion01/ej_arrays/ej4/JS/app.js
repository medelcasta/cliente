function insertElements(){
    let vector = "2,3,4,5"
    // prompt("Introduce un vector de numeros enteros separados por comas: ");

    let conjunto = vector.split(",");
    let elemento = "*"
   //prompt("Introduce el nuevo elemento a añadir: ");

    let posicion;
    do{
        posicion = 2
        // parseInt(prompt("Introduce la posicion del elemento: "));
    }while(posicion < 0 || posicion > conjunto.length);

    conjunto.splice(posicion, 0, elemento);
    conjunto.splice(2, 2, "puta")
    console.log(conjunto);

}
insertElements();
