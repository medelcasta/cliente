let miparrafo = document.getElementById("parrafo");

miparrafo.addEventListener("click", cambiar);

function cambiar() {
    if (this.className === "uno") {
        this.className = "dos";
    } else {
        this.className = "uno";
    }
}
