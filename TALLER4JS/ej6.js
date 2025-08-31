// Clase Autor
class Autor {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Clase Editorial
class Editorial {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Clase Libro
class Libro {
  constructor(titulo, autor, editorial) {
    this.titulo = titulo;
    this.autor = autor;       // relación con Autor
    this.editorial = editorial; // relación con Editorial
  }

  info() {
    return `${this.titulo} - ${this.autor.nombre} (${this.editorial.nombre})`;
  }
}

// PRUEBA 
const autor1 = new Autor("Gabriel García Márquez");
const editorial1 = new Editorial("Sudamericana");

const libro1 = new Libro("Cien Años de Soledad", autor1, editorial1);

console.log(libro1.info());
