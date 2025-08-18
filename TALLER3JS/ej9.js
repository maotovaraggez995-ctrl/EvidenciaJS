function indiceValor(arreglo, valor) {
    return arreglo.indexOf(valor);
}

// Ejemplo de uso
const numeros = [10, 20, 30, 40, 50];
console.log(indiceValor(numeros, 30)); // 2
console.log(indiceValor(numeros, 100)); // -1 si no encuentra el valor
