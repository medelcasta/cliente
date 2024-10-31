console.log("javascript");

let creaAnuncio = document.getElementById("incluyeAnuncio");

creaAnuncio.addEventListener("click", incluirAnuncio);

function incluirAnuncio(){
    //Pedir al usuario la direccion de la imagen y el enlace 
    //que vamos a añadir

    let pathImg = prompt("Direccion de la imagen: ", "./img/foto1.jpg");
    let urlEnlace = prompt("URL del enlace: ", "https://www.marca.es");


    //Crear un div
    let nuevoHijo = document.createElement("div");

    //Creo el enlace
    let enlace = document.createElement("a");
    enlace.href = urlEnlace;
    enlace.textContent = prompt("Dime el texto del enlace: ");

    //creo la imagen
    let imagen = document.createElement("img");
    imagen.src = pathImg;
    imagen.alt = "Imagen alternativo";
    imagen.style.width = "100px";
    imagen.style.height = "100px";

    //Agregar a nuestro hijo (div)
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);

    let seccion = document.getElementById("seccionArticles");
    seccion.appendChild(nuevoHijo)
}

//Añadir un articulo 
let creaArticulo = document.getElementById("incluyeArticulo");
creaArticulo.addEventListener("click", incluirArticulo);

function incluirArticulo(){
    //pido al usuario titulo, descripcion, fecha y una categoria
    let titulo = prompt("Dime el titulo del articulo");
    let descripcion = prompt("Dime la descripcion");
    let fechaArticulo = prompt("Dime la fecha de publicacion del articulo");
    let catArticulo = prompt("Dime la categoria del articulo");

    let nuevoArticulo = document.createElement("article");
    nuevoArticulo.classList.add("articles__article");

    nuevoArticulo.innerHTML = `<div class="article__datos">
                                    <span>${fechaArticulo}</span>
                                    <span>${catArticulo}</span>
                                </div>`;
    
    let nuevoSubtitulo = document.createElement("h4");
    nuevoSubtitulo.classList.add("article__subtitle");
    nuevoSubtitulo.innerHTML = `<a href="#">${titulo}</a>`;

    let nuevoP = document.createElement("p");
    nuevoP.textContent = descripcion;

    nuevoArticulo.appendChild(nuevoSubtitulo);
    nuevoArticulo.



}