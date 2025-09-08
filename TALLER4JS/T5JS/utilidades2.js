export function categoriaIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

export function nivelRiesgo(edad, tieneEnfermedades) {
  if (edad > 60 || tieneEnfermedades) {
    return "Alto riesgo";
  } else if (edad >= 40 && edad <= 60 && tieneEnfermedades === false) {
    return "Riesgo moderado";
  } else {
    return "Bajo riesgo";
  }
}
