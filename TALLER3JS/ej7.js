function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

// Ejemplo de uso
const numeros = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(numeros)); // [1,2,3,4,5]
