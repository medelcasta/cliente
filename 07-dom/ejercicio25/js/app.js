console.log("Estoy");

let btnAgregarAntes = document.getElementById('btnAgregarAntes');
btnAgregarAntes.addEventListener('click', agregarAntes);

function agregarAntes(){
    let primerElem= document.getElementById('primerElemento');
    
    let nuevoElem= document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent=prompt("Introduce: ");

    primerElem.before(nuevoElem);

}


let btnAgregarDespues = document.getElementById('btnAgregarDespues');
btnAgregarDespues.addEventListener('click', agregarDespues);

function agregarDespues(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem= document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = prompt("Introduce: ");

    primerElem.after(nuevoElem);

}

let btnAgregarPrincipio = document.getElementById('btnAgregarPrincipio');
btnAgregarPrincipio.addEventListener('click', agregarPrincipio);

function agregarPrincipio(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem= document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = prompt("Introduce: ");

    primerElem.prepend(nuevoElem);

}

let btnAgregarAlFinal= document.getElementById('btnAgregarAlFinal');
btnAgregarAlFinal.addEventListener('click', agregarFinal);

function agregarFinal(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem= document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = prompt("Introduce: ");

    primerElem.append(nuevoElem);

}

let btnReemplazarElementos= document.getElementById('btnReemplazarElementos');
btnReemplazarElementos.addEventListener('click', remplazarElementos);

function remplazarElementos(){
    let primerElem = document.querySelector('ul')
    // let primerElem = document.getElementById('listaTareas');
    
    let nuevoElem= document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.id = 'primerElemento';
    nuevoElem.textContent = "REMPLAZADOSSSSS";

    primerElem.replaceChildren(nuevoElem);

}

let btnReemplazarElemento = document.getElementById('btnReemplazarElemento');
btnReemplazarElemento.addEventListener('click', remplazarElemento);

function remplazarElemento(){
    
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem= document.createElement('li');

    primerElem.replaceWith(nuevoElem);
    nuevoElem.classList.add('tarea');
    nuevoElem.id = 'primerElemento';
    nuevoElem.textContent = "REMPLAZO";

}

let btnEliminarElemento = document.getElementById('btnEliminarElemento');
btnEliminarElemento.addEventListener('click', eliminarElementos);

function eliminarElementos(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva Tarea al final";

    primerElem.remove(nuevoElem);

}


let reemplazarElemento1 = document.getElementById('reemplazarElemento1');
reemplazarElemento1.addEventListener('click', remplazarElementos1);

function remplazarElementos1(){
    let primerElem = document.querySelector('li');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "REMPLAZA 1º Tarea";

    primerElem.replaceWith(nuevoElem);

}

let eliminarElemento1 = document.getElementById('eliminarElemento1');
eliminarElemento1.addEventListener('click', eliminarElementos1);

function eliminarElementos1(){
    let primerElem = document.querySelector('li');
    primerElem.remove();
    
    let nuevoElem = document.createElement('li');
    nuevoElem.id = 'primerElemento';
}