/*
    a) Contar el numero de enlaces de la pagina 
    b) Indicar a qué enlace apunta el penúltimo enlace de la página
    c) Indicar cuantos enlaces apuntas a la url: http://prueba
    d) Número de enlaces del 3er párrafo. 
*/
//opcion 1 CARGA CUANDO QUIERO EJECUTAR ALGO QUE NO TIENE QUE VER CON EL USUARIO
//FUNCION ANONIMA


//DIRECTAMENTE CON EL ALERT
// document.addEventListener("DOMContentLoaded", alert("MI DOM CARGADO"))

// document.addEventListener("DOMContentLoaded", domCargado);
// function domCargado(){
//     alert("Dom cargado. ");

//     contarParrafos();
// }
//opcion 1
document.addEventListener("DOMContentLoaded", () => {
    alert("DOM cargado");

    let texto = "";

    //WINDOW ES UN OBJETO DE VENTANA ASOCIADO AL BOM(BROWSER OBJECT MODEL)
    //ES EL EQUIVALENTE AL OBJETO DOCUMENT EN DOM
    //LO VAMOS A USAR PARA SACAR COOKIES, LOCATION, (LOCALSTORAGE, SESSIONSTORAGE (PARA WEB-STORAGE))
    //cookieEnabled nos devuelve si las cookies estan admitidas o no 
    //navigator = es del navegador 
    //window.navigator.cookieEnabled esta en desuso
    if(window.cookieEnabled){
        texto = "Cookies habilitadas:)";
    }else{
        texto = "Cookies estan inhabilitadas";
    }

    alert(texto);
    //alert(window.location); //ruta donde se encuentra el archivo
    alert(`Tamaño de la ventana: Altura: ${window.innerHeight}, Anchura: ${window.innerWidth}`);

});

// objeto window
// El objeto window representa la ventana que contiene un documento DOM; 
// la propiedad document apunta al DOM document cargado en esa ventana.

// https://developer.mozilla.org/es/docs/Web/API/Window
// Window.innerHeight: Obtiene la altura del area de contenido del navegador incluyendo, 
// si es interpretado, la barra de deslizado.
// window.innerWidth: Obtiene el ancho del area de contenido de la ventana del navegador,
// si es interpretado, la barra de deslizado vertical.
// Window.location: Obtiene/fija la location, o URL actual, del objeto de la ventana.
// Window.navigator: Returns a reference to the navigator object.
// Window.sessionStorage: Returns a reference to the session storage object used to store
// data that may only be accessed by the origin that created it.
// Window.localStorage: Retorna una referencia al objeto almacenamiento local usado para
// almacenar datos que pueden ser de accedidos por el origen que los creo.


//opcion 2 -onload

window.addEventListener("load", contarEnlaces);

// function contarEnlaces(){
//     let parrafos = document.getElementsByTagName("a");
//     alert(parrafos.length);
// }

function contarEnlaces(){
    let info = document.getElementById("informacion");
    // numero de enlaces
    let numEnlaces = document.getElementsByTagName("a");
    console.log(numEnlaces);
    info.innerHTML = "El numero de enlaces es: " + numEnlaces.length;

    // direccion del penultimo enlace
    info.innerHTML += "<br>La direccion del ultimo enlace es: " + numEnlaces[numEnlaces.length-2].href;
    let contador = 0;
    for(let i = 0; i< numEnlaces.length; i++){
        if(numEnlaces[i].href == "http://prueba/"){
            contador++;
        }
    }
    info.innerHTML += "<br>El numero de enlaces apuntas a la url: " + contador;
    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName("a");

    info.innerHTML += "<br>Enlaces del parrafo 3: " + enlaces.length;
}