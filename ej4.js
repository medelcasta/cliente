let mitabla = document.getElementById("btnGenerarTabla");
mitabla.addEventListener('click', creoTabla);

function creoTabla() {
    let tam = 4;

    let seccionTabla = document.getElementById("seccionTabla");

    let nuevaTabla = document.createElement("table");
    nuevaTabla.classList.add("miTabla");
    nuevaTabla.id = "miTabla";
    let tablaBody = document.createElement("tbody");

    // nuevaTabla.style.width = "100%";
    nuevaTabla.setAttribute("border", 1);
    nuevaTabla.style.width = "200px";
    nuevaTabla.style.height = "100px";

    for (let i = 0; i < tam; i++) {
      let fila = document.createElement("tr");

      for (let j = 0; j < tam; j++) {
        let celda = document.createElement("td");

        celda.innerHTML = "";

        celda.onclick = function () {
          cambiaCelda(this);
        };
        fila.appendChild(celda);
        // añado la celda que acabo de crear a la fila que estoy construyendo
      }
      tablaBody.appendChild(fila);
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla);
  }

let tdsOptima = document.querySelectorAll("td");
// let imag = createElement('img');
// imag.src = "./img/foto1.png";
for (i=0; i<tdsOptima.length; i++){
    console.log("cambiossss")
    tdsOptima[i].onclick = function(){
        cambiaCelda(this);
    };
  }

let celda = document.getElementsByTagName('td');
//en lugar de hacerlo asi deberia haber creado un array con imagenes no?
function cambiaCelda(celda) {
    let imag = createElement('img');
    imag.src = "./img/foto1.png";
    switch (imag.src) {
      case "img/foto1.jpg":
        imag.setAttribute("src", "img/foto2.jpg");
        document.querySelectorAll("button")[0].removeAttribute("disabled", "");
        break;
      case "img/foto2.jpg":
        imag.setAttribute("src", "img/foto3.jpg");
        break;
      case "img/foto3.jpg":
        imag.setAttribute("src", "img/foto4.jpg");
        break;
      default:
        imag.setAttribute("src", "img/foto5.jpg");
    }
};