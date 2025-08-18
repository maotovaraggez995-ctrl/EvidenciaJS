function invertirArregloManual(arreglo) {
    let invertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);
    }
    return invertido;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(invertirArregloManual(numeros)); // [5,4,3,2,1]
