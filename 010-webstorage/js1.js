document.getElementById("incrementar").addEventListener("click", incrementar);
document.getElementById("consultar").addEventListener("click", consultar);
document.getElementById("decrementar").addEventListener("click", decrementar);
document.addEventListener("DOMContentLoaded", crear);

let contador = 0;

function crear(){
    let valorGuardado = sessionStorage.getItem("contador");
    if (valorGuardado !== null) {
        contador = parseInt(valorGuardado);
    } else {
        sessionStorage.setItem("contador", contador);
    }
}

function incrementar(){
    contador += 1;
    sessionStorage.setItem("contador", contador);
}

function decrementar(){
    contador -= 1;
    sessionStorage.setItem("contador", contador);
}

function consultar(){
    let contador = sessionStorage.getItem("contador");
    document.getElementById("resultado").innerHTML = contador;
}
