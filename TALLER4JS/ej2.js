class Estudiante {
  constructor(nombre, materias) {
    this.nombre = nombre;
    this.materias = materias; // Array de materias
  }

  listarMaterias() {
    console.log(`Materias de ${this.nombre}:`);
    this.materias.forEach((materia, index) => {
      console.log(`${index + 1}. ${materia}`);
    });
  }
}

// Ejemplo de uso
const estudiante1 = new Estudiante("Mauro", ["Frontend", "SST", "Bases de Datos"]);
estudiante1.listarMaterias();
