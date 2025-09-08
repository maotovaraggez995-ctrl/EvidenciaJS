import Alcancia from "./alcancia.js";

let miAlcancia = null;

const crearAlcancia = () => {
    miAlcancia = new Alcancia();
};

const actualizarDatosInterface = () => {
    document.querySelector("#txtMonedas200").value = miAlcancia.moneda200;
    document.querySelector("#txtMonedas500").value = miAlcancia.moneda500;
    document.querySelector("#txtMonedas1000").value = miAlcancia.moneda1000;
    document.querySelector("#txtTotalAlcancia").value = miAlcancia.calcularTotalAhorrado();
};

// Event listeners para agregar monedas
document.querySelector("#img200").addEventListener("click", () => {
    miAlcancia.agregarMoneda200();
    actualizarDatosInterface();
});

document.querySelector("#img500").addEventListener("click", () => {
    miAlcancia.agregarMoneda500();
    actualizarDatosInterface();
});

document.querySelector("#img1000").addEventListener("click", () => {
    miAlcancia.agregarMoneda1000();
    actualizarDatosInterface();
});

// Event listener para romper la alcancía
document.querySelector("#btnRomper").addEventListener("click", () => {
    let romper = confirm("¿Está seguro de romper la Alcancia?");
    if (romper) {
        alert("La alcancia quedará vacía.");
        inicializarAlcancia();
    }
});

const inicializarAlcancia = () => {
    crearAlcancia();
    actualizarDatosInterface();
};

inicializarAlcancia();