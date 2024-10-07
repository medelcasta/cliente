function filtroAmigos(amigos){
    let lista = [];
    let palabra = " ";
    let j = 0;
    for(let i = 0; i < amigos.length; i++){
        if(amigos[i].length == 4){
            lista.push(amigos[i]);
            j++;
        }
    }
    return lista;
}

let entrada = ["Luis", "Estela", "Enya", "Jose Antorio"];
let salida = filtroAmigos(entrada);
console.log(salida);

let entrada2 = ["Paula", "Estela", "Aurora", "Jose Antorio", "Mia"];
let salida2 = filtroAmigos(entrada2);
console.log(salida2);