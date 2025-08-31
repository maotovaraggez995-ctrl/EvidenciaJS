class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

// Ejemplo de uso
const circulo1 = new Circulo(5);
console.log(`El área del círculo de radio ${circulo1.radio} es: ${circulo1.calcularArea().toFixed(2)}`);
