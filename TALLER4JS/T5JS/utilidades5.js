import libros from './libros.json' assert { type: 'json' };

/**
 * Filtra libros cuyos títulos contengan la palabra clave.
 * @param {string} palabraClave - Texto a buscar en el título.
 * @returns {Array} Lista de libros que coinciden.
 */
export function consultarLibrosPorPalabraClaveTitulo(palabraClave) {
  return libros.filter(libro =>
    libro.titulo.toLowerCase().includes(palabraClave.toLowerCase())
  );
}

/**
 * Retorna un arreglo con solo el título y número de páginas de cada libro.
 * @returns {Array} Lista de objetos con titulo y numeroPaginas.
 */
export function consultarLibrosPaginas() {
  return libros.map(libro => ({
    titulo: libro.titulo,
    numeroPaginas: libro.numeroPaginas
  }));
}
