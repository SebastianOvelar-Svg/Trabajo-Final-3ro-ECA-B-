let boton = document.getElementById("miBoton");
let contador = document.getElementById("contador");

let clics = 0;

boton.addEventListener("click", function() {
    clics++;
    contador.value = clics + " clics"; // Usa .value porque es un input
});
