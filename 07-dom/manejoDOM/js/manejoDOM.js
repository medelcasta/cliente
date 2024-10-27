console.log("Manejo elementos DOM");
/*
.createElement(tag, options); //Crear y va a devolver un elemento HTML
.createComment(text); //Crear y devuelve un nodo de comentarios HTML <!--text-->
.createTextNode(text); //Crea y devuelve un nodo HTML con el texto text
.cloneNode(deep);//Clona el nodo HTML y devuelve una copia. deep se enciva false por defecto
.isConnected; //Indica si el nodo HTML ya esta insertado
*/

let elemento = document.getElementById('boton1');
elemento.addEventListener('click', incluyoElemento);
elemento.addEventListener('dbclick', incluyoElemento);

function incluyoElemento(){
    //crear un nuevo div y vamos a añadirle nuevo contenido
    let nuevoDiv = document.createElement("div");
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV");
    nuevoDiv.appendChild(nuevoContenido);
    console.log(nuevoDiv)

    //Añadir este nuevo elemento a la sección a la que lo queremos añadir
    let seccionActual = document.getElementById('seccionDivsAIncluir');
    //insertBefore(newNode, referenceNode);
    //document.body.insertBefore(nuevoDiv, seccionActual);
    //otra opcion añadirlo como hijo a mi seccionactual
    seccionActual.appendChild(nuevoDiv);
}
let elemento2 = document.getElementById('boton2');
elemento2.addEventListener('click', incluyoElemento2);

function incluyoElemento2(){
    //creamos un nuevo div y añadimos su contenido
    //createElement(tagName);
    let nuevoDiv = document.createElement("div");
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV");
    nuevoDiv.appendChild(nuevoContenido);

    //Añadimos el elemento aue hemos creado y su contenido
    let actualDiv = document.getElementById("divAIncluir");
    actualDiv.innerHTML+=nuevoDiv.outerHTML;

}

let elemento3 = document.getElementById('boton3');
elemento3.addEventListener('click', incluyoElemento3);

function incluyoElemento3(){
    //creamos un nuevo div, asignaremos estilos y añadimos su contenido
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style.background = 'blue';
    nuevoDiv.style.color = 'white';
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV");
    nuevoDiv.appendChild(nuevoContenido);

    console.log("estoy aqui");
    //Añadimos el elemento que hemos creado y su contenido
    let actualDiv = document.getElementById("divAIncluir2");
    actualDiv.appendChild(nuevoDiv);
}

/*quiero asingarle options
Object.assifn(target, source1);

const element = Object.assign(document.createElement("h1"), {className:"rojo", textContent:"red"});
document.body.appendChild(elem);

*/
let elemento4 = document.getElementById('boton4');
elemento4.addEventListener('click', incluyoElementoOptions);

function incluyoElementoOptions(){
    //creamos un nuevo div y añadimos su contenido
    const nuevoDiv = Object.assign(document.createElement("h1"), {className:"rojo", textContent:"Clase roja: "});
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV");
    nuevoDiv.appendChild(nuevoContenido);

    //Añadimos el elemento que hemos creado y su contenido
    let actualSeccion = document.getElementById("seccionDivsAIncluir2");
    actualSeccion.appendChild(nuevoDiv, actualSeccion);
}

let elemento5 = document.getElementById("reemplazoChild");
elemento5.addEventListener('click', reemplazoChild);
function reemplazoChild(){
   // const listItem = document.querySelector("li:last-child");
    

    //OPCION 2 RECUPERO EL ARRAY DE ELEMENTOS DE LA LISTA
    let listItems = document.querySelectorAll("li:last-child");
    console.log("Numero de elementos: " + listItems.length);

    let listItem = listItems[listItems.length - 1];
    console.log(listItem);
    let nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = '<a href="#">Productos</a>';

    listItem.parentNode.replaceChild(nuevoItem, listItem);
}

function agregarDivConEnlaceEImagen(){
    //Pedir al usuario el URL de la imagen y el enlace
    let urlImagen = prompt("Por favor, introduce la URL de la imagen" , "./img/foto1.jpg");
    let urlEnlace = prompt("Por favor, introduce la URL del enlace" , "https://www.ejemplo.com");

    //crear un nuevo div
    let nuevoDiv = document.createElement("div");

    //Crear un nuevo enlace
    let enlace = document.createElement("a");
    enlace.href = urlEnlace; //URL del enclace introducido
    enlace.textContent = "Informacion adicional";

    //Creamos una imagen
    let imagen = document.createElement("img");
    imagen.src = urlImagen; //URL de la imagen introducida por el usuario
    imagen.alt = "Imagen dinamica" //texto alternativo de la imagen
    imagen.style.width = "100px"; //ancho de la imagen
    imagen.style.height = "100px"; //altura de la imagen

    //agregar el enlace y la imagen al div
    nuevoDiv.appendChild(enlace);
    nuevoDiv.appendChild(imagen);

    //Agregar el nuevo div a la seccion especifica
    let seccion = document.getElementById("seccionDivAIncluir2");
    seccion.appendChild(nuevoDiv);

}
