// Contenidos del DOM
elemento.nodeName;  string

// contenido solo texto
elemento.textContent; //devuelve string con el contenido del texto.
elemento.innerText; String. //(deprecado - Evitar)
elemento.outerText; String. //(deprecado - Evitar)

// contenido HTML.
elemento.innerHTML;
elemento.outerHTML;
elemento.setHTML(htmlCode, options); //inserta código HTML

// Obtención de Atributos
elemento.hasAttributes();  //--> boolean;  Indica si el elemento tiene ya atributos.
elemento.hasAttribute(attr); //--> boolean;  Indica si tiene el atributo que le pasamos como parámetro
elemento.getAttributeNames(); //devuelve un array con todos los atributos
elemento.getAttribute(attr); //Devuelve el valor del atributo attr del elemento o bien Null si no está.

{/* <img id="imagen" src="img/006-like.png" alt="imagen"></img>
const elemento=document.querySelector("#imagen");
elemento.hasAttributes(); true  --> 3 */}

{/* <input type="text" class="form-control" placeholder="Escribe operando B" id="operandoB" onchange="convertir(this)"/>
const elemento=document.querySelector("#operandoB");
elemento.hasAttribute("form-control"); true;
elemento.getAttributeNames(); devuelve un array con todos los atributos type class
elemento.getAttribute("form-control"); */}

// Modificar o eliminar atributos
elemento.setAttribute(attr, value); //Añade o modifica (si existe) el atributo attr.
elemento.toggleAttribute(attr, true); //Añade el attr si no existe, si existe lo elimina.
elemento.removeAttribute(attr); //elimina el atributo.

/*
Crear elementos en el DOM
.createElement(tag, options); // Crear y va a devolver un elemento HTML
.createComment(text); // Crear y devuelve un nodo de comentarios HTML <!-- text -->
.createTextNode(text); // Crea y devuelve un nodo HTML con el texto text.
.cloneNode(deep); // Clona el nodo HTML y devuelve una copia. deep se envía false por defecto
.isConnected; // Indica si el nodo HTML ya está insertado. 
*/

// Insertar elementos en el DOM - Api de Nodos
elemento.appendChild(node); //añade como hijo el nodo node.
elemento.removeChild(node);
elemento.replaceChild(nodo_old, nodo_new);
elemento.insertBefore(new_node, nodo); //inserta el nodo new antes de nodo y como hijo del nodo actual
elemento.insertBefore(new_node, null); //inserta nodo new después del último nodo hijo. Equivale a appendChild

// Api de elementos
elemento.before(); //Añade el nuevo elemento justo antes.
elemento.after(); //Añade el nuevo elemento justo después.
elemento.prepend(); //Añade el nuevo elemento justo antes del primer hijo.
elemento.append(); //Añade el nuevo elemento justo después del último hijo
elemento.replaceChildren(); //eliminar todos los hijos y los cambia por el nuevo elemento.
elemento.replaceWith(); //se sustituye el elemento por el nuevo.
elemento.remove(); //elimina el propio elemento.

// Ejemplo
{/* <div id="caja" class="element shine dark-theme"></div>
const caja = document.querySelector("#caja");

const elemento = document.createElement("div");
elemento.textContent="item insertado"; */}

// A) Insertamos antes de #caja
caja.before(elemento);
// B) Insertamos después de #caja
caja.after(elemento);
// C) Inserta antes del primer hijo de .container
caja.prepend(elemento);
// D) Inserta después del último hijo de .container
caja.append(elemento);


const elemento2 = document.createElement("div");
elemento2.textContent = "Nuevo Item hijo";
// E) Reemplaza por todos sus hijos
caja.replaceChildren(elemento2);
// F) El container es reemplazado por el nuevo item hijo
caja.replaceWith(elemento2);

// Navegar a través de los elementos
elemento.children; //devuelve la lista de los elementos HTML hijos
elemento.parentElement; //devuelve el padre del elemento o Null si no tiene padre.
elemento.firstElementChild; //devuelve el primer elemento hijo
elemento.lastElementChild; //devuelve el ultimo elemento hijo
elemento.previousElementSibling; //Devuelve el elemento hermano anterior o null si no lo tiene.
elemento.nextElementSibling; //Devuelve el hermano siguiente o null si no lo tiene.

// Animar los elementos del DOM - Web Animations
elemento.animate(keyframes, duration); //crea y aplica una animación CSS que dura duration segundos;
elemento.animate(keyframes, options); //crea y aplica una animación CSS con las opciones oportunas;


<button id="bontonSuma" type="submit" class="btn btn-primary mb-3" onclick='sumar()'>Sumar</button>

const elemento = document.querySelector("#botonSuma");

const keyframes = [
  { transform: "translate(0, 0)" },
  { transform: "translate(200px, 0)" },
  { transform: "translate(200px, 200px)" },
  { transform: "translate(0, 200px)"}
];

elemento.animate(keyframes, 4000);

// es equivalente esto a realizar en CSS
/*
@keyframes movimiento {
    0% { transform: translate(0, 0) }
    40% { transform: translate("200px", 0) }
    60% { transform: translate("200px", "200px") }
    80% { transform: translate(0, "200px") }
}*/