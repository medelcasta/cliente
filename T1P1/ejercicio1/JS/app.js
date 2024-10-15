function conversion() {

    let dato;
    do{
        dato = parseInt(prompt("Introduce 1 para cambio a pesetas y 2 para cambio a dolares:"));
    }while(Number(dato) < 1 || Number(dato) > 2);
    let importe;
    do{
        importe = Number(prompt("Introduce el importe: "));
    }while(importe < 0 && isNaN(importe));
    let resultado;
    if(dato === 1){
        resultado = importe * 166;
        resultado+= " Pesetas"
    }
    if(dato === 2){
        resultado = importe * 1.09;
        resultado+= " Dolares"
    }
    alert(`El cambio  de ${importe}€ es ${resultado}`);
}
