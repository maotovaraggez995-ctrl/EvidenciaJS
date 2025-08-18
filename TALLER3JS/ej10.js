function reemplazarElemento(arreglo, valorAntiguo, valorNuevo) {
    return arreglo.map(elemento => elemento === valorAntiguo ? valorNuevo : elemento);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 2, 4];
console.log(reemplazarElemento(numeros, 2, 99)); // [1, 99, 3, 99, 4]
