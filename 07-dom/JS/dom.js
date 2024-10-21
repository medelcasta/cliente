function inicioDOM(){
   console.log("Dom cargado");

   document.body.style.background = 'pink';

   //document.getElementById
   let titulo = document.getElementById("title");
   //objeto en si
   console.log(titulo);

   //contenido de la etiqueta 
   console.log(titulo.innerHTML);

   console.log(titulo.textContent);
   console.log(titulo.textContent.length);
}