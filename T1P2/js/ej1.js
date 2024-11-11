let botonAgregar = document.getElementById("btnAgregar");
botonAgregar.addEventListener('click', agregar);

let botonBorrar = document.getElementById("btnBorrar");
botonBorrar.addEventListener('click', borrar)

function agregar(){
    let dinamica = document.getElementById("listaDinamica");
    let lista = document.createElement('li');
    let enlace = document.createElement('a');
    enlace.textContent = prompt("Introduce el titulo");
    enlace.href = prompt("Introduce la url", "http://www.ejemplo.com");

    lista.appendChild(enlace);
    dinamica.appendChild(lista);


}


function borrar(){
    let elemento = document.getElementById("listaDinamica");
    elemento.innerHTML = "";
}


