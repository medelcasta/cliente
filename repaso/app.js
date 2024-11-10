let boton = document.getElementById("boton");
boton.addEventListener('click', anadirdiv);

function anadirdiv(){
    let divisor = document.getElementById("primerdiv");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.innerHTML = prompt("Introduce texto: ");
    divisor.appendChild(nuevoDiv)
    nuevoDiv.style.backgroundColor = 'red';
    nuevoDiv.style.fontSize = '50px';
}