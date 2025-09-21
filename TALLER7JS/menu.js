const botones = document.querySelectorAll("button");
const visor = document.getElementById("visor");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const url = boton.getAttribute("data-url");
    visor.src = url; 
  });
});
