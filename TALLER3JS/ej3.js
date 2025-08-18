function contarPares(arreglo) {
    let contador = 0;

    // Recorremos cada número del arreglo
    for (let num of arreglo) {
        if (num % 2 === 0) { // Si el número es divisible entre 2
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Cantidad de números pares: ${contarPares(numeros)}`);
