function inicioDOM(){
   console.log("Dom cargado");

   document.body.style.background = 'cyan';

   //document.getElementById
   let titulo = document.getElementById("title");
   //objeto en si
   console.log(titulo);

   //contenido de la etiqueta 
   console.log(titulo.innerHTML);
   console.log(titulo.textContent);

   //tamaño del contenido de la etiqueta
   console.log(titulo.textContent.length);

   //getElementsByName
   let up_name = document.getElementsByName("up");
   console.log(up_name[0]);
   console.log(up_name[1]);
   console.log(up_name[0].tagName);
   console.log(up_name[1].tagName);

   //getElementsByTagName
   let parrafos = document.getElementsByTagName("p"); //se pone entre () el tipo de etiqueta
   console.log(parrafos);
   console.log(`Numero de parrafos que tengo: ${parrafos.length}`);

   //recorrer y mostrar los parrafos
   for(let i =0; i <parrafos.length; i++){
      if(i == 3){
         parrafos[i].innerHTML = "Parrafo Cambiado";
      }
      console.log(`Parrafo ${i+1}: ${parrafos[i].innerHTML}`);

   }
   console.log("-----------------------------");
   //Document.getElementByClassName()
   parrafos = document.getElementsByClassName("parrafo1");
   console.log(parrafos)
   console.log(`Numero de parrafos que tengo: ${parrafos.length}`);
   for(let i = 0; i <parrafos.length; i++){
      if(i == 3){
         parrafos[i].innerHTML = "Parrafo Cambiado";
      }
      console.log(`Parrafo ${i+1}: ${parrafos[i].innerHTML}`);
   }

   console.log("-----------------------------");
   //querySelector() nos devuelve la primera ocurrencia = que el elemento del ElementById
   let parrafo1 = document.querySelector("p.parrafo1");
   console.log(parrafo1);
   let titulos = document.getElementById("parrafo1");
   console.log(titulos);

   parrafo1 = document.querySelector(".projects p");
   console.log(parrafo1);

   parrafo1 = document.querySelector("projects");

   //querySelectorAll() array vacio si no encuentro nada array con cosas si si
   let elementos = document.querySelectorAll("p.parrafo1");
   for(let i = 0; i <parrafos.length; i++){
      console.log(`Elemento ${i+1}: ${parrafos[i].innerHTML}`);
   }
   
   //Selecciono el DOM parcialmente
   let sectionProjects = document.getElementById('proyectos');

   console.log(sectionProjects);
   elementos = sectionProjects.querySelectorAll('p.parrafos1'); 
   console.log(`Número de elementos que tengo: ${elementos.length}`);
   for (let i=0; i<elementos.length; i++){
      console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
   }
         
}

let estado = false;
function color_cabecera(cabecera){
   // OPCION 1
   // if(estado){
   //    cabecera.style.color = 'red';
   //    estado = false;
   // }else{
   //    cabecera.style.color = 'black';
   //    estado = true;
   // }

   // OPCION 2 
   cabecera.style.color = (cabecera.style.color === 'red') ? 'black' : 'red';
}


//Vamos a modificar el titulo 2 
function color_subtitulo(cabecera){
   cabecera.style.color = (cabecera.style.color === 'pink') ? 'pink' : 'orange';

}

function color_subtitulo2(){
   let elemento = document.getElementById('subtitle');
   elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';

}

let elemento = document.getElementById('subtitle');
elemento.style.color = 'orange';
document.getElementById('subtitle').onclick = color_subtitulo2;

//opcion 1 llamada a eventos desde JS
// elemento.onclick = color_subtitulo(elemento);

elemento = document.getElementById('H3title');
elemento.style.color = 'green';
H3title.addEventListener('click', color_subtitulo3);
H3title.addEventListener('click', color_subtitulo3);

function color_subtitulo3(){
   let elemento = document.getElementById('H3title');
   elemento.style.color = (elemento.style.color === 'green') ? 'orange' : 'green';
}

 

let c1 = document.getElementById('caja1');
c1.addEventListener('click', cambioClase1);

let c2 = document.getElementById('caja2');
c2.addEventListener('click', cambioClase2);

function cambioClase1(){
   // c1.style.background = 'black';
   // c1.style.color = 'white';
   //classList nos da una lista de las clases que tiene el elemento
   //genera un array, nos permite mirar si la contiene. 
   if(c1.classList.contains('caja--negra')){
      c1.classList.remove('caja--negra');
      c1.classList.add('caja--roja');
   }else{
      c1.classList.remove('caja--roja');
      c1.classList.add('caja--negra');
   }
   
}
function cambioClase2(){
   if(c2.classList.contains('caja--negra')){
      c2.classList.remove('caja--negra');
      c2.classList.add('caja--roja');
   }else{
      c2.classList.replace('caja--roja', 'caja--negra');
   }
}

