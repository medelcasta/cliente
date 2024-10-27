console.log("Aplicación Calculadora");

let botonSumar = document.getElementById('btn_sumar'); //recogo el elemento del dom con su id
botonSumar.addEventListener('click', sumar);

function sumar(){
    let formu = document.getElementById('formulario') //recuperamos la informacion del formulario
    console.log(formu);
//A traves del nombre recuperamos los valores
    let opA = formu['opA'];
    let opB = formu['opB'];
    console.log(opA);
    console.log(opB);
    //Atacamos a su value
    console.log('Operando A: '+ opA.value);
    console.log('Operando B: '+ opB.value);

    let resultado = parseInt(opA.value) + Number(opB.value);
    //control de errores
    let elemento = document.getElementById('resultado');
    if(isNaN(resultado)){
        elemento.innerHTML = `Datos introducidos no numericos`;

        //opcion 1 para cambiar estilos
        //elemento.style.background = 'red';
        //elemento.style.color = 'white';

        //opcion 2 trabajando directamente con las clases
        //vamos a eliminar 
        if(elemento.classList.contains('normal')){
            elemento.classList.remove('normal');
        }
        elemento.classList.add('alerta')
    }else{
        elemento.innerHTML = `El resultado de la suma es: ${resultado}`;

        //opcion 1
        //elemento.style.background = 'green';
        //elemento.style.color = 'white';
        //opcion 2
        if(elemento.classList.contains('alerta')){
            elemento.classList.remove('alerta');
        }
        elemento.classList.add('normal');
        //tenemos tambien replace(oldClass, newClass)

        let estilo = window.getComputedStyle(elemento);
        console.log("El background actual es: " + estilo.getPropertyValue('background'))
    }

    //opcion 2 - recorro el array
    console.log("Recorro el array de formulario");
    let formulario = document.forms["formulario"];
    console.log(formulario);
    let texto = "";
    for(let elemento of formulario){
        console.log("Elemento: " + elemento); //accedemos a cada uno de los inputs
        texto += elemento.value + "<br>";
    }
    console.log(texto);
    document.getElementById('resultado2').innerHTML = texto;
}
