
function filtroAmigos(amigos){
    let lista = [];
    for(let i = 0; i < amigos.length; i++){
        if(amigos[i].length == 4){
            lista.push(amigos[i]);
        }
    }
    return lista;
}
function recogerNombres(){
    let entrada_usuario = prompt("Introduce los nombres separados por comas: ");
//"Aurora,Nico,Carlos";

    let amigos = entrada_usuario.split(","); 
    return amigos;
}


const entrada = ["Luis", "Estela", "Enya", "Jose Antorio"];
let salida = filtroAmigos(entrada);
console.log(salida);

const entrada2 = ["Paula", "Estela", "Aurora", "Jose Antorio", "Mia"];
salida = filtroAmigos(entrada2);
console.log(salida);

const entrada3 = ["Juan", "Ana", "Sara", "David", "Pablo", "Luz", "Mark", "Irene", "Nina", "Alba"];
salida = filtroAmigos(entrada3);
console.log(salida);

salida = filtroAmigos(recogerNombres());
console.log(salida)
