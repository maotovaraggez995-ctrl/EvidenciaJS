function convertirMayusculas(arreglo) {
    return arreglo.map(nombre => nombre.toUpperCase());
}

// Ejemplo de uso
const nombres = ["Mauro", "Ana", "Luis"];
console.log(convertirMayusculas(nombres)); // ["MAURO", "ANA", "LUIS"]
