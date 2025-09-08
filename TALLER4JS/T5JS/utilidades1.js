export function enRango(numero) {
  if (numero >= 10 && numero <= 50) {
    return "Está en el rango";
  } else {
    return "Fuera del rango";
  }
}

export function calcularDescuento(precio) {
  if (precio > 1000) {
    return precio * 0.8; 
  } else if (precio >= 500 && precio <= 1000) {
    return precio * 0.9; 
  } else {
    return precio; 
  }
}
