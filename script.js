let boton = document.getElementById("miBoton");
let contador = document.getElementById("contador");
let imagen = document.getElementById("arnold-img");

let clics = 0;

boton.addEventListener("click", function() {
  clics++;
  contador.value = clics + " clics 💪";

  // Efecto visual: la imagen crece levemente al hacer clic
  imagen.style.transform = "scale(1.1)";
  setTimeout(() => {
    imagen.style.transform = "scale(1)";
  }, 200);
});

