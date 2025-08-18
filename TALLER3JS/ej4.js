function sumaYPromedio(arreglo) {
    // Verificar que el arreglo no esté vacío
    if (arreglo.length === 0) {
        return { suma: 0, promedio: 0 };
    }

    // Sumar todos los números
    let suma = 0;
    for (let num of arreglo) {
        suma += num;
    }

    // Calcular el promedio
    let promedio = suma / arreglo.length;

    return { suma, promedio };
}

// Ejemplo de uso
const numeros = [10, 20, 30, 40, 50];
const resultado = sumaYPromedio(numeros);
console.log(`Suma: ${resultado.suma}, Promedio: ${resultado.promedio}`);
