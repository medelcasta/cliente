document.getElementById("crear").addEventListener("click", crear);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("consultar").addEventListener("click", consultar);
document.getElementById("eliminar").addEventListener("click", eliminar);


//Session Storage
// function crear(){
//     sessionStorage.setItem("usuario1", "Aurora");
//     sessionStorage.setItem("usuario2", "Nico");
// }

// //
// function consultar(){
//     let valor = sessionStorage.getItem("usuario1");
//     let valor2 = sessionStorage.getItem("usuario2");
//     //alert(valor);
//     document.getElementById("resultado").innerHTML = valor + " y " + valor2;
// }

// function modificar(){
//     sessionStorage.setItem("usuario1", "Aurorita");
// }

// function eliminar(){
//     sessionStorage.removeItem("usuario1");
// }


// function crear(){
//     localStorage.setItem("usuario1", "Aurora");
//     localStorage.setItem("usuario2", "Nico");
// }

// //
// function consultar(){
//     let valor = localStorage.getItem("usuario1");
//     let valor2 = localStorage.getItem("usuario2");
//     //alert(valor);
//     document.getElementById("resultado").innerHTML = valor + " y " + valor2;
// }

// function modificar(){
//     localStorage.setItem("usuario1", "Aurorita");
// }

// function eliminar(){
//     localStorage.removeItem("usuario1");
// }

function crear(){
    document.cookie = "usuario=Aurora; expires=Thu, 6 Feb 2025 12:00:00 UTC; path=/";
}

//
function consultar(){
    alert(`La variable usuario tiene almacenada ${document.cookie}`);
}

function modificar(){
    document.cookie="usuario=Modificado; expires=Thu, 6 Feb 2025 12:00:00 UTC, path=/";
}

function eliminar(){
    document.cookie = "usuario=Aurora; expires=Mon, 3 Feb 2025 01:00:00 UTC; 6 Feb 2025 01:00:00 UTC; path=/";
}