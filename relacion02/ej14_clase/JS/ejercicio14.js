console.log("cargado");
let listadoPrincipal = document.querySelectorAll('li');

let pulsado0 = false;
let pulsado1 = false;
let pulsado2 = false;

listadoPrincipal[0].onclick = function(){
    if(!pulsado0){
        pulsado0 = true;

        if(pulsado1){
            listadoPrincipal[1].lastChild.remove();
            pulsado1 = false;
        }
        if(pulsado2){
            listadoPrincipal[2].lastChild.remove();
            pulsado2 = false;
        }

        let datosInicio = ["Portada", "Acerca de Mi", "Mis Fotos"];

        let listaInicio = document.createElement("ul");
        for(let i = 0; i < datosInicio.length; i++){
            let item = document.createElement('li');
            item.innerHTML = datosInicio[i];
            listaInicio.appendChild(item)
        }

        listadoPrincipal[0].appendChild(listaInicio)
    }else{
       listadoPrincipal[0].lastChild.remove();
       pulsado0 = false;
    }



};

listadoPrincipal[1].onclick = function(){
if(!pulsado1){
    pulsado1 = true;

    if(pulsado0){
        listadoPrincipal[0].lastChild.remove();
        pulsado0 = false;
    }
    if(pulsado2){
        listadoPrincipal[2].lastChild.remove();
        pulsado2 = false;
    }

    let datosInicio = ["Portada", "Acerca de Mi", "Mis Fotos"];

    let listaInicio = document.createElement("ul");
    for(let i = 0; i < datosInicio.length; i++){
        let item = document.createElement('li');
        item.innerHTML = datosInicio[i];
        listaInicio.appendChild(item)
    }

    listadoPrincipal[1].appendChild(listaInicio)
}else{
   listadoPrincipal[1].lastChild.remove();
   pulsado1= false;
}


};

listadoPrincipal[2].onclick = function(){
    if(!pulsado2){
        pulsado2 = true;
    
        if(pulsado0){
            listadoPrincipal[0].lastChild.remove();
            pulsado0 = false;
        }
        if(pulsado1){
            listadoPrincipal[1].lastChild.remove();
            pulsado1 = false;
        }
    
        let datosInicio = ["Portada", "Acerca de Mi", "Mis Fotos"];
    
        let listaInicio = document.createElement("ul");
        for(let i = 0; i < datosInicio.length; i++){
            let item = document.createElement('li');
            item.innerHTML = datosInicio[i];
            listaInicio.appendChild(item)
        }
    
        listadoPrincipal[2].appendChild(listaInicio)
    }else{
       listadoPrincipal[2].lastChild.remove();
       pulsado2= false;
    }
    
    
    };