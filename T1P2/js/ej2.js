//get elements by class name 
//queryselector all

function modificacion(C){
    console.log("estoy aqui")
    let limpio = document.getElementsByClassName("limpiar") 
    // pulsada(C).style.backgroundColor = "orange";
    for(let i = 0; i< limpio.length; i++){
        limpio[i].style.backgroundColor = "red";
    }
}

function marcaDeNumeros(){
    console.log("estoy aqui 2")
    let num = document.getElementsByClassName("numero") 
    let dote = document.getElementsByClassName("punto");
    // pulsada(C).style.backgroundColor = "orange";
    for(let i = 0; i< num.length; i++){
        num[i].style.backgroundColor = "grey";
        num[i].style.color = "white";
    }

    for(let i = 0; i< dote.length; i++){
        dote[i].style.backgroundColor = "grey";
        dote[i].style.color = "white";
    }
}


function marcaDeOperadores(){
    console.log("estoy aqui 2")
    let op = document.getElementsByClassName("operador") 
    let igual = document.getElementsByClassName("igual");
    // pulsada(C).style.backgroundColor = "orange";
    for(let i = 0; i< op.length; i++){
        op[i].style.backgroundColor = "yellow";
        // igual[i].style.backgroundColor = "yellow";
    }
    for(let i = 0; i< igual.length; i++){
        // op[i].style.backgroundColor = "yellow";
        igual[i].style.backgroundColor = "yellow";
    }
}
let reseteo = document.getElementById("resetear");
reseteo.addEventListener('click', resetear);

function resetear(){
    console.log("resetttt")
    let limpio = document.getElementsByClassName("limpiar")     
    for(let i = 0; i< limpio.length; i++){
        limpio[i].style.backgroundColor = "#FF7C87";
    }

    let num = document.getElementsByClassName("numero") 
    let dote = document.getElementsByClassName("punto");
    // pulsada(C).style.backgroundColor = "orange";
    for(let i = 0; i< num.length; i++){
        num[i].style.backgroundColor = "white";
        num[i].style.color = "grey";
    }

    for(let i = 0; i< dote.length; i++){
        dote[i].style.backgroundColor = "white";
        dote[i].style.color = "grey";
    }

    let op = document.getElementsByClassName("operador") 
    let igual = document.getElementsByClassName("igual");
    // pulsada(C).style.backgroundColor = "orange";
    for(let i = 0; i< op.length; i++){
        op[i].style.backgroundColor = "#FFDAB9";
        // igual[i].style.backgroundColor = "yellow";
    }
    for(let i = 0; i< igual.length; i++){
        // op[i].style.backgroundColor = "yellow";
        igual[i].style.backgroundColor = "#F1FF92";
    }
}