const btnClickMe = document.getElementById("clickMe");
const btnRemoveEvent = document.getElementById("removeEvent");

function mostrarAlerta() {
  alert("¡Botón clickeado!");
}

btnClickMe.addEventListener("click", mostrarAlerta);

btnRemoveEvent.addEventListener("click", () => {
  btnClickMe.removeEventListener("click", mostrarAlerta);
  alert("Evento eliminado: ahora el botón 'Click Me' ya no hace nada.");
});
