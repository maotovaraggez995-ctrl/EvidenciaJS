const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Soy un nuevo div";

const divOriginal = document.querySelector("div");

divOriginal.parentNode.replaceChild(nuevoDiv, divOriginal);

console.log("El div original fue reemplazado por:", nuevoDiv.textContent);
