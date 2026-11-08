// Seleccionamos el boton
let botonModo = document.getElementById("modo");

// Cuando hacemos clic, cambiamos el tema
botonModo.addEventListener("click", function() {

    document.body.classList.toggle("oscuro");

    // Cambiamos el simbolo del boton
    if (document.body.classList.contains("oscuro")) {
        botonModo.textContent = "☀";
    } else {
        botonModo.textContent = "☾";
    }

});