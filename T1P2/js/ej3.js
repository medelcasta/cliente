let btnAgregar = document.getElementById("btnAgregarDivImagen");
btnAgregar.addEventListener('click', agregarDiv);

function agregarDiv(){
    console.log("estoy")
    let seccion = document.getElementById("seccionDinamica");
    let miDiv = document.createElement('div');
    let parrafo = document.createElement('h2');
    parrafo.textContent = prompt("Introduce el titulo");
    let ruta = document.createElement('img');
    ruta.src = prompt("Introduce la ruta de la imagen", "./img/foto1.png")

    let enlace = document.createElement('a');
    enlace.href = prompt("Introduce el enlace", "http://www.ejemplo.com")
    enlace.textContent = "Ver Mas";

    miDiv.appendChild(parrafo);
    miDiv.appendChild(ruta);
    miDiv.appendChild(enlace);

    seccion.appendChild(miDiv);

}

let btnReseteo = document.getElementById("btnResetearSeccion");
btnReseteo.addEventListener('click', borrar);

function borrar(){
    console.log("borrar")
    let midiv = document.querySelector('div');
    midiv.remove();
}