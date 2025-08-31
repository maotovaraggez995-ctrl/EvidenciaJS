// Clase padre
class Persona {
  constructor(identificacion, nombre, correo) {
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.correo = correo;
  }
}

// Clase hija Aprendiz
class Aprendiz extends Persona {
  constructor(identificacion, nombre, correo, puntajeIcfes) {
    super(identificacion, nombre, correo); // hereda atributos de Persona
    this.puntajeIcfes = puntajeIcfes;
  }

  info() {
    return `Aprendiz: ${this.nombre}, ID: ${this.identificacion}, Correo: ${this.correo}, Puntaje ICFES: ${this.puntajeIcfes}`;
  }
}

// Clase hija Instructor
class Instructor extends Persona {
  constructor(identificacion, nombre, correo, especialidad) {
    super(identificacion, nombre, correo);
    this.especialidad = especialidad;
  }

  info() {
    return `Instructor: ${this.nombre}, ID: ${this.identificacion}, Correo: ${this.correo}, Especialidad: ${this.especialidad}`;
  }
}

//  PRUEBAS 
const aprendiz1 = new Aprendiz("123", "César", "cesar@mail.com", 350);
console.log(aprendiz1.info());

const instructor1 = new Instructor("456", "Mauro", "mauro@mail.com", "Programación");
console.log(instructor1.info());


// Parte 2: ANIMAL

// Clase padre
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return `${this.nombre} hace un sonido`;
  }
}

// Clase hija Perro
class Perro extends Animal {
  hacerSonido() {
    return `${this.nombre} ladra: ¡Guau guau!`;
  }
}

// Clase hija Gato
class Gato extends Animal {
  hacerSonido() {
    return `${this.nombre} maúlla: ¡Miau!`;
  }
}

// ------------------ PRUEBAS ------------------
const perro1 = new Perro("Firulais");
console.log(perro1.hacerSonido());

const gato1 = new Gato("Michi");
console.log(gato1.hacerSonido());
